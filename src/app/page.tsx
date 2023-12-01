import Link from 'next/link';

export default function Home() {
  return (
    <div className="absolute flex flex-col items-center top-[40%] left-[50%] -translate-x-[50%] -translate-y-[50%] mx-4">
      <div className="text-center cursor-default">
        <h1 className="mb-5 text-5xl font-extrabold">만다라트 계획표</h1>
        <p className="mb-8">
          목표를 계획하거나 아이디어를 구체화 시킬 때 아주 유용하게 활용할 수 있습니다.
        </p>
      </div>

      <Link href="/create">
        <button
          type="button"
          className="text-white bg-gradient-90 from-indigo-300 via-purple-400 to-indigo-300 animate-bgGradient
            bg-[length:400%_400%] font-medium rounded-lg text-base tracking-widest px-7 py-3 text-center inline-flex items-center 
            brightness-100 hover:brightness-95 transition duration-300"
        >
          시작하기
        </button>
      </Link>
    </div>
  );
}
