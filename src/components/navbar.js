import cn from 'classnames';
import Link from 'next/link';

export default function Navbar() {
  //

  return (
    <nav className="flex items-center justify-between h-20 px-10 bg-green-900 sm:px-20">
      <div className="hidden text-4xl font-bold sm:block text-green-50">
        <Link href="/">
          <a>Nextflix</a>
        </Link>
      </div>
      <div className="relative w-full sm:w-auto">
        <input
          className={cn(
            'h-10 pl-5 pr-12 text-sm w-full sm:w-72',
            ' bg-white border-green-100 rounded-lg border-3',
            'focus:ring-2 focus:outline-none focus:ring-green-600',
          )}
          type="text"
          placeholder="Search"
        />
        <button
          className="absolute top-0 right-0 mt-2 mr-4"
          type="button"
        >
          <svg className="w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
