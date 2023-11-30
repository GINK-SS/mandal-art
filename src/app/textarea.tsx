'use client';
import { setContent } from '@/redux/slices/table';
import { AppDispatch } from '@/redux/store';
import { useDispatch } from 'react-redux';

type TextareaProps = {
  tId: number;
  id: number;
  content: string;
  placeholder?: string;
};

export default function Textarea({ tId, id, content, placeholder }: TextareaProps) {
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (value: string) => {
    dispatch(setContent({ tId, id, content: value }));
  };

  return (
    <textarea
      className="w-full h-full m-[1px] text-center border-0 resize-none outline-0"
      value={content}
      placeholder={placeholder}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
}
