import React from 'react';

import Accordion, { AccordionType } from '@/components/accordion/Accordion';
import { GiftAssessmentDefinition } from '@/data/types';

interface GiftAssessmentGiftsAccordionListProps {
  list: {
    title: string;
    gifts: GiftAssessmentDefinition[];
  }[];
}

const GiftAssessmentGiftsAccordionList: React.FC<
  GiftAssessmentGiftsAccordionListProps
> = ({ list }) =>
  list.map((item) => (
    <div
      key={`gift-assessment-gifts-accordion-list-${item.title}`}
      className="flex flex-col gap-lg"
    >
      <h4 className="font-light">{item.title}</h4>
      <Accordion
        accordionType={AccordionType.PRODUCT}
        content={item.gifts.map((gift) => ({
          title: gift.gift,
          description: (
            <div className="flex flex-col gap-md">
              <h5>{gift?.definition ?? ''}</h5>
              <div className="flex flex-wrap gap-sm items-center">
                {gift?.scriptures.map((s, index) => (
                  <React.Fragment key={`gift-assessment-modal-scripture-${s}`}>
                    <h5>{s}</h5>

                    {index !== gift.scriptures.length - 1 && (
                      <div className="bg-charcoal rounded-full h-1 w-1" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ),
        }))}
      />
    </div>
  ));

export default GiftAssessmentGiftsAccordionList;
