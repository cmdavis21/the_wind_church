import * as React from 'react';
const CircleExclaimation: React.FC<React.SVGAttributes<unknown>> = (props) => (
  <svg
    width={props.width ?? '20px'}
    height={props.height ?? '20px'}
    className={props.className ?? ''}
    fill={props.fill ?? '#000000'}
    viewBox="0 0 640 640"
    {...props}
  >
    <path d="M320 576C178.6 576 64 461.4 64 320S178.6 64 320 64s256 114.6 256 256-114.6 256-256 256m0-192c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32m0-192c-18.2 0-32.7 15.5-31.4 33.7l7.4 104c.9 12.6 11.4 22.3 23.9 22.3 12.6 0 23-9.7 23.9-22.3l7.4-104c1.3-18.2-13.1-33.7-31.4-33.7z" />
  </svg>
);
export default CircleExclaimation;
