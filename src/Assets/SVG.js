export const burgerOpened = (
  <svg
    key="burgerOpened"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 48 48"
    width="1em"
    heigth="1em"
    fill="none"
    stroke="currentColor"
    strokeWidth="15%"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M8 8l32 32M8 40L40 8" />
  </svg>
);
export function burgerClosed(setState) {
  return (
    <svg
      key="burgerClosed"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 48 48"
      width="1em"
      heigth="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth="15%"
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={() => setState(true)}
    >
      <path d="M7.95 11.95h32M7.95 23.95h32M7.95 35.95h32" />
    </svg>
  );
}

export const userOpened = (
  <svg
    key="userOpened"
    className="userOpened"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    width="1em"
    height="1em"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 32 32"
    fill="currentColor"
    stroke="currentColor"
  >
    <path
      d="M26.749 24.93A13.99 13.99 0 1 0 2 16a13.899 13.899 0 0 0 3.251 8.93l-.02.017c.07.084.15.156.222.239c.09.103.187.2.28.3c.28.304.568.596.87.87c.092.084.187.162.28.242c.32.276.649.538.99.782c.044.03.084.069.128.1v-.012a13.901 13.901 0 0 0 16 0v.012c.044-.031.083-.07.128-.1c.34-.245.67-.506.99-.782c.093-.08.188-.159.28-.242c.302-.275.59-.566.87-.87c.093-.1.189-.197.28-.3c.071-.083.152-.155.222-.24zM16 8a4.5 4.5 0 1 1-4.5 4.5A4.5 4.5 0 0 1 16 8zM8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0z"
      fill="currentColor"
    />
  </svg>
);

export function userClosed(setState) {
  return (
    <svg
      key="userClosed"
      className="userClosed"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 32 32"
      fill="currentColor"
      stroke="currentColor"
      onClick={() => setState(true)}
    >
      <path
        d="M26.749 24.93A13.99 13.99 0 1 0 2 16a13.899 13.899 0 0 0 3.251 8.93l-.02.017c.07.084.15.156.222.239c.09.103.187.2.28.3c.28.304.568.596.87.87c.092.084.187.162.28.242c.32.276.649.538.99.782c.044.03.084.069.128.1v-.012a13.901 13.901 0 0 0 16 0v.012c.044-.031.083-.07.128-.1c.34-.245.67-.506.99-.782c.093-.08.188-.159.28-.242c.302-.275.59-.566.87-.87c.093-.1.189-.197.28-.3c.071-.083.152-.155.222-.24zM16 8a4.5 4.5 0 1 1-4.5 4.5A4.5 4.5 0 0 1 16 8zM8.007 24.93A4.996 4.996 0 0 1 13 20h6a4.996 4.996 0 0 1 4.993 4.93a11.94 11.94 0 0 1-15.986 0z"
        fill="currentColor"
      />
    </svg>
  );
}
