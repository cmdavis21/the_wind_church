import { render, screen } from '@testing-library/react';
import React from 'react';

import PageHeader from './PageHeader';

describe('PageHeader', () => {
  const title = 'Page Headline';
  const subtitle =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis delectus impedit dolorum!';

  it('should render correctly', () => {
    render(<PageHeader title={title} subtitle={subtitle} />);
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(subtitle)).toBeInTheDocument();
  });
});
