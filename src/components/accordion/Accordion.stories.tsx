import PencilPaper from '../icons/pencilPaper';
import Accordion from './Accordion';
import { ACCORDION_TYPE } from './accordion-item/AccordionItem';

const AccordionStory = {
  component: Accordion,
  title: 'Accordion/Accordion',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default AccordionStory;

export const Default = {
  args: {
    content: [
      {
        title: 'Lorem ipsum dolor sit amet',
        description:
          'Amet reprehenderit error explicabo velit repudiandae? Perferendis reiciendis velit esse deleniti maiores et minima aperiam odit consectetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      },
      {
        image: '/images/misc/logo_placeholder.png',
        title: 'Lorem ipsum dolor sit amet',
        description:
          'Amet reprehenderit error explicabo velit repudiandae? Perferendis reiciendis velit esse deleniti maiores et minima aperiam odit consectetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      },
      {
        icon: PencilPaper,
        title: 'Lorem ipsum dolor sit amet',
        description:
          'Amet reprehenderit error explicabo velit repudiandae? Perferendis reiciendis velit esse deleniti maiores et minima aperiam odit consectetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      },
    ],
  },
};

export const MinimalAccordion = {
  args: {
    variant: ACCORDION_TYPE.MINIMAL,
    content: [
      {
        title: 'Lorem ipsum dolor sit amet',
        description:
          'Amet reprehenderit error explicabo velit repudiandae? Perferendis reiciendis velit esse deleniti maiores et minima aperiam odit consectetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      },
      {
        title: 'Lorem ipsum dolor sit amet',
        description:
          'Amet reprehenderit error explicabo velit repudiandae? Perferendis reiciendis velit esse deleniti maiores et minima aperiam odit consectetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      },
      {
        title: 'Lorem ipsum dolor sit amet',
        description:
          'Amet reprehenderit error explicabo velit repudiandae? Perferendis reiciendis velit esse deleniti maiores et minima aperiam odit consectetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      },
    ],
  },
};
