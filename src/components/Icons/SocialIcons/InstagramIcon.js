const InstagramIcon = (props) => {
  return (
    <svg
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
    >
      <rect width="256" height="256" fill="none" stroke="currentColor" />
      <circle
        cx="128"
        cy="128"
        r="34"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <rect
        width="192"
        height="192"
        x="32"
        y="32"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
        rx="48"
      />
      <circle cx="180" cy="76" r="16" />
    </svg>
  );
};

export default InstagramIcon;
