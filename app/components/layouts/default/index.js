import cn from 'classnames';

const DefaultLayout = ({ children, home }) => {
  const className = cn({
    'mx-auto mb-1 px-2 py-1 sm:py-6': true,
    container: home,
    flex: home,
    'flex-grow': true,
  });

  return (
    <div className={className}>{children}</div>
  );
};

export default DefaultLayout;
