import * as React from 'react';
const Clock: React.FC<React.SVGAttributes<unknown>> = (props) => (
  <svg
    width={props.width ?? '20px'}
    height={props.height ?? '20px'}
    className={props.className ?? ''}
    fill={props.fill ?? '#000000'}
    viewBox="0 0 640 640"
    {...props}
  >
    <path d="M320 64c141.4 0 256 114.6 256 256S461.4 576 320 576 64 461.4 64 320 178.6 64 320 64m-24 120v136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L344 307.2V184c0-13.3-10.7-24-24-24s-24 10.7-24 24" />
  </svg>
);
export default Clock;
