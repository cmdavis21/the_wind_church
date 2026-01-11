import * as React from 'react';
const X: React.FC<React.SVGAttributes<unknown>> = (props) => (
  <svg
    width={props.width ?? '20px'}
    height={props.height ?? '20px'}
    className={props.className ?? ''}
    fill={props.fill ?? '#000000'}
    viewBox="0 0 640 640"
    {...props}
  >
    <path d="M183.1 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L275.2 320 137.9 457.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l137.3-137.4 137.4 137.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L365.8 320l137.3-137.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320.5 274.7z" />
  </svg>
);
export default X;
