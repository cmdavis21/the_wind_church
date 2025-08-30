import { render, screen } from '@testing-library/react';
import React from 'react';

import FooterContact from './FooterContact';

describe('FooterContact', () => {
  it('renders FooterLogoAndSocials', () => {
    render(<FooterContact />);
    expect(screen.getByRole('link', { name: /youtube/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /facebook/i })).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /instagram/i })
    ).toBeInTheDocument();
  });

  it('renders all footer columns with correct labels', () => {
    render(<FooterContact />);

    expect(screen.getByText('Address')).toBeInTheDocument();
    expect(screen.getByText('6476 Streeter Avenue')).toBeInTheDocument();
    expect(screen.getByText('Riverside, CA 92504')).toBeInTheDocument();

    expect(screen.getByText('Office Hours')).toBeInTheDocument();
    expect(screen.getByText('Monday - Thursday')).toBeInTheDocument();
    expect(screen.getByText('9:00 am to 4:00 pm')).toBeInTheDocument();

    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByText('951.359.0203')).toBeInTheDocument();

    const emailLink = screen.getByRole('link', {
      name: 'thewindchurch@outlook.com',
    });
    expect(emailLink).toHaveAttribute(
      'href',
      'mailto:thewindchurch@outlook.com'
    );
  });
});
