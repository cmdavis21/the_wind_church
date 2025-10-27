import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import SectionHeader from './SectionHeader';

describe('SectionHeader', () => {
  const title = 'Main Section Title Here';
  const subtitle = 'Additional subtext information here';

  it('should render the title and subtitle', () => {
    render(<SectionHeader title={title} subtitle={subtitle} />);
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(subtitle)).toBeInTheDocument();
  });

  it('should align text to the right when right is true', () => {
    render(<SectionHeader title={title} subtitle={subtitle} right />);
    const titleElement = screen.getByText(title);
    expect(titleElement).toHaveClass('text-right');
  });

  it('should apply the correct color classes when light is true', () => {
    render(<SectionHeader title={title} subtitle={subtitle} light />);
    expect(screen.getByText(title)).toHaveClass('text-white');
    expect(screen.getByText(subtitle)).toHaveClass('text-primary');
  });

  it('should apply the correct background color when blueBar is true', () => {
    render(<SectionHeader title={title} blueBar />);
    const barElement = screen.getByText(title).closest('div')?.querySelector('div');
    expect(barElement).toHaveClass('bg-navy');
  });

  it('should apply padding when noPadding is false', () => {
    render(<SectionHeader title={title} noPadding={false} />);
    expect(screen.getByText(title).closest('div')).toHaveClass('py-[25px]');
  });

  it('should remove padding when noPadding is true', () => {
    render(<SectionHeader title={title} noPadding />);
    expect(screen.getByText(title).closest('div')).not.toHaveClass('py-[25px]');
  });

  it('should apply the custom className', () => {
    render(<SectionHeader title={title} className="custom-class" />);
    expect(screen.getByText(title).closest('div')).toHaveClass('custom-class');
  });

  it('should render without a subtitle if none is provided', () => {
    render(<SectionHeader title={title} />);
    expect(screen.queryByText(subtitle)).not.toBeInTheDocument();
  });
});
