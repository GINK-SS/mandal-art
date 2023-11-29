import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '만다라트 계획표 만들기',
  description: '만다라트 계획표를 만들 수 있는 사이트입니다.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
