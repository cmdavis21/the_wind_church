import React from 'react';
import { render, screen } from '@testing-library/react';
import AnimativeFillButton from './AnimativeFillButton';

describe('AnimativeFillButton', () => {
  it('should render correctly', () => {
    render(<AnimativeFillButton />);
    expect(screen.getByText('AnimativeFillButton Component')).toBeInTheDocument();
  });
});