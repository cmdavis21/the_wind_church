import * as React from 'react';

const Package: React.FC<React.SVGAttributes<unknown>> = ({ ...props }) => (
  <svg
    width={props.width ?? '20px'}
    height={props.height ?? '20px'}
    className={props.className ?? ''}
    viewBox="0 0 17 17"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path
      d="M8.517-0.035l-8.517 3.221v10.693l8.5 3.188 8.5-3.188v-10.692l-8.483-3.222zM15.084 3.528l-2.586 0.97-6.557-2.489 2.575-0.974 6.568 2.493zM8.5 5.997l-6.581-2.468 2.609-0.986 6.551 2.487-2.579 0.967zM1 4.253l7 2.625v8.932l-7-2.625v-8.932zM9 15.81v-8.932l7-2.625v8.932l-7 2.625z"
      fill={props.fill ?? '#000000'}
    />
  </svg>
);

export default Package;
