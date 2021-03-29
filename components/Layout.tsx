import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';

type Props = {
  children?: ReactNode;
  title?: string;
  footer?: boolean;
};

const Layout = ({
  children,
  title = 'This is the default title',
  footer = true,
}: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    {children}
    {!footer ? null : (
      <footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </footer>
    )}
  </div>
);

export default Layout;
