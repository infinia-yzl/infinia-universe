import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import CustomCursor from '@/components/CustomCursor';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'infinia.space | Isaac',
  description: 'Software engineer & web developer dedicated to crafting meaningful digital solutions that inspire positive change.',
  keywords: ['software engineering', 'web development', 'blockchain', 'React', 'NextJS', 'TypeScript'],
  authors: [{
    name: 'Isaac',
    url: 'https://infinia.space',
  }],
  creator: 'Isaac',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://infinia.space',
    siteName: 'infinia.space',
    title: 'Isaac | Software Engineer & Web Developer',
    description: 'Crafting meaningful digital solutions that inspire positive change.',
    images: [
      {
        url: 'https://infinia.space/og-image.jpg', // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: 'Isaac - Software Engineer & Web Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Isaac | Software Engineer & Web Developer',
    description: 'Crafting meaningful digital solutions that inspire positive change.',
    images: ['https://infinia.space/twitter-image.jpg'], // Replace with your actual image URL
    creator: '@InfiniaYZL',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
