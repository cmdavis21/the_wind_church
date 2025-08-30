import LanguageSelectorSelect from './LanguageSelectorSelect';

const LanguageSelectorSelectStory = {
    component: LanguageSelectorSelect,
    title: 'component/LanguageSelectorSelect',
    tags: ['autodocs'],
    decorators: (Story: React.FC) => <Story />,
};

export default LanguageSelectorSelectStory;

export const Default = {
    args: {},
};