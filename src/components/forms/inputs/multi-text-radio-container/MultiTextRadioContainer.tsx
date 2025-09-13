import TextRadio from '../text-radio/TextRadio';

interface MultiTextRadioContainerProps {
  label: string;
  onSelect: (selected: string) => void;
  options: {
    selected: boolean;
    text: string;
    color?: string;
  }[];
}

const MultiTextRadioContainer: React.FC<MultiTextRadioContainerProps> = ({
  label,
  onSelect,
  options,
}) => (
  <div className="flex flex-col gap-sm">
    <h5>{label}</h5>
    <div className="flex flex-wrap gap-sm">
      {options.map((opt) => (
        <TextRadio
          key={opt.text}
          text={opt.text}
          color={opt.color}
          selected={opt.selected}
          onSelect={onSelect}
        />
      ))}
    </div>
  </div>
);

export default MultiTextRadioContainer;
