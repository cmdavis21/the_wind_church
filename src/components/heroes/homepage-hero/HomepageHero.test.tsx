import React from 'react';
import { render, screen } from '@testing-library/react';
import HomepageHero from './HomepageHero';

describe('HomepageHero', () => {
  it('should render correctly', () => {
    render(<HomepageHero />);
    expect(screen.getByText('HomepageHero Component')).toBeInTheDocument();
  });
});