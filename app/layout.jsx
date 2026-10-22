import { Source_Serif_4, Outfit } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import './globals.css';

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
  weight: ['600', '700'],
});

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  metadataBase: new URL('https://surhires.com'),
  title: {
    default: 'Surhires | Precision Tech Hiring & Talent Marketplace',
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
    title: 'Surhires | Precision Tech Hiring & Talent Marketplace',
    description:
      'Match with pre-screened tech talent or land your next high-impact engineering role in 14 days.',
    url: 'https://surhires.com',
    siteName: 'Surhires',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Surhires | Precision Tech Hiring & Talent Marketplace',
    description:
      'Match with pre-screened tech talent or land your next high-impact engineering role in 14 days.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sourceSerif.variable} ${outfit.variable}`}>
      <body className="min-h-screen flex flex-col bg-white text-[#0F1B33] antialiased selection:bg-[#EEF4FF] selection:text-[#2563EB]">
        {/* Accessible Skip Link */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-[#2563EB] focus:text-white focus:text-sm focus:font-semibold focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2563EB]"
        >
          Skip to main content
        </a>

        {/* Semantic Header */}
        <header>
          <Navbar />
        </header>

        {/* Main landmark */}
        <main id="main" className="flex-1 focus:outline-none">
          {children}
        </main>

        {/* Semantic Footer */}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
