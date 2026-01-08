'use client';

import { Button } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import React from 'react';

import TurnLeft from '@/components/icons/turnLeft';

interface GoBackButtonProps {
  color?: string;
  icon?: boolean;
  iconClassName?: string;
  label?: string;
}

const GoBackButton: React.FC<GoBackButtonProps> = ({
  color,
  icon = true,
  iconClassName,
  label,
}) => {
  const router = useRouter();
  return (
    <Button
      pill
      size="lg"
      color={color ?? 'clear_black'}
      onClick={() => router.back()}
      className="h-full group"
    >
      <div className="flex items-center gap-sm">
        {icon && <TurnLeft className={`${iconClassName ?? 'group-hover:fill-brand-primary'}`} />}
        {label ?? 'Go back'}
      </div>
    </Button>
  );
};

export default GoBackButton;
