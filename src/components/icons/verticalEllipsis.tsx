import * as React from 'react';
const VerticalEllipsis: React.FC<React.SVGAttributes<unknown>> = (props) => (
  <svg
    width={props.width ?? '20px'}
    height={props.height ?? '20px'}
    className={props.className ?? ''}
    fill={props.fill ?? '#000000'}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 192 512"
    {...props}
  >
    <path d="M96 72a24 24 0 1 0 0 48 24 24 0 1 0 0-48zm0 96A72 72 0 1 1 96 24a72 72 0 1 1 0 144zm24 88a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm-96 0a72 72 0 1 1 144 0A72 72 0 1 1 24 256zm96 160a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm-96 0a72 72 0 1 1 144 0A72 72 0 1 1 24 416z" />
  </svg>
);
export default VerticalEllipsis;
