import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import './sections.css';
import './branding.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Conwy Car Care | Mobile Valeting & Detailing',
  description: 'Enthusiast-led mobile valeting and detailing by Tyler Channer. Mini valets, full valets and professional detailing across Conwy.',
  openGraph: {
    title: 'Conwy Car Care | Mobile Valeting & Detailing',
    description: 'Enthusiast-led mobile car care with a studio finish, brought to your driveway.',
    type: 'website',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Conwy Car Care | Mobile Valeting & Detailing',
    description: 'Enthusiast-led mobile car care with a studio finish, brought to your driveway.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
