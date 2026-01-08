import { render, screen } from '@testing-library/react';

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
      expect(word).toHaveClass('font-bold text-brand-primary');
    });
  });

  it('should handle the highlight prop for words correctly', () => {
    const result = styleSelectedWords({
      text: title,
      array: highlight,
      htmlTag: 'h1',
    });
    const highlightedText =
      '<span class="font-bold text-brand-primary">We\'re</span>&nbsp;<span class="font-bold text-brand-primary">family</span>';
    expect(result).toContain(highlightedText); // Check if the highlighted words are in the result
  });
});
