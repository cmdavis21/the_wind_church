import React from 'react';
import { render, screen } from '@testing-library/react';

import ImageLinkTextCard from './ImageLinkTextCard';

describe('ImageLinkTextCard', () => {
  it('should render correctly', () => {
    render(<ImageLinkTextCard />);
    expect(screen.getByText('ImageLinkTextCard Component')).toBeInTheDocument();
  });
});