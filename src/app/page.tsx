import Link from 'next/link';
import TypingEffect from './typingEffect';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-full py-10">
      <div className="px-4 select-none">
        <div className="text-center">
          <h1 className="mb-[-15px] font-extrabold text-transparent text-9xl font-title bg-gradient-to-r bg-clip-text from-indigo-300 via-purple-400 to-indigo-300 bg-[length:200%_200%] animate-bgGradient">
            Mandalart
          </h1>
          <h2 className="indent-[13px] mb-16 tracking-[13px] text-2xl text-transparent font-title bg-gradient-to-r bg-clip-text from-indigo-300 to-purple-400">
            Lotus Blossom Technique
          </h2>

          <TypingEffect />

          <Link href="/create">
            <button
              type="button"
              className="text-white bg-gradient-90 from-indigo-300 via-purple-400 to-indigo-300 animate-bgGradient
            bg-[length:400%_400%] font-medium text-lg rounded-lg tracking-[0.375rem] indent-1.5 px-10 py-3.5
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
