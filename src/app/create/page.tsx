'use client';
import { AppDispatch, State } from '@/redux/store';
import Table from './table';
import TableWrapper from './tableWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { KeyboardEvent, MouseEvent, useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { getLocalStorage, initialize, setLocalStorage, setTitle } from '@/redux/slices/table';
import { toPng } from 'html-to-image';
import Modal from '../modal';
import { QTypes, setActive, setInactive, setQuestion } from '@/redux/slices/modal';
import Button from './button';

export default function Create() {
  const project = useSelector((state: State) => state.tableReducer);
  const modal = useSelector((state: State) => state.modalReducer);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const dispatch = useDispatch<AppDispatch>();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const printRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem('elements');

    if (saved) {
      dispatch(getLocalStorage({ saved }));
    }

    setIsLoading(false);
  }, [dispatch]);

  useEffect(() => {
    handleResizeHeight();
  }, [project.title]);

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
  };

  const handleOuterClick = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    if (e.target === e.currentTarget) dispatch(setInactive());
  };

  const handlePrintButtonClick = () => {
    dispatch(setQuestion({ qType: QTypes.PRINT, question: '이미지로 출력하시겠습니까?' }));
    dispatch(setActive());
  };

  const handleResetButtonClick = () => {
    dispatch(
      setQuestion({ qType: QTypes.RESET, question: '입력하신 내용을 모두 삭제하시겠습니까?' })
    );
    dispatch(setActive());
  };

  const handleCancelButtonClick = () => {
    dispatch(setInactive());
  };

  const handleOKButtonClick = () => {
    switch (modal.qType) {
      case QTypes.RESET:
        reset();
        break;
      case QTypes.PRINT:
        printToPng();
        break;
    }

    dispatch(setInactive());
  };

  const reset = () => {
    dispatch(initialize());
  };

  const printToPng = useCallback(() => {
    if (printRef.current === null) return;

    toPng(printRef.current, { cacheBust: true, backgroundColor: '#FFF' })
      .then((dataUrl) => {
        const link = document.createElement('a');

        link.download = project.title ? project.title : '만다라트';
        link.href = dataUrl;
        link.click();
        link.remove();
      })
      .catch((err) => console.log(err));
  }, [project.title]);

  const saveToLocalStorage = () => {
    dispatch(setLocalStorage());
  };

  return (
    <>
      {modal.isActive && (
        <Modal
          question={modal.question}
          handleOuterClick={handleOuterClick}
          handleOKButtonClick={handleOKButtonClick}
          handleCancelButtonClick={handleCancelButtonClick}
        />
      )}

      <div className="py-24">
        <div className="flex items-center mb-2">
          <textarea
            ref={textareaRef}
            name="textarea"
            rows={1}
            value={project.title}
            className="flex-1 px-2 pb-0.5 mr-1 text-base font-medium border-b-2 outline-none resize-none sm:pb-1 sm:mr-3 md:mr-5 sm:px-4 sm:text-2xl md:text-3xl hover:border-gray-300 focus:border-gray-500"
            placeholder="만다라트 제목"
            spellCheck={false}
            onChange={(e) => handleChange(e.target.value)}
            onKeyDown={(e) => preventKeyDownEnter(e)}
            onBlur={saveToLocalStorage}
            maxLength={80}
          />

          <Button onClick={handleResetButtonClick} disabled={isLoading} text="초기화" />
          <Button onClick={handlePrintButtonClick} disabled={isLoading} text="출력하기" />
        </div>

        <div className="relative" ref={printRef}>
          {isLoading && (
            <div className="absolute top-0 bottom-0 left-0 right-0 z-20 flex items-center justify-center overflow-y-scroll bg-black bg-opacity-10 backdrop-blur-[1px]">
              <div className="py-2.5 px-5 me-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 inline-flex items-center">
                <svg
                  aria-hidden="true"
                  role="status"
                  className="inline w-4 h-4 text-gray-200 me-3 animate-spin"
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
                    fill="#6366F1"
                  />
                </svg>
                잠시만 기다려주세요 ...
              </div>
            </div>
          )}

          <TableWrapper>
            {project.tables.map((table, tIdx) => (
              <Table key={tIdx} tIdx={tIdx} isActive={table.isActive} elements={table.elements} />
            ))}
          </TableWrapper>

          <div className="relative w-full mt-1 sm:mt-2">
            <Link href="https://www.gink-ss.com" target="_blank">
              <button className="absolute right-0 inline-flex items-center justify-center p-px text-[0.5rem] sm:text-xs text-gray-700 shadow-md rounded-2xl group bg-gradient-to-br from-purple-300 to-indigo-500">
                <span className="px-1 sm:px-2 py-0.5 sm:py-1 transition-all duration-75 ease-in bg-white rounded-2xl group-hover:bg-slate-50">
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
