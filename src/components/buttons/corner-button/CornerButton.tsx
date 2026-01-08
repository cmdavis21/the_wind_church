import X from '@/components/icons/x';

interface CornerButtonProps {
  onClick: (clicked: boolean) => void;
  className?: string;
}

const CornerButton: React.FC<CornerButtonProps> = ({ onClick, className }) => (
  <button
    type="button"
    onClick={() => onClick(false)}
    className={`${className ?? ''} p-xs border-0 hover:cursor-pointer bg-light-gray dark:bg-dark-gray opacity-75 rounded-bl-lg rounded-tr-lg`}
  >
    <X className="fill-light-charcoal dark:fill-dark-neutral" />
  </button>
);

export default CornerButton;
