import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const Footer = () => {
  const { theme } = useTheme();
  const [heart, setHeart] = useState('-');

  useEffect(() => {
    if (theme === 'dark') {
      setHeart('🖤');
    } else {
      setHeart('💜');
    }
  }, [theme]);

  return (
    <footer className="flex items-center w-full h-12 bg-gray-300 dark:bg-gray-800 sm:px-24 sm:flex-row-reverse">
      <p className="mx-auto sm:mx-0">
        With
        {' '}
        {heart}
        , by
        {' '}
        <span className="font-bold hover:text-green-900 hover:transition hover:duration-200">
          <a href="https://github.com/KnowYourselves">KnowYourselves</a>
        </span>
      </p>
    </footer>
  );
};

export default Footer;
