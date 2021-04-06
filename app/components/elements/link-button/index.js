import Link from 'next/link';
import { forwardRef } from 'react';

const InnerLink = forwardRef(({
  href, label, disabled, home, className,
}, ref) => {
  const lightStyle = 'bg-green-900 hover:bg-green-700 text-white font-bold py-2 px-4 rounded';
  let darkStyle;
  if (home) {
    darkStyle = 'dark:bg-gray-900 dark:hover:bg-gray-700';
  } else {
    darkStyle = 'dark:bg-gray-700 dark:hover:bg-gray-800';
  }
  const finalStyle = `${lightStyle} ${darkStyle} ${className}`;

  if (disabled) {
    return (
      <span className={finalStyle}>
        {label}
      </span>
    );
  }

  return (
    <a
      className={finalStyle}
      href={href}
      ref={ref}
    >
      {label}
    </a>
  );
});

const LinkButton = (props) => {
  const {
    label, disabled, home, className, ...linkProps
  } = props;
  return (
    <Link {...linkProps} passHref>
      <InnerLink disabled={disabled} label={label} home={home} className={className} />
    </Link>
  );
};

export default LinkButton;
