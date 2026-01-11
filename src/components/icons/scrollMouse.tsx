export default function ScrollMouse() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="40"
      viewBox="0 0 14.878 29.487"
      className="scroll-mouse"
    >
      {/* Mouse outline */}
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeMiterlimit="10"
        d="M14.378,22.047c0,3.832-3.106,6.939-6.939,6.939
           c-3.832,0-6.938-3.107-6.938-6.939V7.439
           C0.5,3.607,3.606,0.5,7.438,0.5
           c3.833,0,6.939,3.107,6.939,6.939V22.047z"
      />

      {/* Scroll wheel */}
      <path
        className="scroll-wheel"
        fill="currentColor"
        d="M7.967,8.125c0,0.291-0.236,0.527-0.527,0.527
           c-0.292,0-0.528-0.236-0.528-0.527V4.873
           c0-0.292,0.236-0.528,0.528-0.528
           c0.291,0,0.527,0.236,0.527,0.528V8.125z"
      />
    </svg>
  );
}
