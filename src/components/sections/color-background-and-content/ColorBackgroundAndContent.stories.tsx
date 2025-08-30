import ColorBackgroundAndContent, {
  ColorBackground,
} from './ColorBackgroundAndContent';

const ColorBackgroundAndContentStory = {
  component: ColorBackgroundAndContent,
  title: 'Sections/ColorBackgroundAndContent',
  tags: ['autodocs'],
  decorators: (Story: React.FC) => <Story />,
};

export default ColorBackgroundAndContentStory;

export const BlueBG = {
  args: {
    background: ColorBackground.BLUE,
    className: 'p-padding',
    rounded: 'rounded-xl',
    content: (
      <div className="text-white md:px-padding text-center flex flex-col gap-xl">
        <h3>
          We <span className="font-bold">Thank You</span> again{' '}
          <span className="font-bold">for your</span> financial{' '}
          <span className="font-bold">support</span>
        </h3>
        <h4 className="md:max-w-[80%] mx-auto">
          We are blessed to have supporters like you and we are honored that you
          have chosen this Ministry as a place to sow your seed.
        </h4>
        <h3>Your partners in Christ at The Wind</h3>
      </div>
    ),
  },
};

export const YellowBG = {
  args: {
    background: ColorBackground.YELLOW,
    className: 'p-padding',
    rounded: 'rounded-xl',
    content: (
      <div className="text-black md:px-padding text-center flex flex-col gap-xl">
        <h3>
          We <span className="font-bold">Thank You</span> again{' '}
          <span className="font-bold">for your</span> financial{' '}
          <span className="font-bold">support</span>
        </h3>
        <h4 className="md:max-w-[80%] mx-auto">
          We are blessed to have supporters like you and we are honored that you
          have chosen this Ministry as a place to sow your seed.
        </h4>
        <h3>Your partners in Christ at The Wind</h3>
      </div>
    ),
  },
};
