import Link from 'next/link';

const NavbarTitle = () => (
  <div className="px-2 text-4xl font-bold dark:text-green-300 text-green-50 hover:bg-green-50 hover:text-green-900 rounded-xl dark:hover:text-gray-800 dark:hover:bg-white">
    <Link href="/">
      <a className="hidden sm:block">
        Next
        <span className="dark:hover:text-gray-800 dark:text-white">Flix</span>
      </a>
    </Link>
    <Link href="/">
      <a className="sm:hidden">N</a>
    </Link>
  </div>
);

export default NavbarTitle;
