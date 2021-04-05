import cn from 'classnames';

const DefaultLayout = ({ children, home }) => {
  const className = cn({
    'mx-auto': true,
    'py-3 sm:py-6': true,
    container: home,
    'flex-grow': true,
  });

  return (
    <div className={className}>{children}</div>
  );
};

export default DefaultLayout;
