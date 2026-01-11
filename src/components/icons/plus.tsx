import * as React from 'react';
const Plus: React.FC<React.SVGAttributes<unknown>> = (props) => (
  <svg
    width={props.width ?? '20px'}
    height={props.height ?? '20px'}
    className={props.className ?? ''}
    fill={props.fill ?? '#000000'}
    viewBox="0 0 640 640"
    {...props}
  >
    <path d="M352 128c0-17.7-14.3-32-32-32s-32 14.3-32 32v160H128c-17.7 0-32 14.3-32 32s14.3 32 32 32h160v160c0 17.7 14.3 32 32 32s32-14.3 32-32V352h160c17.7 0 32-14.3 32-32s-14.3-32-32-32H352z" />
  </svg>
);
export default Plus;
