'use client';
import { setActive, setContent } from '@/redux/slices/table';
import { AppDispatch } from '@/redux/store';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';

type ElementProps = {
  tIdx: number;
  idx: number;
  content: string;
  placeholder?: string;
};

export default function Element({ tIdx, idx, content, placeholder }: ElementProps) {
  const dispatch = useDispatch<AppDispatch>();
  const tdRef = useRef<HTMLTableCellElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleTdClick = () => {
    if (textareaRef.current) textareaRef.current.focus();
  };

  const handleResizeHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  };

  const handleChange = (value: string) => {
    dispatch(setContent({ tIdx, idx, content: value }));
    dispatch(setActive({ tIdx, idx, content: value }));
    handleResizeHeight();
  };

  return (
    <td
      ref={tdRef}
      className={`flex items-center justify-center border border-gray-400 cursor-text after:pt-[100%]
      ${tIdx === 4 && idx === 4 && 'bg-indigo-500'}
      ${((tIdx === 4 && idx !== 4) || (tIdx !== 4 && idx === 4)) && 'bg-purple-300'}`}
      onClick={handleTdClick}
    >
      <textarea
        ref={textareaRef}
        rows={1}
        className={`w-full text-center resize-none outline-0 bg-transparent
    ${tIdx === 4 && idx === 4 ? ' text-white placeholder:text-white' : 'placeholder:text-zinc-500'}
    `}
        value={content}
        placeholder={placeholder}
        spellCheck={false}
        onChange={(e) => handleChange(e.target.value)}
        disabled={idx === 4 && tIdx !== 4}
      />
    </td>
  );
}
