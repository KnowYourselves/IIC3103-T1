const Title = ({ children, className }) => {
  const titleClass = className || 'text-4xl';
  return (
    <div className={titleClass}>
      {children}
    </div>
  );
};

export default Title;
