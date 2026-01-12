import { render, screen } from '@testing-library/react';

import FooterPromoBanner from './FooterPromoBanner';

describe('FooterPromoBanner', () => {
  it('should render correctly', () => {
    render(<FooterPromoBanner />);
    expect(screen.getByText('FooterPromoBanner Component')).toBeInTheDocument();
  });
});
