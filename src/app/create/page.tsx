'use client';
import { AppDispatch, State } from '@/redux/store';
import Table from './table';
import TableWrapper from './tableWrapper';
import { useDispatch, useSelector } from 'react-redux';
import { KeyboardEvent, MouseEvent, useCallback, useRef, useState } from 'react';
import Link from 'next/link';
import { initialize, setTitle } from '@/redux/slices/table';
import { toPng } from 'html-to-image';
import Modal from '../modal';
import { QTypes, setActive, setInactive, setQuestion } from '@/redux/slices/modal';
import Button from './button';

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
  }, [project.title]);

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
            className="flex-1 px-4 pb-2 mr-5 text-3xl font-medium border-b-2 outline-none resize-none hover:border-gray-300 focus:border-gray-500"
            placeholder="만다라트 제목"
            spellCheck={false}
            onChange={(e) => handleChange(e.target.value)}
            onKeyDown={(e) => preventKeyDownEnter(e)}
            maxLength={80}
          />

          <Button onClick={handleResetButtonClick} disabled={isDownloading} text="초기화" />
          <Button onClick={handlePrintButtonClick} disabled={isDownloading} text="출력하기" />
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
