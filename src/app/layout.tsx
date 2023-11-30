import type { Metadata } from 'next';
import './globals.css';
import ReduxProvider from '@/redux/provider';

export const metadata: Metadata = {
  title: '만다라트 계획표 만들기',
  description: '만다라트 계획표를 만들 수 있는 사이트입니다.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body suppressHydrationWarning={true}>
        <ReduxProvider>
          <div className="max-w-4xl mx-auto">{children}</div>
        </ReduxProvider>
      </body>
    </html>
  );
}
