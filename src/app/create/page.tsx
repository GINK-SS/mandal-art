'use client';
import { AppDispatch, State } from '@/redux/store';
import Table from './table';
import TableWrapper from './tableWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { KeyboardEvent, MouseEvent, useCallback, useRef, useState } from 'react';
import Link from 'next/link';
import { setTitle } from '@/redux/slices/table';
import { toPng } from 'html-to-image';
import Modal from '../modal';
import { setActive, setInactive } from '@/redux/slices/modal';

export default function Create() {
  const project = useSelector((state: State) => state.tableReducer);
  const modal = useSelector((state: State) => state.modalReducer);
  const [isDownloading, setIsdownloading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const printRef = useRef<HTMLDivElement>(null);

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

  const handleOuterClick = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    if (e.target === e.currentTarget) dispatch(setInactive());
  };

  const handlePrintButtonClick = () => {
    dispatch(setActive());
  };

  const handleCancelClick = () => {
    dispatch(setInactive());
  };

  const handleOKButtonClick = useCallback(() => {
    if (printRef.current === null) return;

    setIsdownloading(true);

    toPng(printRef.current, { cacheBust: true, backgroundColor: '#FFF' })
      .then((dataUrl) => {
        const link = document.createElement('a');

        link.download = project.title ? project.title : '만다라트';
        link.href = dataUrl;
        link.click();
        link.remove();
      })
      .then(() => setIsdownloading(false))
      .catch((err) => console.log(err));

    dispatch(setInactive());
  }, [dispatch, project.title]);

  return (
    <>
      {modal.isActive && (
        <Modal
          question="이미지로 출력하시겠습니까?"
          handleOuterClick={handleOuterClick}
          handleOKButtonClick={handleOKButtonClick}
          handleCancelButtonClick={handleCancelClick}
        />
      )}

      <div className="py-24">
        <div className="flex items-center mb-2">
          <textarea
            ref={textareaRef}
            name="textarea"
            rows={1}
            value={project.title}
            className="flex-1 px-4 pb-2 mr-10 text-3xl font-medium border-b-2 outline-none resize-none hover:border-gray-300 focus:border-gray-500"
            placeholder="만다라트 제목"
            spellCheck={false}
            onChange={(e) => handleChange(e.target.value)}
            onKeyDown={(e) => preventKeyDownEnter(e)}
            maxLength={80}
          />

          <div className="relative">
            <button
              type="button"
              onClick={handlePrintButtonClick}
              disabled={isDownloading}
              className="text-white bg-gradient-90 from-indigo-300 via-purple-400 to-indigo-300 animate-bgGradient
            bg-[length:400%_400%] font-medium text-lg rounded-lg tracking-[0.25rem] indent-1 px-4 py-2
            brightness-100 hover:brightness-95 transition duration-300"
            >
              출력하기
            </button>

            {isDownloading && (
              <div className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
                <svg
                  className="w-6 h-6 text-gray-300 animate-spin fill-indigo-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>

        <div ref={printRef}>
          <TableWrapper>
            {project.tables.map((table, tIdx) => (
              <Table key={tIdx} tIdx={tIdx} isActive={table.isActive} elements={table.elements} />
            ))}
          </TableWrapper>

          <div className="relative w-full mt-2">
            <Link href="https://www.gink-ss.com" target="_blank">
              <button className="absolute right-0 inline-flex items-center justify-center p-px text-xs text-gray-700 shadow-md rounded-2xl group bg-gradient-to-br from-purple-300 to-indigo-500">
                <span className="px-2 py-1 transition-all duration-75 ease-in bg-white rounded-2xl group-hover:bg-slate-50">
                  @ GINK-SS
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
