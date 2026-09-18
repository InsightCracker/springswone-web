export default function LogoMark({ className = "h-9 w-9" }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M20 37c0-8.5 3-13 8-16-1 6.5-3 11-8 16Z"
        className="fill-accent"
      />
      <path
        d="M20 37c0-9-3.5-14.5-9-18 1.2 7.2 3.6 12.6 9 18Z"
        className="fill-primary"
      />
      <path
        d="M20 24c0-8.8 2.8-14.6 7.8-19.8-.4 8.8-2.8 15-7.8 19.8Z"
        className="fill-primary-hover"
      />
      <path
        d="M20 24c0-9.4-3-15.6-8.6-20.8.2 9.4 3 16.2 8.6 20.8Z"
        className="fill-accent"
      />
    </svg>
  );
}
