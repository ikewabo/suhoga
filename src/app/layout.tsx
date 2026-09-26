import type { Metadata } from 'next';
import { Lora, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const serifFont = Lora({
  variable: '--font-serif',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600'],
});

const sansFont = Plus_Jakarta_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://suhogproject.org'),
  title: 'SuhoG Project | Dignified Ageing & Family Support',
  description:
    'Support Home of God Project (Est. 2001, Nigeria). Care, companionship and connection for older people and the families who love them.',
  keywords: [
    'SuhoG',
    'Support Home of God Project',
    'elder care Nigeria',
    'dignified ageing',
    'care for elderly parents in Nigeria',
    'Nigerian diaspora family care',
    'Umuahia Abia State charity',
  ],
  authors: [{ name: 'Support Home of God Project' }],
  openGraph: {
    title: 'SuhoG Project | Dignified Ageing & Family Support',
    description:
      'Care, companionship and connection for older people and the families who love them.',
    url: 'https://suhogproject.org',
    siteName: 'SuhoG Project',
    images: [
      {
        url: '/frames/poster.webp',
        width: 1280,
        height: 720,
        alt: 'SuhoG Project residential setting concept',
      },
    ],
    locale: 'en_NG',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serifFont.variable} ${sansFont.variable} antialiased`}>
      <body className="min-h-screen flex flex-col font-body selection:bg-[#B85338] selection:text-white">
        {children}
      </body>
    </html>
  );
}
