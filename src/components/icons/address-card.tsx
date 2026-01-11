import * as React from 'react';
const AddressCard: React.FC<React.SVGAttributes<unknown>> = (props) => (
  <svg
    width={props.width ?? '20px'}
    height={props.height ?? '20px'}
    className={props.className ?? ''}
    fill={props.fill ?? '#000000'}
    viewBox="0 0 640 640"
    {...props}
  >
    <path d="M96 96c-35.3 0-64 28.7-64 64v320c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64zm80 256h64c44.2 0 80 35.8 80 80 0 8.8-7.2 16-16 16H112c-8.8 0-16-7.2-16-16 0-44.2 35.8-80 80-80m-24-96c0-30.9 25.1-56 56-56s56 25.1 56 56-25.1 56-56 56-56-25.1-56-56m240-48h112c13.3 0 24 10.7 24 24s-10.7 24-24 24H392c-13.3 0-24-10.7-24-24s10.7-24 24-24m0 96h112c13.3 0 24 10.7 24 24s-10.7 24-24 24H392c-13.3 0-24-10.7-24-24s10.7-24 24-24" />
  </svg>
);
export default AddressCard;
