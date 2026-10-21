import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

export const metadata = {
  metadataBase: new URL('https://surhires.com'),
  title: {
    default: 'Surhires | Vetted Tech Talent & Modern Hiring Platform',
    template: '%s | Surhires',
  },
  description:
    'Surhires connects high-growth companies with pre-vetted software engineers, product designers, and technical leaders. Faster hiring cycles backed by a 90-day guarantee.',
  keywords: [
    'Tech recruitment',
    'Vetted software engineers',
    'Hire developers',
    'Remote tech jobs',
    'Technical talent marketplace',
    'Surhires',
  ],
  authors: [{ name: 'Surhires Team' }],
  openGraph: {
    title: 'Surhires | Vetted Tech Talent & Modern Hiring Platform',
    description:
      'Match with pre-screened tech talent or land your next high-impact engineering role in 14 days.',
    url: 'https://surhires.com',
    siteName: 'Surhires',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Surhires | Modern Hiring & Recruitment Platform',
    description:
      'Match with pre-screened tech talent or land your next high-impact engineering role in 14 days.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1E293B] antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
