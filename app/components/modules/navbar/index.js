import Searchbar from './components/searchbar';
import Title from './components/title';

const Navbar = () => (
  <nav className="flex items-center justify-between h-20 px-10 bg-green-900 sm:px-20">
    <Title label="NextFlix" />
    <Searchbar />
  </nav>
);

export default Navbar;
