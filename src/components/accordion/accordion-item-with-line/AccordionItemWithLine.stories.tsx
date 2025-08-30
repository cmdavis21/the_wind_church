import Image from 'next/image';

import AccordionItemWithLine from './AccordionItemWithLine';

const AccordionItemWithLineStory = {
  component: AccordionItemWithLine,
  title: 'Accordion/AccordionItemWithLine',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default AccordionItemWithLineStory;

export const Default = {
  args: {
    defaultOpen: true,
    title: 'Lorem ipsum dolor sit amet',
    description:
      'Amet reprehenderit error explicabo velit repudiandae? Perferendis reiciendis velit esse deleniti maiores et minima aperiam odit consectetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
  },
};

export const WithComponent = {
  args: {
    title: 'Lorem ipsum dolor sit amet',
    description: (
      <div className="flex gap-xl">
        <div className="relative w-[300px] aspect-square">
          <Image
            src="/images/misc/logo_placeholder.png"
            alt=""
            fill
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-md">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
            voluptates autem sunt consectetur sapiente totam nulla quisquam
            laboriosam, magni non minima quos nostrum sed! Harum repellat
            accusamus similique perspiciatis velit.
          </p>
          <p>
            Nisi, odit esse sint eum impedit et beatae, nihil error ipsum,
            repudiandae consectetur quas? Voluptatibus hic doloribus voluptate
            nam itaque, aut saepe deserunt ea optio odit id omnis maxime quidem!
          </p>
        </div>
      </div>
    ),
  },
};
