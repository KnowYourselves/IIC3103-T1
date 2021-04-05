import DarkmodeSwitch from './components/darkmode-switch';
import Searchbar from './components/searchbar';
import Title from './components/title';

const Navbar = () => (
  <nav className="flex items-center justify-between h-20 px-10 bg-green-900 sm:px-20">
    <Title label="NextFlix" />
    <div className="flex items-center space-x-5">
      <Searchbar />
      <DarkmodeSwitch />
    </div>
  </nav>
);

export default Navbar;
