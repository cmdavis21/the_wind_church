import { Modal, ModalBody } from 'flowbite-react';
import Image from 'next/image';
import React from 'react';

import { formatDateMMMddyyyy } from '@/data/format-date';
import CircleX from '@/components/icons/circleX';
import Location from '@/components/icons/location';
import { Event } from '@/data/types';
import Calendar from '@/components/icons/calendar';
import Clock from '@/components/icons/clock';
import DollarSign from '@/components/icons/dollarSign';
import X from '@/components/icons/x';

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
      <div className="relative rounded-lg text-black grid grid-cols-1 md:grid-cols-3 gap-xl p-md md:p-xl">
        <button
          type="button"
          className="absolute z-10 top-0 right-0 hover:opacity-50 bg-lightGray md:bg-lightGray/40 hover:bg-lightGray/80 rounded-bl-lg rounded-tr-lg p-xs"
          onClick={() => setOpenModal(!openModal)}
        >
          <X />
        </button>
        <div className="relative min-w-full h-full min-h-[300px] md:min-h-[400px] max-h-[700px] my-auto">
          <Image
            fill
            src={event.image.src}
            alt={event.image.alt ?? 'Decorative Image'}
            className="object-cover rounded-lg"
          />
        </div>
        <div className="md:col-span-2 flex flex-col gap-md h-full overflow-y-scroll y-scrollbox hide-scrollbar">
          <h2>{event.name}</h2>

          {event.categories && (
            <div className="flex flex-wrap gap-sm">
              {event.categories.map((cat) => (
                <div
                  key={cat}
                  className="px-md py-[2px] body-small bg-beige dark:bg-softBeige border-[0.5px] border-charcoal text-xs rounded-full"
                >
                  {cat}
                </div>
              ))}
            </div>
          )}

          <h5 className="line-clamp-6">{event.description}</h5>

          <h5 className="flex items-center gap-sm">
            <Calendar /> {formatDateMMMddyyyy(event.date)}
          </h5>

          <h5 className="flex items-center gap-sm">
            <Clock /> {event.time.hour}
            {event.time.minute && `:${event.time.minute}`} {event.time.time_of_day}
          </h5>

          <h5 className="flex items-center gap-sm">
            <Location /> {event.location}
          </h5>

          {event.cost && (
            <h5 className="flex items-center gap-sm">
              <DollarSign /> {event.cost}
            </h5>
          )}

          {event.ministry_event && (
            <h5>
              <span className="font-bold">Ministry:</span> {event.ministry_event}
            </h5>
          )}

          {event.external_host && (
            <h5>
              <span className="font-bold">Organizer:</span> {event.external_host}
            </h5>
          )}

          {event.contact && (
            <h5>
              <span className="font-bold">Contact:</span> {event.contact.first_name}{' '}
              {event.contact.last_name} - {event.contact.position}
            </h5>
          )}

          {event.how_to_signup && (
            <h5>
              <span className="font-bold">How to Signup:</span> {event.how_to_signup}
            </h5>
          )}

          {event.help_needed && event.help_needed.length > 0 && (
            <div>
              <h5 className="font-bold">Help Needed:</h5>
              <ul className="ml-5 grid grid-cols-2 list-outside list-disc">
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
