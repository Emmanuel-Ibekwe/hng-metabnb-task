const MenuIcon = (props) => {
  return (
    <svg
      className={props.className}
      onClick={props.onClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g dataName="Layer 2">
        <g dataName="menu">
          <rect
            width="24"
            height="24"
            opacity="0"
            transform="rotate(180 12 12)"
          />
          <rect
            width="18"
            height="2"
            x="3"
            y="11"
            rx=".95"
            ry=".95"
            fill="currentColor"
          />
          <rect
            width="18"
            height="2"
            x="3"
            y="16"
            rx=".95"
            ry=".95"
            fill="currentColor"
          />
          <rect
            width="18"
            height="2"
            x="3"
            y="6"
            rx=".95"
            ry=".95"
            fill="currentColor"
          />
        </g>
      </g>
    </svg>
  );
};

export default MenuIcon;
