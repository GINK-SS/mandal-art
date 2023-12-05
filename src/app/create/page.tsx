'use client';
import { State } from '@/redux/store';
import Table from './table';
import TableWrapper from './tableWrapper';
import { useSelector } from 'react-redux';
import { KeyboardEvent, useRef } from 'react';

export default function Create() {
  const project = useSelector((state: State) => state.tableReducer);
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

  return (
    <div>
      <textarea
        ref={textareaRef}
        rows={1}
        className="w-full px-4 pb-2 mb-2 text-3xl font-medium border-b border-gray-300 outline-none resize-none focus:border-indigo-500"
        placeholder="제목"
        spellCheck={false}
        onChange={handleResizeHeight}
        onKeyDown={(e) => preventKeyDownEnter(e)}
        maxLength={200}
      />
      <TableWrapper>
        {project.tables.map((table, tIdx) => (
          <Table key={tIdx} tIdx={tIdx} isActive={table.isActive} elements={table.elements} />
        ))}
      </TableWrapper>
    </div>
  );
}
