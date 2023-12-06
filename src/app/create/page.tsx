'use client';
import { AppDispatch, State } from '@/redux/store';
import Table from './table';
import TableWrapper from './tableWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { KeyboardEvent, useRef } from 'react';
import Link from 'next/link';
import { setTitle } from '@/redux/slices/table';

export default function Create() {
  const project = useSelector((state: State) => state.tableReducer);
  const dispatch = useDispatch<AppDispatch>();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const preventKeyDownEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') e.preventDefault();
  };

  const handleResizeHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  };

  const handleChange = (value: string) => {
    dispatch(setTitle({ title: value }));
    handleResizeHeight();
  };

  return (
    <div className="pt-24">
      <textarea
        ref={textareaRef}
        rows={1}
        value={project.title}
        className="w-full px-4 pb-2 mb-2 text-3xl font-medium border-b-2 outline-none resize-none hover:border-gray-300 focus:border-gray-500"
        placeholder="만다라트 제목"
        spellCheck={false}
        onChange={(e) => handleChange(e.target.value)}
        onKeyDown={(e) => preventKeyDownEnter(e)}
        maxLength={200}
      />

      <TableWrapper>
        {project.tables.map((table, tIdx) => (
          <Table key={tIdx} tIdx={tIdx} isActive={table.isActive} elements={table.elements} />
        ))}
      </TableWrapper>

      <div className="relative w-full mt-4">
        <Link href="https://www.gink-ss.com" target="_blank">
          <button className="absolute right-0 inline-flex items-center justify-center p-px text-xs text-gray-700 shadow-md rounded-2xl group bg-gradient-to-br from-purple-300 to-indigo-500">
            <span className="px-2 py-1 transition-all duration-75 ease-in bg-white rounded-2xl group-hover:bg-slate-50">
              @ GINK-SS
            </span>
          </button>
        </Link>
      </div>
      <a href="https://www.gink-ss.com" />
    </div>
  );
}
