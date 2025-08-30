import React from 'react';
import { render, screen } from '@testing-library/react';

import { PageRoutes } from '@/data/page-routes';
import {
  YOUTUBE_CHANNEL,
  FACEBOOK_PROFILE,
  INSTAGRAM_PROFILE,
} from '@/data/constants';

import FooterLogoAndSocials from './FooterLogoAndSocials';

describe('FooterLogoAndSocials', () => {
  it('renders the logo and social media links', () => {
    render(<FooterLogoAndSocials />);

    // Check for the ThemeModeLogo wrapped in a link to home
    const homeLink = screen.getByRole('link', { name: /home/i });
    expect(homeLink).toHaveAttribute('href', PageRoutes.home);

    // Check for YouTube link
    const youtubeLink = screen.getByRole('link', { name: /youtube/i });
    expect(youtubeLink).toHaveAttribute('href', YOUTUBE_CHANNEL);

    // Check for Facebook link
    const facebookLink = screen.getByRole('link', { name: /facebook/i });
    expect(facebookLink).toHaveAttribute('href', FACEBOOK_PROFILE);

    // Check for Instagram link
    const instagramLink = screen.getByRole('link', { name: /instagram/i });
    expect(instagramLink).toHaveAttribute('href', INSTAGRAM_PROFILE);
  });
});
