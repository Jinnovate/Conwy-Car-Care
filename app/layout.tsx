import type { Metadata } from 'next';
import './globals.css';
import './sections.css';
import './branding.css';
import './brand-refresh.css';
import './outline-strength.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://conwy-car-care.realworldjoel.chatgpt.site'),
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
      <body>{children}</body>
    </html>
  );
}
