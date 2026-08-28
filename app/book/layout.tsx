import type { Metadata } from 'next';
import './booking.css';
import './price-accent.css';

export const metadata: Metadata = {
  title: 'Book Your Valet | Conwy Car Care',
  description: 'Choose your valet service, vehicle size and preferred appointment with Conwy Car Care.',
};

export default function BookingLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
