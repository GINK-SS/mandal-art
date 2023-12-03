'use client';
import { setActive, setContent } from '@/redux/slices/table';
import { AppDispatch } from '@/redux/store';
import { useRef, useState } from 'react';
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
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);

  const handleTdClick = () => {
    if (textareaRef.current) textareaRef.current.focus();
  };

  const handleResizeHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';

      if (tIdx === 4 && idx !== 4) {
        const connectTextarea =
          textareaRef.current.parentElement?.parentElement?.parentElement?.parentElement
            ?.parentElement?.parentElement?.children[idx].lastChild?.firstChild?.firstChild
            ?.nextSibling?.firstChild?.nextSibling?.firstChild;

        if (connectTextarea instanceof HTMLTextAreaElement) {
          connectTextarea.style.height = 'auto';
          connectTextarea.style.height = textareaRef.current.scrollHeight + 'px';
        }
      }
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
      ${tIdx === 4 && idx !== 4 && 'bg-purple-300'}
      ${tIdx !== 4 && idx === 4 && 'bg-purple-300 cursor-default'}`}
      onClick={handleTdClick}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      onMouseDown={() => setIsMouseDown(true)}
      onMouseUp={() => setIsMouseDown(false)}
    >
      <textarea
        ref={textareaRef}
        rows={1}
        className={`w-full text-center resize-none outline-0 bg-transparent
        ${
          tIdx === 4 && idx === 4
            ? 'text-white placeholder:text-white'
            : 'placeholder:text-zinc-500'
        }`}
        value={content}
        placeholder={isFocus || isMouseDown ? '' : placeholder}
        spellCheck={false}
        onChange={(e) => handleChange(e.target.value)}
        disabled={idx === 4 && tIdx !== 4}
      />
    </td>
  );
}
