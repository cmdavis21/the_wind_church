import { render, screen } from '@testing-library/react';
import React from 'react';

import Footer from './Footer';

describe('Footer', () => {
  it('renders all footer sections', () => {
    render(<Footer />);

    // Check that footer columns are rendered
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Wind Family')).toBeInTheDocument();
    expect(screen.getByText('More Wind')).toBeInTheDocument();

    // Check that some links exist
    expect(screen.getByText('Pastor Singletary')).toBeInTheDocument();
    expect(screen.getByText('Donate')).toBeInTheDocument();
    expect(screen.getByText('Plan Your Visit')).toBeInTheDocument();

    // Check that FooterContact component renders
    expect(screen.getByText('Address')).toBeInTheDocument();
    expect(screen.getByText('Office Hours')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();

    // Check that DarkThemeToggler is rendered
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('renders footer member signup', () => {
    render(<Footer />);
    expect(screen.getByText('Sign up for our newsletter')).toBeInTheDocument();
  });

  it('checks the presence of specific links', () => {
    render(<Footer />);

    // Check that the correct links are rendered with expected hrefs
    expect(
      screen.getByRole('link', { name: 'Pastor Singletary' })
    ).toHaveAttribute('href', '/about#pastor-singletary');
    expect(screen.getByRole('link', { name: 'Donate' })).toHaveAttribute(
      'href',
      '/give'
    );
    expect(screen.getByRole('link', { name: 'Gallery' })).toHaveAttribute(
      'href',
      '/gallery'
    );
  });
});
