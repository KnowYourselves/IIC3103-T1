import Head from 'next/head';

import CustomErrPage from '@/templates/error-page';

const getTitle = (statusCode) => {
  switch (statusCode) {
    case 404:
      return 'Don\'t go putting random URLs in the search bar.';
    case 500:
      return 'Don\'t go causing an internal error in our servers.';
    default:
      return 'Don\'t go causing unknown errors.';
  }
};

const Error = ({ statusCode, title }) => (
  <>
    <Head>
      <title>{statusCode}</title>
    </Head>
    <CustomErrPage title={title || getTitle(statusCode)} statusCode={statusCode} />
  </>
);

Error.getInitialProps = ({ res, err }) => {
  let statusCode = 404;
  if (res) {
    statusCode = res.statusCode;
  } else if (err) {
    statusCode = err.statusCode;
  }

  return { statusCode, title: getTitle(statusCode) };
};

export default Error;
