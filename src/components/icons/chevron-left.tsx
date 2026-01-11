import * as React from 'react';
const ChevronLeft: React.FC<React.SVGAttributes<unknown>> = (props) => (
  <svg
    width={props.width ?? '20px'}
    height={props.height ?? '20px'}
    className={props.className ?? ''}
    fill={props.fill ?? '#000000'}
    viewBox="0 0 640 640"
    {...props}
  >
    <path d="M169.4 297.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 320l169.3-169.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
  </svg>
);
export default ChevronLeft;
