import Link from 'next/link';
import TypingEffect from './typingEffect';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-full py-10">
      <div className="px-4 select-none">
        <div className="text-center">
          <h1 className="mb-[-10px] sm:mb-[-15px] font-extrabold text-transparent text-6xl sm:text-8xl md:text-9xl font-title bg-gradient-to-r bg-clip-text from-indigo-300 via-purple-400 to-indigo-300 bg-[length:200%_200%] animate-bgGradient">
            Mandalart
          </h1>
          <h2 className="text-sm sm:text-base mb-8 sm:mb-16 indent-[5px] sm:indent-[11px] md:indent-[13px] tracking-[5px] sm:tracking-[11px] md:tracking-[13px] md:text-2xl text-transparent font-title bg-gradient-to-r bg-clip-text from-indigo-300 to-purple-400">
            Lotus Blossom Technique
          </h2>

          <TypingEffect />

          <Link href="/create">
            <button
              type="button"
              className="text-white bg-gradient-90 from-indigo-300 via-purple-400 to-indigo-300 animate-bgGradient
            bg-[length:400%_400%] font-medium text-sm sm:text-lg rounded-lg tracking-[0.375rem] indent-1.5 px-6 sm:px-10 py-2.5 sm:py-3.5
            brightness-100 hover:brightness-95 transition duration-300"
            >
              시작하기
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
