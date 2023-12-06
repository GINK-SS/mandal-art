import type { Metadata } from 'next';
import './globals.css';
import ReduxProvider from '@/redux/provider';

const MAIN_URL = 'https://mandalart.gink-ss.com';

export const metadata: Metadata = {
  title: '만다라트 | 목표로 향하는 첫 발걸음',
  description: '만다라트를 통해 생각을 쉽게 정리하고 목표를 관리해 봐요!',
  keywords: '만다라트, Mandalart, Lotus Blossom Technique',
  openGraph: {
    type: 'website',
    url: MAIN_URL,
    title: '만다라트 | 목표로 향하는 첫 발걸음',
    description: '만다라트를 통해 생각을 쉽게 정리하고 목표를 관리해 봐요!',
    siteName: '만다라트 | Lotus Blossom Technique',
    images: [
      {
        url: `${MAIN_URL}/ogImg.png`,
      },
    ],
  },
  twitter: {
    card: 'summary',
    site: MAIN_URL,
    title: '만다라트 | 목표로 향하는 첫 발걸음',
    description: '만다라트를 통해 생각을 쉽게 정리하고 목표를 관리해 봐요!',
    creator: 'GINK-SS',
    images: `${MAIN_URL}/ogImg.png`,
  },
  icons: [
    { rel: 'icon', url: `${MAIN_URL}/favicon-16x16.png`, sizes: '16x16', type: 'image/png' },
    { rel: 'icon', url: `${MAIN_URL}/favicon-32x32.png`, sizes: '32x32', type: 'image/png' },
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
