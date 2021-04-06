import 'nprogress/nprogress.css';
import '@/styles/global.css';

import Router from 'next/router';
import { ThemeProvider } from 'next-themes';
import NProgress from 'nprogress';

import AppLayout from '@/layouts/app';
import Footer from '@/modules/footer';
import Navbar from '@/modules/navbar';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <AppLayout>
        <Navbar id="navbar" />
        <Component {...pageProps} />
        <Footer />
      </AppLayout>
    </ThemeProvider>
  );
}
