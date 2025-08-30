import { render, screen } from '@testing-library/react';
import React from 'react';

import BulletList from '@/components/icons/bulletList';

import ScriptureWithIcon from './ScriptureWithIcon';

describe('ScriptureWithIcon', () => {
  const icon = BulletList;
  const title = 'The Plan of Salvation';
  const verse = 'John 3:16; Romans 5:8';
  const passage =
    'We believe that while we were yet sinners Christ died for us, signing the pardon of all who believe on Him Salvation Through Grace';

  it('should render correctly', () => {
    render(
      <ScriptureWithIcon
        icon={icon}
        title={title}
        verse={verse}
        passage={passage}
      />
    );
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(verse)).toBeInTheDocument();
    expect(screen.getByText(passage)).toBeInTheDocument();
    expect(icon).toBeDefined();
  });
});
