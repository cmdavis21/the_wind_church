import X from '@/components/icons/x';

interface CornerButtonProps {
  onClick: (clicked: boolean) => void;
  className?: string;
}

const CornerButton: React.FC<CornerButtonProps> = ({ onClick, className }) => (
  <button
    type="button"
    onClick={() => onClick(false)}
    className={`${className ?? ''} p-xs border-0 hover:cursor-pointer bg-gray hover:bg-grayDark/60 dark:bg-charcoalLight dark:hover:bg-charcoal rounded-bl-lg rounded-tr-lg`}
  >
    <X className="fill-charcoal dark:fill-gray" />
  </button>
);

export default CornerButton;
