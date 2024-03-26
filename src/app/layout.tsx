import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Providers } from './providers'
import { Navbar } from "@/components";

import 'animate.css';
import "./globals.css";

export const metadata: Metadata = {
  title: "VizQ App",
  description: "Virtual App for improving your Data Visualization skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ colorScheme: 'light' }}>
      <body>
        <Providers>
          <Navbar />
          {children}
          <SpeedInsights />
        </Providers>  
      </body>
    </html>
  );
}
