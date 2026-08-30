'use client';
import React from 'react';

import FileIcon from '@/components/icons/file';
import LinkIcon from '@/components/icons/link-icon';
import Play from '@/components/icons/play';
import { formatDateMMMddyyyy } from '@/data/format-date';
import { ResourceItem } from '@/data/types';
import { Button } from 'flowbite-react';
import Link from 'next/link';

interface ResourceCardProps extends ResourceItem {}

const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  type,
  description,
  file,
  file_size,
  url,
  updated_at,
}) => {
  return (
    <div className="w-[325px] h-auto flex flex-col gap-md rounded-xl border border-light-gray dark:bg-dark-gray dark:border-dark-gray shadow-sm hover:shadow-md transition-all p-md">
      {/* Header */}
      <div className="flex items-center gap-md">
        <div className="size-[48px] min-w-[48px] rounded-lg bg-light-gray dark:bg-dark-neutral flex items-center justify-center">
          {type === 'File' ? <FileIcon /> : type === 'Link' ? <LinkIcon /> : <Play />}
        </div>

        <div className="flex flex-col">
          <h3 className="font-semibold text-lg leading-tight">{title}</h3>
          <p className="body-small text-light-secondaryText dark:text-dark-secondaryText">
            Updated {formatDateMMMddyyyy(updated_at)}
          </p>
        </div>
      </div>

      {/* Description */}
      {description && (
        <p className="text-sm text-light-charcoal dark:text-dark-charcoal line-clamp-3">
          {description}
        </p>
      )}

      {/* Actions */}
      <div className="mt-auto flex gap-sm w-full">
        {file && (
          <Link target="_blank" download={file} href={file} className="w-full">
            <Button color="info" pill fullSized>
              Download{' '}
              {file_size && (
                <span className="ml-1 mt-1 text-xs text-light-secondaryText dark:text-dark-charcoal">
                  ({file_size})
                </span>
              )}
            </Button>
          </Link>
        )}

        {url && (
          <Link target="_blank" href={url} className="w-full">
            <Button color="info" pill fullSized>
              Visit Link
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ResourceCard;
