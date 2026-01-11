import * as React from 'react';
const Cross: React.FC<React.SVGAttributes<unknown>> = (props) => (
  <svg
    width={props.width ?? '20px'}
    height={props.height ?? '20px'}
    className={props.className ?? ''}
    fill={props.fill ?? '#000000'}
    viewBox="0 0 640 640"
    {...props}
  >
    <path d="M304 64c-26.5 0-48 21.5-48 48v80h-80c-26.5 0-48 21.5-48 48v32c0 26.5 21.5 48 48 48h80v208c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V320h80c26.5 0 48-21.5 48-48v-32c0-26.5-21.5-48-48-48h-80v-80c0-26.5-21.5-48-48-48z" />
  </svg>
);
export default Cross;
