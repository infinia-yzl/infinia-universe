import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import CustomCursor from '@/components/CustomCursor';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'infinia.space',
  description: "Isaac's personal website",
};

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <noscript>
          Enable JavaScript to see the custom cursor.
        </noscript>
        {children}
        <CustomCursor />
      </body>
    </html>
  );
}
