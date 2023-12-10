'use client';
import { setActive, setContent, setLocalStorage } from '@/redux/slices/table';
import { AppDispatch } from '@/redux/store';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

type ElementProps = {
  tIdx: number;
  idx: number;
  content: string;
  isActive: boolean;
  placeholder?: string;
};

export default function Element({ tIdx, idx, content, isActive, placeholder }: ElementProps) {
  const dispatch = useDispatch<AppDispatch>();
  const tdRef = useRef<HTMLTableCellElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
  const rotateVariants = new Map([
    [0, 'rotate-[135deg]'],
    [1, 'rotate-180'],
    [2, '-rotate-[135deg]'],
    [3, 'rotate-90'],
    [5, '-rotate-90'],
    [6, 'rotate-45'],
    [7, 'rotate-0'],
    [8, '-rotate-45'],
  ]);

  useEffect(() => {
    handleResizeHeight();
  }, [textareaRef.current]);

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;

    window.addEventListener('resize', () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        handleResizeHeight();
      }, 100);
    });

    return () => window.removeEventListener('resize', handleResizeHeight);
  }, []);

  const isOverHeight = (textarea: HTMLTextAreaElement, td: HTMLTableCellElement) => {
    const textareaHeight = textarea.scrollHeight;
    const tdHeight = parseInt(window.getComputedStyle(td).height);

    return tdHeight < textareaHeight;
  };

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
    if (textareaRef.current && tdRef.current) {
      if (isOverHeight(textareaRef.current, tdRef.current)) return;
    }

    dispatch(setContent({ tIdx, idx, content: value }));
    dispatch(setActive({ tIdx, idx, content: value }));
    handleResizeHeight();
  };

  const saveToLocalStorage = () => {
    dispatch(setLocalStorage());
  };

  return (
    <td
      ref={tdRef}
      className={`relative flex items-center justify-center w-full p-px border border-dashed text-[0.4rem] sm:text-xs md:text-sm lg:text-lg border-gray-400 after:pt-[100%]
      ${idx <= 2 && 'border-t-0'}
      ${idx >= 6 && 'border-b-0'}
      ${idx % 3 === 0 && 'border-l-0'}
      ${idx % 3 === 2 && 'border-r-0'}
      ${
        tIdx === 4 &&
        idx === 4 &&
        'bg-indigo-500 text-[0.42rem] sm:text-[0.65rem] md:text-sm lg:text-xl font-bold'
      }
      ${
        tIdx === 4 &&
        idx !== 4 &&
        'bg-purple-300 text-[0.42rem] sm:text-xs md:text-sm lg:text-lg font-semibold'
      }
      ${
        tIdx !== 4 && idx === 4
          ? 'bg-purple-300 text-[0.42rem] sm:text-xs md:text-sm lg:text-lg font-semibold cursor-default'
          : 'cursor-text'
      }`}
      onClick={handleTdClick}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      onMouseDown={() => setIsMouseDown(true)}
      onMouseUp={() => setIsMouseDown(false)}
    >
      {tIdx !== 4 && tIdx + idx === 8 && isActive && (
        <div className={`absolute -z-10 w-full ${rotateVariants.get(tIdx)} fill-purple-300`}>
          <svg data-name="arrow-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path d="M2.38 7h12l-6 7-6-7z" />
            <path d="M10.37 8.11h-4v-6h4z" />
          </svg>
        </div>
      )}

      <textarea
        ref={textareaRef}
        name="textarea"
        rows={1}
        style={{ WebkitTextFillColor: idx === 4 && tIdx !== 4 ? '#000' : '' }}
        className={`w-full text-center resize-none outline-none bg-transparent leading-[0.5rem] sm:leading-[0.9rem] md:leading-4 lg:leading-6
        ${
          tIdx === 4 && idx === 4
            ? 'text-white placeholder:text-white'
            : 'placeholder:text-zinc-500'
        }`}
        value={content}
        placeholder={isFocus || isMouseDown ? '' : placeholder}
        spellCheck={false}
        onChange={(e) => handleChange(e.target.value)}
        onBlur={saveToLocalStorage}
        disabled={idx === 4 && tIdx !== 4}
      />
    </td>
  );
}
