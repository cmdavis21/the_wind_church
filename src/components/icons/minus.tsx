import * as React from 'react';
const Minus: React.FC<React.SVGAttributes<unknown>> = (props) => (
  <svg
    width={props.width ?? '20px'}
    height={props.height ?? '20px'}
    className={props.className ?? ''}
    fill={props.fill ?? '#000000'}
    viewBox="0 0 640 640"
    {...props}
  >
    <path d="M96 320c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32" />
  </svg>
);
export default Minus;
