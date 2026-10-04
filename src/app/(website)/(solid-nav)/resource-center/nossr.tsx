'use client';

import ErrorAlert from '@/components/alerts/error-alert/ErrorAlert';
import PageScrollUpButton from '@/components/buttons/page-scroll-up-button/PageScrollUpButton';
import ResourceCard from '@/components/cards/resource-card/ResourceCard';
import ResourceCardSkeleton from '@/components/cards/resource-card/ResourceCard.skeleton';
import SelectInput from '@/components/forms/inputs/select-input/SelectInput';
import PageHeader from '@/components/heroes/page-header/PageHeader';
import Filter from '@/components/icons/filter';
import SectionHeader from '@/components/sections/section-header/SectionHeader';
import SectionHeaderSkeleton from '@/components/sections/section-header/SectionHeader.skeleton';
import { useGetAllCategorizedResources } from '@/data/client/sanity/resources';
import { SanityResourceCategories } from '@/data/types';
import { useState } from 'react';

const ResourceCenterClient = () => {
  const [filter, setFilter] = useState('');
  const { resources, resourcesLoading, resourcesError } = useGetAllCategorizedResources();

  if (resourcesError) return <ErrorAlert />;

  const sortedResources = Object.entries(resources).sort(([a], [b]) => {
    return SanityResourceCategories.indexOf(a) - SanityResourceCategories.indexOf(b);
  });

  return (
    <div className="px-padding flex flex-col gap-3xl lg:gap-4xl max-width-center">
      <PageHeader
        title="Resource Center"
        subtitle="Access important documents, forms, and resources shared within The Wind Church."
      />

      {/* FILTERING */}
      {resources && (
        <div className="w-full flex md:justify-end">
          <SelectInput
            icon={Filter}
            className="sm:w-fit sm:self-end"
            disabled={resourcesLoading || resourcesError}
            onChange={(e) => setFilter(e.target.value)}
            options={[
              { label: 'All resources', value: '' },
              ...sortedResources.map(([k, _]) => ({ label: k, value: k })),
            ]}
          />
        </div>
      )}

      {resourcesLoading &&
        Array.from({ length: 2 }).map((_, index) => (
          <div key={`resource-cat-skeleton-${index}`} className="flex flex-col gap-xl md:gap-xxl">
            <SectionHeaderSkeleton subtitle={false} />

            <div className="flex flex-wrap gap-xl">
              {Array.from({ length: 5 }).map((_, idx) => (
                <ResourceCardSkeleton key={`resource-skeleton-${idx}`} />
              ))}
            </div>
          </div>
        ))}

      {!resourcesLoading &&
        resources &&
        sortedResources
          .filter(([cat]) => filter === '' || cat === filter)
          .map(([cat, resourceList]) => (
            <div key={`resource-cat-${cat}`} className="flex flex-col gap-xl md:gap-xxl">
              <SectionHeader title={cat} />

              <div className="flex flex-wrap gap-xl">
                {resourceList.map((resource) => (
                  <ResourceCard key={`resource-${resource.title}`} {...resource} />
                ))}
              </div>
            </div>
          ))}

      {/* PAGE SCROLL-UP BUTTON */}
      <PageScrollUpButton />
    </div>
  );
};

export default ResourceCenterClient;
