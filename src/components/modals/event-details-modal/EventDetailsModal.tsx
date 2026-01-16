import CornerButton from '@/components/buttons/corner-button/CornerButton';
import Calendar from '@/components/icons/calendar';
import Clock from '@/components/icons/clock';
import Location from '@/components/icons/location';
import { formatDateMMMddyyyy } from '@/data/format-date';
import { Event } from '@/data/types';
import { Modal, ModalBody } from 'flowbite-react';
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
}) => (
  <Modal size="5xl" dismissible show={openModal} onClose={() => setOpenModal(!openModal)}>
    <ModalBody className="p-0">
      <div className="border border-light-gray dark:bg-dark-gray dark:border-dark-gray dark:text-dark-primaryText relative rounded-lg grid grid-cols-1 md:grid-cols-3 gap-lg p-md md:p-xl">
        <CornerButton onClick={setOpenModal} className="absolute z-10 right-0 top-0" />
        <div className="relative aspect-square md:aspect-[1/1.5] max-w-[300px]">
          <Image
            fill
            src={event.image.src}
            alt={event.image.alt ?? 'Decorative Image'}
            className="object-cover rounded-lg"
          />
        </div>
        <div className="md:col-span-2 flex flex-col gap-md h-full overflow-y-scroll overflow-hidden scrollbar-hide">
          <h2 className="font-semibold">{event.name}</h2>

          <h5 className="line-clamp-6">{event.description}</h5>

          <h5 className="flex items-center gap-sm">
            <Calendar className="dark:fill-dark-primaryText" /> {formatDateMMMddyyyy(event.date)}
          </h5>

          <h5 className="flex items-center gap-sm">
            <Clock className="dark:fill-dark-primaryText" /> {event.time.hour}
            {event.time.minute && `:${event.time.minute}`} {event.time.time_of_day}
          </h5>

          <h5 className="flex items-center gap-sm">
            <Location className="dark:fill-dark-primaryText" /> {event.location}
          </h5>

          {event.cost && (
            <div>
              <h5 className="font-bold">Costs</h5>
              <h5>{event.cost}</h5>
            </div>
          )}

          {event.ministry_event && (
            <div>
              <h5 className="font-bold">Presented By</h5>
              <h5>{event.ministry_event}</h5>
            </div>
          )}

          {event.external_host && (
            <div>
              <h5 className="font-bold">Organizer</h5>
              <h5>{event.external_host}</h5>
            </div>
          )}

          {event.how_to_signup && (
            <div>
              <h5 className="font-bold">How to Signup</h5>
              <h5>{event.how_to_signup}</h5>
            </div>
          )}

          {event.help_needed && event.help_needed.length > 0 && (
            <div>
              <h5 className="font-bold">Help Needed</h5>
              <ul className="ml-5 list-outside list-disc">
                {event.help_needed.map((item) => (
                  <li key={`event-details-help-needed-${item}`}>
                    <h5>{item}</h5>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </ModalBody>
  </Modal>
);

export default EventDetailsModal;
