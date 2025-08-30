import ImageLinkTextCard from './ImageLinkTextCard';

const ImageLinkTextCardStory = {
    component: ImageLinkTextCard,
    title: 'component/ImageLinkTextCard',
    tags: ['autodocs'],
    decorators: (Story: React.FC) => <Story />,
};

export default ImageLinkTextCardStory;

export const Default = {
    args: {},
};