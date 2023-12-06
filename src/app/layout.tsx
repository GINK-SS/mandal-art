import type { Metadata } from 'next';
import './globals.css';
import ReduxProvider from '@/redux/provider';

export const metadata: Metadata = {
  title: '만다라트 | 목표로 향하는 첫 발걸음',
  description: '만다라트를 통해 생각을 쉽게 정리하고 목표를 관리해 봐요!',
  openGraph: {
    type: 'website',
    url: 'mandalart.gink-ss.com',
    title: '만다라트 | 목표로 향하는 첫 발걸음',
    description: '만다라트를 통해 생각을 쉽게 정리하고 목표를 관리해 봐요!',
    siteName: '만다라트 | 목표로 향하는 첫 발걸음',
    images: [
      {
        url: '/ogImg.png',
      },
    ],
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
