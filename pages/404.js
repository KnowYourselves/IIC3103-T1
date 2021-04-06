// 404.js
import DefaultLayout from '@/layouts/default';

export default function FourOhFour() {
  return (
    <DefaultLayout className="flex flex-col w-full h-full pt-24 md:pt-0 md:justify-center">
      <div className="font-bold text-center md:mr-80 md:text-right xl:text-right md:pr-10 md:text-2xl xl:text-4xl xl:mr-96">
        <p>Don&#39;t go putting random URLs in the search bar.</p>
        <p>But if you do, call me.</p>
      </div>
      <img
        alt="404"
        className="absolute bottom-0 right-0 hidden mb-12 mr-12 md:block"
        width="358"
        height="562"
        src="/images/saul_transparent.png"
      />
      <img
        alt="404"
        className="absolute bottom-0 left-0 right-0 mx-auto mb-12 md:hidden"
        width="214.8"
        height="337.2"
        src="/images/saul_transparent.png"
      />
    </DefaultLayout>
  );
}
