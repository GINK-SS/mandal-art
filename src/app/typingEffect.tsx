'use client';
import { TypeAnimation } from 'react-type-animation';

export default function TypingEffect() {
  return (
    <div className="h-10 mb-16">
      <TypeAnimation
        className="text-2xl font-light text-transparent bg-gradient-to-r bg-clip-text from-indigo-300 to-purple-400"
        sequence={[
          '목표를 달성하는 기술',
          2000,
          '본질을 깨닫는 기술',
          2000,
          '만다라트',
          2000,
          'Manda + la + art',
          2000,
        ]}
        wrapper="p"
        cursor={false}
        repeat={Infinity}
      />
    </div>
  );
}
