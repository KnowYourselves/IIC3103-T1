import Link from 'next/link';

const Title = ({ label }) => (
  <div className="hidden px-2 text-4xl font-bold sm:block text-green-50 hover:bg-green-50 hover:text-gray-700 rounded-xl dark:hover:text-bg-900 dark:hover:bg-white">
    <Link href="/">
      <a>{label}</a>
    </Link>
  </div>
);

export default Title;
