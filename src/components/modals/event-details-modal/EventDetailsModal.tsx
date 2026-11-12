'use client';

import CornerButton from '@/components/buttons/corner-button/CornerButton';
import Calendar from '@/components/icons/calendar';
import Clock from '@/components/icons/clock';
import Location from '@/components/icons/location';
import { useDominantColor } from '@/data/client/use-dominant-color';

import { formatDateMMMddyyyy, formatTimeHmm } from '@/data/format-date';
import { Event } from '@/data/types';
import { darkenRgb } from '@/data/utils';
import { isSameDay } from 'date-fns';

import { Badge, Modal, ModalBody } from 'flowbite-react';
import { useTranslations } from 'next-intl';
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
  const t = useTranslations('Events');

  const {
    name,
    start_date_time,
    end_date_time,
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
  const sameDay = end_date_time ? isSameDay(end_date_time, start_date_time) : false;

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
              <p className="text-light-gray dark:text-dark-gray text-sm font-semibold mb-1">
                {t('presenter', {
                  name: external_organizer ?? associated_ministry ?? 'The Wind Church',
                })}
              </p>

              <h3 id={titleId} className="text-white font-bold leading-tight">
                {name}
              </h3>
            </div>
          </div>

          {/* DETAILS PANEL */}
          <div className="flex-1 overflow-y-auto scrollbar-hide p-lg md:p-xl bg-light-bg dark:bg-dark-bg">
            {categories && categories.length > 0 && (
              <div className="flex flex-wrap gap-sm mb-sm">
                {categories.map((cat) => (
                  <Badge key={`event-modal-${cat}`} color="gray" size="xs">
                    {t(`categories.${cat}`)}
                  </Badge>
                ))}
              </div>
            )}

            {description && (
              <p className="text-light-secondaryText dark:text-dark-primaryText mb-lg">
                {description}
              </p>
            )}

            {/* DATE */}
            <div className="flex items-center gap-sm pb-sm">
              <Calendar
                aria-hidden="true"
                className="fill-current shrink-0"
                style={{ color: accent }}
              />
              <p className="font-medium">
                {formatDateMMMddyyyy(start_date_time)}{' '}
                {!sameDay && ` - ${formatDateMMMddyyyy(end_date_time)}`}
              </p>
            </div>

            {/* TIME */}
            <div className="flex items-center gap-sm pb-sm">
              <Clock
                aria-hidden="true"
                className="fill-current shrink-0"
                style={{ color: accent }}
              />
              <p className="font-medium">
                {formatTimeHmm(start_date_time)}{' '}
                {end_date_time && ` - ${formatTimeHmm(end_date_time)}`}
              </p>
            </div>

            {/* LOCATION */}
            <div className="flex items-start gap-sm pb-sm">
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
                  <p className="font-semibold mb-1">{t('howTo')}</p>
                  <p>{how_to_signup}</p>
                </div>
              )}

              {cost && (
                <div>
                  <p className="font-semibold mb-1">{t('cost')}</p>
                  <p>{cost}</p>
                </div>
              )}

              {help_needed && help_needed.length > 0 && (
                <div>
                  <p className="font-semibold mb-1">{t('help')}</p>
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
                  <p className="font-semibold mb-1">{t('additional')}</p>
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
