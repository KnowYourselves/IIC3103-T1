import Link from 'next/link';

const Title = ({ label }) => (
  <div className="hidden px-2 text-4xl font-bold transition duration-500 sm:block text-green-50 hover:bg-green-50 hover:text-green-900 rounded-xl">
    <Link href="/">
      <a>{label}</a>
    </Link>
  </div>
);

export default Title;
