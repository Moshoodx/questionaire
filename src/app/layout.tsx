import type { Metadata } from "next";
import { Providers } from './providers'
import { primaryFont } from '@/fonts';

import "./globals.css";

export const metadata: Metadata = {
  title: "Questionaire App",
  description: "Virtual App for improving your Data Visualization skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ colorScheme: 'light' }}>
      <body className={primaryFont.className}>
        <Providers>{children}</Providers>  
      </body>
    </html>
  );
}
