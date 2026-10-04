'use client';

import CornerButton from '@/components/buttons/corner-button/CornerButton';
import Calendar from '@/components/icons/calendar';
import Clock from '@/components/icons/clock';
import Location from '@/components/icons/location';
import { useDominantColor } from '@/data/client/use-dominant-color';

import { formatDateMMMddyyyy } from '@/data/format-date';
import { Event } from '@/data/types';
import { darkenRgb } from '@/data/utils';

import { Badge, Modal, ModalBody } from 'flowbite-react';
import Image from 'next/image';
import React from 'react';

interface EventDetailsModalProps {
  event: Event;
  openModal: boolean;
  setOpenModal: (openModal: boolean) => void;
}

const EventDetailsModal: React.FC<EventDetailsModalProps> = ({
  event,
  openModal,
  setOpenModal,
}) => {
  const {
    name,
    date,
    time,
    description,
    location,
    associated_ministry,
    external_organizer,
    cost,
    categories,
    how_to_signup,
    additional_notes,
    help_needed,
    image,
  } = event;

  const { color } = useDominantColor(image.src, 'bottom');
  const accent = darkenRgb(color, 0.15);
  const titleId = `event-modal-title-${event.name}`;

  return (
    <Modal size="5xl" dismissible show={openModal} onClose={() => setOpenModal(!openModal)}>
      <ModalBody className="p-0" aria-labelledby={titleId}>
        <div className="relative flex flex-col md:flex-row max-h-[85vh] md:max-h-[600px] overflow-hidden rounded-lg">
          <CornerButton
            onClick={setOpenModal}
            className="absolute z-20 right-0 top-0 md:right-0 md:top-0"
          />

          {/* HERO PANEL — image + title, fixed, doesn't scroll with content */}
          <div className="relative w-full md:w-[42%] h-[220px] md:h-auto shrink-0">
            <Image fill src={image.src} alt={image.alt ?? ''} className="object-cover" />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to top, ${accent} 5%, transparent 55%)`,
              }}
            />
            <div className="absolute inset-x-0 bottom-0 p-lg">
              {categories && categories.length > 0 && (
                <div className="flex flex-wrap gap-sm mb-sm">
                  {categories.map((cat) => (
                    <Badge key={`event-modal-${cat}`} color="gray" size="sm">
                      {cat}
                    </Badge>
                  ))}
                </div>
              )}
              <p className="text-white/80 text-sm font-semibold mb-1">
                Presented by {external_organizer ?? associated_ministry ?? 'The Wind Church'}
              </p>
              <h2 id={titleId} className="text-white font-bold leading-tight">
                {name}
              </h2>
            </div>
          </div>

          {/* DETAILS PANEL */}
          <div className="flex-1 overflow-y-auto scrollbar-hide p-lg md:p-xl bg-light-bg dark:bg-dark-bg">
            {description && (
              <p className="text-light-secondaryText dark:text-dark-primaryText mb-lg">
                {description}
              </p>
            )}

            {/* DATE */}
            <div
              className="flex items-center gap-sm rounded-xl pb-sm"
              style={{ backgroundColor: `${accent}1A` /* ~10% alpha */ }}
            >
              <Calendar
                aria-hidden="true"
                className="fill-current shrink-0"
                style={{ color: accent }}
              />
              <p className="font-medium">{formatDateMMMddyyyy(date)}</p>
            </div>

            {/* TIME */}
            <div
              className="flex items-center gap-sm rounded-xl pb-sm"
              style={{ backgroundColor: `${accent}1A` }}
            >
              <Clock
                aria-hidden="true"
                className="fill-current shrink-0"
                style={{ color: accent }}
              />
              <p className="font-medium">
                {time.hour}:{time.minute} {time.time_of_day} {time.time_zone}
              </p>
            </div>

            {/* LOCATION */}
            <div
              className="flex items-center gap-sm rounded-xl pb-sm"
              style={{ backgroundColor: `${accent}1A` }}
            >
              <Location
                aria-hidden="true"
                width={23}
                height={23}
                className="fill-current shrink-0"
                style={{ color: accent }}
              />
              <div>
                <p className="font-medium">{location.name}</p>
                <p className="font-medium">
                  {location.address}, {location.city} {location.state} {location.zip}
                </p>
                {location.sublocation && <p className="font-medium">{location.sublocation}</p>}
              </div>
            </div>

            <hr className="border-light-gray dark:border-dark-gray mb-lg" />

            <div className="flex flex-col gap-lg">
              {how_to_signup && (
                <div>
                  <p className="font-semibold mb-1">How to sign up</p>
                  <p>{how_to_signup}</p>
                </div>
              )}
              {cost && (
                <div>
                  <p className="font-semibold mb-1">Cost</p>
                  <p>{cost}</p>
                </div>
              )}
              {help_needed && help_needed.length > 0 && (
                <div>
                  <p className="font-semibold mb-1">Help Needed</p>
                  <ul className="ml-5 list-outside list-disc">
                    {help_needed.map((item) => (
                      <li key={`event-details-help-needed-${item}`}>
                        <p>{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {additional_notes && (
                <div>
                  <p className="font-semibold mb-1">Additional Notes</p>
                  <p>{additional_notes}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default EventDetailsModal;
