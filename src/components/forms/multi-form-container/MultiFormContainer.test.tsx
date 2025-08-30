import { render, screen, fireEvent } from '@testing-library/react';

import MultiFormContainer from './MultiFormContainer';

describe('MultiFormContainer', () => {
  const mockForms = [
    {
      buttonLabel: 'Form 1',
      header: { title: 'Title 1', description: 'Description 1' },
      form: <div>Form Content 1</div>,
    },
    {
      buttonLabel: 'Form 2',
      header: { title: 'Title 2', description: 'Description 2' },
      form: <div>Form Content 2</div>,
    },
  ];

  it('renders the component with the first form active by default', () => {
    render(<MultiFormContainer forms={mockForms} />);

    expect(screen.getByText('Title 1')).toBeInTheDocument();
    expect(screen.getByText('Description 1')).toBeInTheDocument();
    expect(screen.getByText('Form Content 1')).toBeInTheDocument();
  });

  it('switches to the second form when a mobile button is clicked', () => {
    render(<MultiFormContainer forms={mockForms} />);

    const button = screen.getByText('Form 2');
    fireEvent.click(button);

    expect(screen.getByText('Title 2')).toBeInTheDocument();
    expect(screen.getByText('Description 2')).toBeInTheDocument();
    expect(screen.getByText('Form Content 2')).toBeInTheDocument();
  });

  it('switches to the second form when the ToggleSlider option is clicked', () => {
    render(<MultiFormContainer forms={mockForms} />);

    const toggleOption = screen.getByText('Form 2');
    fireEvent.click(toggleOption);

    expect(screen.getByText('Title 2')).toBeInTheDocument();
    expect(screen.getByText('Description 2')).toBeInTheDocument();
    expect(screen.getByText('Form Content 2')).toBeInTheDocument();
  });
});
