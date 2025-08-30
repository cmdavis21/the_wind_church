import * as React from 'react';
const Play: React.FC<React.SVGAttributes<unknown>> = (props) => (
  <svg
    width={props.width ?? '20px'}
    height={props.height ?? '20px'}
    className={props.className ?? ''}
    fill={props.fill ?? '#000000'}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 384 512"
    {...props}
  >
    <path className="fa-secondary" opacity={0.4} d="" />
    <path
      className="fa-primary"
      d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
    />
  </svg>
);
export default Play;
