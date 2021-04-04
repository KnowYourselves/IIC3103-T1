import 'nprogress/nprogress.css';
import '@/styles/global.css';

import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';

import Layout from '@/layouts/default';
import Navbar from '@/modules/navbar';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar id="navbar" />
      <Layout home>
        <div className="text-center">
          <Link href="/">
            <a className="max-h-full px-4 py-2 text-4xl bg-green-700 hover:bg-green-900 rounded-xl hover: sm:hidden">
              <span className="text-white">Next</span>
              Flix
            </a>
          </Link>
        </div>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
