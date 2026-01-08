import * as React from 'react';

interface BagIconProps extends React.SVGProps<SVGSVGElement> {
  count?: number | string;
}

const BagIcon: React.FC<BagIconProps> = ({ count, ...props }) => {
  return (
    <svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={props.width ?? '20px'}
      height={props.height ?? '20px'}
      viewBox="0 0 64 64"
      xmlSpace="preserve"
      {...props}
    >
      {/* Bag outline */}
      <polygon
        fill="none"
        stroke={props.fill}
        strokeWidth={2}
        strokeMiterlimit={10}
        points="44,18 54,18 54,63 10,63 10,18 20,18 "
      />
      <path
        fill="none"
        stroke={props.fill}
        strokeWidth={2}
        strokeMiterlimit={10}
        d="M22,24V11c0-5.523,4.477-10,10-10s10,4.477,10,10v13"
      />

      {/* Count in the center */}
      {count !== undefined && count !== null && (
        <text x="32" y="50" textAnchor="middle" fontSize="25" fontWeight="bold" fill={props.fill}>
          {count}
        </text>
      )}
    </svg>
  );
};

export default BagIcon;
