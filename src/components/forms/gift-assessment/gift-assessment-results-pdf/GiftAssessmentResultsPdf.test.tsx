import React from 'react';
import { renderToStream } from '@react-pdf/renderer';

import { GiftAssessmentDefinition } from '@/data/types';

import GiftAssessmentResultsPdf from './GiftAssessmentResultsPdf';

describe('GiftAssessmentResultsPdf', () => {
  const mockDominateGifts: GiftAssessmentDefinition[] = [
    {
      gift: 'Teaching',
      definition: 'The ability to explain and apply biblical truth.',
      scriptures: ['James 3:1', 'Romans 12:7'],
    },
  ];

  const mockSubordinateGifts: GiftAssessmentDefinition[] = [
    {
      gift: 'Leadership',
      definition: 'The ability to guide others in the church.',
      scriptures: ['Romans 12:8', '1 Timothy 3:1'],
    },
  ];

  const mockProps = {
    dominateGifts: mockDominateGifts,
    subordinateGifts: mockSubordinateGifts,
    ministriesInvolvedIn: 'Teaching Sunday School',
    changeInMinistry: 'Considering youth ministry',
    layOrClergy: 'Lay',
  };

  it('should generate a valid PDF document', async () => {
    const pdfString = await renderToStream(
      <GiftAssessmentResultsPdf {...mockProps} />
    );

    expect(pdfString).toContain('Spiritual Gift Assessment Results');
    expect(pdfString).toContain('Your 1 Dominate Gifts');
    expect(pdfString).toContain('Teaching');
    expect(pdfString).toContain('Your 1 Subordinate Gifts');
    expect(pdfString).toContain('Leadership');
    expect(pdfString).toContain('Teaching Sunday School');
    expect(pdfString).toContain('Considering youth ministry');
    expect(pdfString).toContain('Lay');
  });
});
