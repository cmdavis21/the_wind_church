import { render, screen } from '@testing-library/react';
import React from 'react';

import { styleSelectedWords } from '@/data/utils';

import CenterTextSection from './CenterTextSection';

describe('CenterTextSection', () => {
  const title = "We're a family going through life together";
  const description =
    "We love to celebrate the Lord's blessings and support each other through difficult times. We're here for one another and for you.";
  const highlight = [
    [0, 4], // "We're" should be highlighted
    [10, 16], // "family" should be highlighted
  ];

  it('should render title and description correctly', () => {
    render(<CenterTextSection title={title} description={description} />);
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
  });

  it('should highlight words correctly when highlight prop is passed', () => {
    render(<CenterTextSection title={title} highlight={highlight} description={description} />);

    // Check if the highlighted words are wrapped with the expected class
    const highlightedWords = screen.getAllByText(/We're|family/); // Match highlighted words
    expect(highlightedWords.length).toBeGreaterThan(0); // Ensure at least one highlighted word is present
    highlightedWords.forEach((word) => {
      expect(word).toHaveClass('font-bold text-primary dark:text-primaryDark');
    });
  });

  it('should render title as React element', () => {
    const reactElementTitle = <span className="text-blue">This is a React element title</span>;
    render(<CenterTextSection title={reactElementTitle} description={description} />);

    // Check if the React element title is rendered correctly
    expect(screen.getByText('This is a React element title')).toBeInTheDocument();
  });

  it('should render without padding when noPadding is true', () => {
    render(<CenterTextSection title={title} description={description} noPadding={true} />);
    const container = screen.getByText(title).closest('div');

    // Ensure no padding class is applied
    expect(container).not.toHaveClass('py-[50px]');
  });

  it('should render with padding when noPadding is false or not provided', () => {
    render(<CenterTextSection title={title} description={description} noPadding={false} />);
    const container = screen.getByText(title).closest('div');

    // Ensure padding class is applied
    expect(container).toHaveClass('py-[50px]');
  });

  it('should handle the highlight prop for words correctly', () => {
    const result = styleSelectedWords({
      text: title,
      array: highlight,
      htmlTag: 'h1',
    });
    const highlightedText =
      '<span class="font-bold text-primary dark:text-primaryDark">We\'re</span>&nbsp;<span class="font-bold text-primary dark:text-primaryDark">family</span>';
    expect(result).toContain(highlightedText); // Check if the highlighted words are in the result
  });
});
