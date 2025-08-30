import TestimonialCard from './TestimonialCard';

const TestimonialCardStory = {
    component: TestimonialCard,
    title: 'component/TestimonialCard',
    tags: ['autodocs'],
    decorators: (Story: React.FC) => <Story />,
};

export default TestimonialCardStory;

export const Default = {
    args: {},
};