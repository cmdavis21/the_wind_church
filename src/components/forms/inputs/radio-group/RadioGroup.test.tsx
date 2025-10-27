import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RadioGroup from './RadioGroup';

describe('RadioGroup', () => {
  const labelText = 'Choose an option';
  const options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
  ];

  it('should render the label and select element', () => {
    render(<RadioGroup label={labelText} options={options} name={''} />);

    // Check if the label is present
    expect(screen.getByLabelText(labelText)).toBeInTheDocument();

    // Check if the select input is present
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('should render options correctly', () => {
    render(<RadioGroup label={labelText} options={options} />);

    // Open the select dropdown
    userEvent.selectOptions(screen.getByRole('combobox'), '1');

    // Check if the options are in the document
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  it('should display an error message when provided', () => {
    const errorMessage = 'This field is required';
    render(<RadioGroup label={labelText} options={options} error={errorMessage} />);

    // Check if the error message is displayed
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });
});
