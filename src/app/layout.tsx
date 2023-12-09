import type { Metadata } from 'next';
import './globals.css';
import ReduxProvider from '@/redux/provider';

export const metadata: Metadata = {
  metadataBase: new URL('https://mandalart.gink-ss.com'),
  title: '만다라트 | 목표로 향하는 첫 발걸음',
  description: '만다라트를 통해 생각을 쉽게 정리하고 목표를 관리해 봐요!',
  keywords: '만다라트, Mandalart, Lotus Blossom Technique',
  openGraph: {
    type: 'website',
    url: '/',
    title: '만다라트 | 목표로 향하는 첫 발걸음',
    description: '만다라트를 통해 생각을 쉽게 정리하고 목표를 관리해 봐요!',
    siteName: '만다라트 | Lotus Blossom Technique',
    images: [
      {
        url: '/ogImg.png',
      },
    ],
  },
  twitter: {
    card: 'summary',
    site: '/',
    title: '만다라트 | 목표로 향하는 첫 발걸음',
    description: '만다라트를 통해 생각을 쉽게 정리하고 목표를 관리해 봐요!',
    creator: 'GINK-SS',
    images: '/ogImg.png',
  },
  icons: [
    { rel: 'icon', url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    { rel: 'icon', url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body suppressHydrationWarning={true}>
        <ReduxProvider>
          <div className="h-full max-w-5xl px-4 mx-auto">{children}</div>
        </ReduxProvider>
      </body>
    </html>
  );
}
