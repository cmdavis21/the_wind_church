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
      <div className="flex gap-1 items-center">
        {type === 'success' ? (
          <CircleCheck className="fill-success" />
        ) : (
          <SolidCircleX className="fill-error" />
        )}
        <span className="font-bold">{title}</span>
      </div>
      <p className="ml-5">{description}</p>
    </Alert>
  );
};

export default AlertMessage;
