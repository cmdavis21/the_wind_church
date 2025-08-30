import { render, screen } from '@testing-library/react';
import React from 'react';

import PageHeaderWithBackground from './PageHeaderWithBackground';

describe('PageHeaderWithBackground', () => {
  const media = {
    src: '/images/misc/logo_placeholder.png',
    alt: 'decorative background image',
    poster: '',
  };
  const title = 'Page Headline';
  const subtitle =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis delectus impedit dolorum!';

  it('should render title and subtitle correctly', () => {
    render(
      <PageHeaderWithBackground
        media={media}
        title={title}
        subtitle={subtitle}
      />
    );
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(subtitle)).toBeInTheDocument();
  });

  it('should apply the correct background image', () => {
    render(
      <PageHeaderWithBackground
        media={media}
        title={title}
        subtitle={subtitle}
      />
    );
    const image = screen.getByAltText(media.alt);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', media.src);
  });

  it('should apply the short height class when short is true', () => {
    render(
      <PageHeaderWithBackground
        media={media}
        title={title}
        subtitle={subtitle}
        short={true}
      />
    );
    const container = screen.getByRole('banner');
    expect(container).toHaveClass('h-[55dvh]');
  });

  it('should apply the default height class when short is false', () => {
    render(
      <PageHeaderWithBackground
        media={media}
        title={title}
        subtitle={subtitle}
        short={false}
      />
    );
    const container = screen.getByRole('banner');
    expect(container).toHaveClass('h-[65dvh]');
  });
});
