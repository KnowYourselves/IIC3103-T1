/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import MoonIcon from '@heroicons/react/solid/MoonIcon';
import SunIcon from '@heroicons/react/solid/SunIcon';

const DarkmodeSwitch = ({ theme, switchTheme, isMounted }) => {
  if (!isMounted) return null;

  return (
    <div
      className="relative w-10 h-auto px-1 py-1 bg-gray-200 hover:ease-in-out hover:transition hover:duration-200 group rounded-3xl hover:bg-gray-600 hover:text-white"
      onClick={switchTheme}
    >
      {theme === 'dark'
        ? <MoonIcon className="text-green-900 dark:text-gray-800 group-hover:text-white" />
        : <SunIcon className="text-green-900 dark:text-gray-800 group-hover:text-white" />}
    </div>
  );
};

export default DarkmodeSwitch;
