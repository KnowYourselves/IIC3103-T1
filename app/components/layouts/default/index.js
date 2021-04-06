import cn from 'classnames';

const DefaultLayout = ({ children, home, className: otherClasses = '' }) => {
  const className = cn({
    'mx-auto mb-1 px-2 py-1 sm:py-6': true,
    container: home,
    flex: home,
    'flex-grow': true,
  });

  return (
    <div className={`${className} ${otherClasses}`}>{children}</div>
  );
};

export default DefaultLayout;
