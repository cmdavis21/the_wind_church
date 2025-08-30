'use client';

import { Button } from 'flowbite-react';
import React, { ReactElement } from 'react';

import { scrollToElem } from '@/data/utils';

interface ScrollToButtonProps {
  id: string;
  label: string | ReactElement;
  color?: string;
  size?: string;
  pill?: boolean;
  className?: string;
}

const ScrollToButton: React.FC<ScrollToButtonProps> = ({
  id,
  label,
  color,
  size,
  pill,
  className,
}) => (
  <Button
    pill={pill}
    size={size ?? 'md'}
    color={color ?? 'yellow'}
    className={className ?? ''}
    onClick={() => scrollToElem(id)}
  >
    {label}
  </Button>
);

export default ScrollToButton;
