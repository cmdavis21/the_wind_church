import CornerButton from '@/components/buttons/corner-button/CornerButton';
import { formatDateMMMddyyyy } from '@/data/format-date';
import { useWindowDimensions } from '@/data/hooks';
import { Event } from '@/data/types';
import { Badge, Modal, ModalBody } from 'flowbite-react';
import React, { useEffect, useRef, useState } from 'react';

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
    ministry_event,
    external_host,
    cost,
    categories,
    how_to_signup,
    additional_notes,
    help_needed,
    image,
  } = event;

  const { width } = useWindowDimensions();
  const [height, setHeight] = useState<number | undefined>(undefined);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const SetBlurSize = () => {
    const padding = width >= 768 ? 272 : 136;
    setHeight((containerRef.current?.offsetHeight ?? 500) + padding);
  };

  useEffect(() => {
    SetBlurSize();
  }, [containerRef.current, width, openModal]);

  return (
    <Modal size="5xl" dismissible show={openModal} onClose={() => setOpenModal(!openModal)}>
      <ModalBody className="p-0">
        <div
          onScroll={SetBlurSize}
          style={{
            backgroundImage: `url(${image.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className="relative rounded-lg p-md md:p-xl overflow-y-scroll scrollbar-hide max-h-[600px] md:max-h-[500px]"
        >
          {/* BLUR */}
          <div
            style={{ height }}
            className="absolute inset-0 backdrop-blur-[1px] rounded-lg bg-black/10"
          />

          {/* CONTENT */}
          <div
            ref={containerRef}
            className="relative mt-4xl md:mt-7xl bg-light-bg dark:bg-dark-bg p-md md:p-xl rounded-lg flex flex-col gap-lg"
          >
            <CornerButton onClick={setOpenModal} className="absolute z-10 right-0 top-0" />
            {categories && categories.length > 0 && (
              <div className="flex flex-wrap gap-sm pr-2.5">
                {categories?.map((cat) => (
                  <Badge
                    key={`event-modal-${cat}`}
                    color="gray"
                    size="sm"
                    className="whitespace-nowrap"
                  >
                    {cat}
                  </Badge>
                ))}
              </div>
            )}
            <h5 className="font-bold">
              Presented By {ministry_event ?? external_host ?? 'The Wind Church'}
            </h5>
            <h2>{name}</h2>
            <h5>{description}</h5>
            <h4>
              {formatDateMMMddyyyy(date)} •{' '}
              <span>
                {time.hour}:{time.minute}
                {time.time_of_day}
              </span>{' '}
              • {location}
            </h4>
            <hr />

            {how_to_signup && (
              <div>
                <h5 className="font-semibold">How to signup</h5>
                <h5>{how_to_signup}</h5>
              </div>
            )}
            {cost && (
              <div>
                <h5 className="font-semibold">Cost</h5>
                <h5>{cost}</h5>
              </div>
            )}
            {help_needed && help_needed.length > 0 && (
              <div>
                <h5 className="font-semibold">Help Needed</h5>
                <ul className="ml-5 list-outside list-disc">
                  {help_needed.map((item) => (
                    <li key={`event-details-help-needed-${item}`}>
                      <h5>{item}</h5>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {additional_notes && (
              <div>
                <h5 className="font-semibold">Additional Notes</h5>
                <h5>{additional_notes}</h5>
              </div>
            )}
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default EventDetailsModal;
