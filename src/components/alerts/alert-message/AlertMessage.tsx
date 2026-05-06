import CircleCheck from '@/components/icons/circle-check';
import SolidCircleX from '@/components/icons/circle-x';
import { Alert } from 'flowbite-react';

interface AlertMessageProps {
  type: 'success' | 'failure';
  title: string;
  description?: string;
}

const AlertMessage: React.FC<AlertMessageProps> = ({ type = 'success', title, description }) => {
  return (
    <Alert color={type} withBorderAccent>
      <span className="flex flex-row gap-1">
        {type === 'success' ? (
          <CircleCheck className="fill-success" />
        ) : (
          <SolidCircleX className="fill-error" />
        )}
        <span className="flex flex-col">
          <span className="font-bold">{title}</span>
          <span>{description}</span>
        </span>
      </span>
    </Alert>
  );
};

export default AlertMessage;
