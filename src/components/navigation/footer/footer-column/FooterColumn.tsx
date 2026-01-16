'use client';

import React from 'react';

import { FooterColumnItem } from '@/data/types';
import Link from 'next/link';

type FooterColumnProps = FooterColumnItem;

const FooterColumn: React.FC<FooterColumnProps> = ({ label, row }) => (
  <div className="space-y-sm w-fit">
    <h6 className="uppercase tracking-wider font-light">{label}</h6>
    <div className="w-10 h-px rounded-sm bg-brand-primary" />
    <div className="flex flex-col gap-md pt-sm">
      {row.map((item) => (
        <React.Fragment key={`footer-column-${item.label}`}>
          {item.link ? (
            <Link href={item.link} className="hover:opacity-50">
              <p className="whitespace-nowrap dark:text-dark-neutral">{item.label}</p>
            </Link>
          ) : (
            <p className="whitespace-nowrap dark:text-dark-neutral">{item.label}</p>
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
);

export default FooterColumn;
