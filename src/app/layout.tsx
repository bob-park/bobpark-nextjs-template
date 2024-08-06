import React from 'react';

import type { Metadata } from 'next';

import RQProvider from './_component/RQProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bob Park Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <RQProvider>{children}</RQProvider>
      </body>
    </html>
  );
}
