/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import MoonIcon from '@heroicons/react/solid/MoonIcon';
import SunIcon from '@heroicons/react/solid/SunIcon';
import { useState } from 'react';

const DarkmodeSwitch = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div
      className="relative w-10 h-auto px-1 py-1 transition duration-500 bg-gray-200 group rounded-3xl hover:bg-gray-600 hover:text-white"
      onClick={() => setIsDark((current) => !current)}
    >
      {isDark
        ? <MoonIcon className="text-green-900 transition duration-500 group-hover:text-white" />
        : <SunIcon className="text-green-900 transition duration-500 group-hover:text-white" />}
    </div>
  );
};

export default DarkmodeSwitch;
