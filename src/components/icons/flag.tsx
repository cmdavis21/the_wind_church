import * as React from 'react';
const Flag: React.FC<React.SVGAttributes<unknown>> = (props) => (
  <svg
    width={props.width ?? '20px'}
    height={props.height ?? '20px'}
    className={props.className ?? ''}
    fill={props.fill ?? '#000000'}
    viewBox="0 0 640 640"
    {...props}
  >
    <path d="M155.7 160c14.6-9.2 24.3-25.5 24.3-44 0-28.7-23.3-52-52-52s-52 23.3-52 52c0 16.7 7.8 31.5 20 41v419h64v-64h373.6c14.6 0 26.4-11.8 26.4-26.4 0-3.7-.8-7.3-2.3-10.7L496 336l61.7-138.9c1.5-3.4 2.3-7 2.3-10.7 0-14.6-11.8-26.4-26.4-26.4z" />
  </svg>
);
export default Flag;
