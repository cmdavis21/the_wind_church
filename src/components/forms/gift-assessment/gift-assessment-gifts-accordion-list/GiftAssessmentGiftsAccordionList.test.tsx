import { render, screen } from '@testing-library/react';
import React from 'react';

import GiftAssessmentGiftsAccordionList from './GiftAssessmentGiftsAccordionList';

const mockList = [
  {
    title: 'Spiritual Gifts',
    gifts: [
      {
        gift: 'Wisdom',
        definition: 'The ability to apply knowledge and insight.',
        scriptures: ['James 1:5', 'Proverbs 2:6'],
      },
      {
        gift: 'Faith',
        definition: 'A strong trust in God’s will and power.',
        scriptures: ['Hebrews 11:1'],
      },
    ],
  },
];

describe('GiftAssessmentGiftsAccordionList', () => {
  it('renders the component without crashing', () => {
    render(<GiftAssessmentGiftsAccordionList list={mockList} />);

    // Check if the title is rendered
    expect(screen.getByText('Spiritual Gifts')).toBeInTheDocument();
  });

  it('renders the accordion titles correctly', () => {
    render(<GiftAssessmentGiftsAccordionList list={mockList} />);

    // Check if each gift is present as an accordion title
    expect(screen.getByText('Wisdom')).toBeInTheDocument();
    expect(screen.getByText('Faith')).toBeInTheDocument();
  });

  it('renders scriptures inside the accordion content', () => {
    render(<GiftAssessmentGiftsAccordionList list={mockList} />);

    // Check if scriptures are present
    expect(screen.getByText('James 1:5')).toBeInTheDocument();
    expect(screen.getByText('Proverbs 2:6')).toBeInTheDocument();
    expect(screen.getByText('Hebrews 11:1')).toBeInTheDocument();
  });
});
