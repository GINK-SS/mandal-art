'use client';
import { setActive, setContent } from '@/redux/slices/table';
import { AppDispatch } from '@/redux/store';
import { useDispatch } from 'react-redux';

type TextareaProps = {
  tIdx: number;
  idx: number;
  content: string;
  placeholder?: string;
};

export default function Textarea({ tIdx, idx, content, placeholder }: TextareaProps) {
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (value: string) => {
    dispatch(setContent({ tIdx, idx, content: value }));
    dispatch(setActive({ tIdx, idx, content: value }));
  };

  return (
    <textarea
      className={`w-full h-full m-[1px] text-center border-0 resize-none outline-0 disabled:bg-lime-500
      ${
        tIdx === 4 && idx === 4
          ? 'bg-green-700 text-white placeholder:text-white'
          : 'placeholder:text-zinc-500'
      }
      ${tIdx === 4 && idx !== 4 && 'bg-lime-500'}`}
      value={content}
      placeholder={placeholder}
      onChange={(e) => handleChange(e.target.value)}
      disabled={idx === 4 && tIdx !== 4}
    />
  );
}
