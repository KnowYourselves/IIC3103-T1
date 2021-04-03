import cn from 'classnames';

export default function Layout({ children, home, className: classes }) {
  const className = cn({
    'mx-auto': true,
    'py-6': true,
    container: home,
  });

  return (
    <div className={classes}>
      <div className={className}>{children}</div>
    </div>
  );
}
