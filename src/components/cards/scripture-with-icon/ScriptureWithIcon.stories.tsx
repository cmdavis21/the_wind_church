import BulletList from '@/components/icons/bulletList';

import ScriptureWithIcon from './ScriptureWithIcon';

const ScriptureWithIconStory = {
  component: ScriptureWithIcon,
  title: 'Cards/ScriptureWithIcon',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default ScriptureWithIconStory;

export const Default = {
  args: {
    icon: BulletList,
    title: 'The Plan of Salvation',
    verse: 'John 3:16; Romans 5:8',
    passage:
      'We believe that while we were yet sinners Christ died for us, signing the pardon of all who believe on Him Salvation Through Grace',
  },
};
