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

  it('should apply the correct color classes when light is true', () => {
    render(<SectionHeader title={title} subtitle={subtitle} light />);
    expect(screen.getByText(title)).toHaveClass('text-white');
    expect(screen.getByText(subtitle)).toHaveClass('text-brand-primary');
  });

  it('should render without a subtitle if none is provided', () => {
    render(<SectionHeader title={title} />);
    expect(screen.queryByText(subtitle)).not.toBeInTheDocument();
  });
});
