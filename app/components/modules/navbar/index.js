import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import DarkmodeSwitch from './components/darkmode-switch';
import Searchbar from './components/searchbar';
import Title from './components/title';

const Navbar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === 'light' ? 'dark' : 'light');
    }
  };

  return (
    <nav className="flex items-center justify-between h-20 px-10 bg-green-900 shadow-md dark:bg-gray-800 sm:px-20">
      <Title label="NextFlix" />
      <div className="flex items-center mx-auto space-x-5 sm:mx-0">
        <Searchbar />
        <DarkmodeSwitch theme={theme} switchTheme={switchTheme} isMounted={isMounted} />
      </div>
    </nav>
  );
};

export default Navbar;
