import 'nprogress/nprogress.css';
import '@/styles/global.css';

import Router from 'next/router';
import NProgress from 'nprogress';

import AppLayout from '@/layouts/app';
import ComponentLayout from '@/layouts/default';
import Footer from '@/modules/footer';
import Navbar from '@/modules/navbar';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MobileTitleCard = () => (
  <div className="mt-2 text-center">
    <a href="/" className="max-h-full px-4 text-2xl text-black sm:hidden">
      <span className="text-green-900">Next</span>
      Flix!
    </a>
  </div>
);

export default function App({ Component, pageProps }) {
  return (
    <>
      <AppLayout>
        <Navbar id="navbar" />
        <MobileTitleCard />
        <ComponentLayout home>
          <Component {...pageProps} />
        </ComponentLayout>
        <Footer />
      </AppLayout>
    </>
  );
}
