import { render, screen } from '@testing-library/react';
import React from 'react';

import PassageQuote from './PassageQuote';

describe('PassageQuote', () => {
  const passage =
    'So Christ himself gave the apostles, the prophets, the evangelists, the pastors and teachers, to equip his people for works of service, so that the body of Christ may be built up.';
  const verse = 'Ephesians 4:11-12';

  it('should render correctly', () => {
    render(<PassageQuote passage={passage} verse={verse} />);
    expect(screen.getByText(passage)).toBeInTheDocument();
    expect(screen.getByText(verse)).toBeInTheDocument();
  });
});
