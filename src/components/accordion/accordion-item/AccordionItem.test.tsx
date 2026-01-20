import { fireEvent, render, screen } from '@testing-library/react';
import AccordionItem, { ACCORDION_TYPE } from './AccordionItem';

// Mock Plus icon
jest.mock('@/components/icons/plus', () => () => <svg data-testid="plus-icon" />);

// Mock next/image
jest.mock('next/image', () => (props: any) => <img {...props} alt={props.alt || 'image'} />);

// Mock height observer hook
jest.mock('@/data/hooks', () => ({
  useResizeHeightObserver: () => 100,
}));

describe('AccordionItem', () => {
  const baseProps = {
    title: 'Test Title',
    description: 'Test Description',
  };

  test('renders title and description (collapsed by default)', () => {
    render(<AccordionItem {...baseProps} />);

    expect(screen.getByText('Test Title')).toBeInTheDocument();

    // Description should be hidden initially
    const dropdown = screen.getByText('Test Description').parentElement?.parentElement;
    expect(dropdown).toHaveStyle('height: 0px');
  });

  test('opens when clicked', () => {
    render(<AccordionItem {...baseProps} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    const dropdown = screen.getByText('Test Description').parentElement?.parentElement;
    expect(dropdown).toHaveStyle('height: 120px'); // 100 + 20 for DEFAULT variant
  });

  test('respects defaultOpen prop', () => {
    render(<AccordionItem {...baseProps} defaultOpen />);

    const dropdown = screen.getByText('Test Description').parentElement?.parentElement;
    expect(dropdown).toHaveStyle('height: 120px');
  });

  test('renders image when provided', () => {
    render(<AccordionItem {...baseProps} image="/test.png" />);

    expect(screen.getByRole('img')).toHaveAttribute('src', '/test.png');
  });

  test('renders icon when provided', () => {
    const MockIcon = () => <svg data-testid="mock-icon" />;

    render(<AccordionItem {...baseProps} icon={MockIcon} />);

    expect(screen.getByTestId('mock-icon')).toBeInTheDocument();
  });

  test('applies MINIMAL variant styles', () => {
    render(<AccordionItem {...baseProps} variant={ACCORDION_TYPE.MINIMAL} />);

    const button = screen.getByRole('button');

    // Minimal variant uses border-bottom only
    expect(button.className).toMatch(/border-light-gray/);
  });

  test('dropdown height uses minimal offset when MINIMAL variant is open', () => {
    render(<AccordionItem {...baseProps} variant={ACCORDION_TYPE.MINIMAL} defaultOpen />);

    const dropdown = screen.getByText('Test Description').parentElement?.parentElement;

    // height = 100 + 10 for MINIMAL
    expect(dropdown).toHaveStyle('height: 110px');
  });
});
