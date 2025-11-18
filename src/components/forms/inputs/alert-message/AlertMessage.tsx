import CircleCheck from '@/components/icons/circleCheck';
import SolidCircleX from '@/components/icons/solidCircleX';
import { Alert } from 'flowbite-react';

interface AlertMessageProps {
  type: 'success' | 'failure';
  title: string;
  description?: string;
}

const AlertMessage: React.FC<AlertMessageProps> = ({ type = 'success', title, description }) => {
  return (
    <Alert color={type} withBorderAccent>
      <span className="flex flex-col md:flex-row md:items-center gap-xs">
        <span className="font-bold flex flex-row items-center gap-xs">
          {type === 'success' ? (
            <CircleCheck className="fill-success" />
          ) : (
            <SolidCircleX className="fill-error" />
          )}
          {title}
        </span>
        {description}
      </span>
    </Alert>
  );
};

export default AlertMessage;
