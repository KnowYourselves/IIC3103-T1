import Link from 'next/link';

const Title = ({ label }) => (
  <div className="hidden text-4xl font-bold sm:block text-green-50">
    <Link href="/">
      <a>{label}</a>
    </Link>
  </div>
);

export default Title;
