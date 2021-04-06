import Link from 'next/link';

const NavbarTitle = () => (
  <div className="px-2 mr-4 text-4xl font-bold hover:transition hover:duration-200 group sm:mr-0 dark:text-green-300 text-green-50 hover:bg-green-50 hover:text-green-900 rounded-xl dark:hover:text-gray-800 dark:hover:bg-white">
    <Link href="/">
      <a className="hidden sm:block">
        Next
        <span className="group-hover:transition group-hover:duration-200 group-hover:text-green-900 dark:group-hover:text-gray-800 dark:text-white">Flix</span>
      </a>
    </Link>
    <Link href="/">
      <a className="sm:hidden">N</a>
    </Link>
  </div>
);

export default NavbarTitle;
