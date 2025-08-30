import MinistryConnectionForm from './MinistryConnectionForm';

const MinistryConnectionFormStory = {
    component: MinistryConnectionForm,
    title: 'component/MinistryConnectionForm',
    tags: ['autodocs'],
    decorators: (Story: React.FC) => <Story />,
};

export default MinistryConnectionFormStory;

export const Default = {
    args: {},
};