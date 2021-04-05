import Link from 'next/link';
import { forwardRef } from 'react';

const InnerLink = forwardRef(({
  onClick, href, label, disabled,
}, ref) => {
  const style = 'bg-green-900 dark:bg-gray-900 hover:bg-green-700 text-white font-bold py-2 px-4 rounded';

  if (disabled) {
    return (
      <span className={style}>
        {label}
      </span>
    );
  }

  return (
    <a
      className={style}
      href={href}
      onClick={onClick}
      ref={ref}
    >
      {label}
    </a>
  );
});

const LinkButton = (props) => {
  const { label, disabled, ...linkProps } = props;
  return (
    <Link {...linkProps} passHref>
      <InnerLink disabled={disabled} label={label} />
    </Link>
  );
};

export default LinkButton;
