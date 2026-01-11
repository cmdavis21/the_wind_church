import * as React from 'react';
const TV: React.FC<React.SVGAttributes<unknown>> = (props) => (
  <svg
    width={props.width ?? '20px'}
    height={props.height ?? '20px'}
    className={props.className ?? ''}
    fill={props.fill ?? '#000000'}
    viewBox="0 0 640 640"
    {...props}
  >
    <path d="M96 160v240h448V160zm-64 0c0-35.3 28.7-64 64-64h448c35.3 0 64 28.7 64 64v240c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64zm160 352h256c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32s14.3-32 32-32" />
  </svg>
);
export default TV;
