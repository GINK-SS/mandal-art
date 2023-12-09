import { MouseEvent } from 'react';

type ModalProps = {
  question: string;
  handleOuterClick: (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => void;
  handleOKButtonClick: () => void;
  handleCancelButtonClick: () => void;
};

export default function Modal({
  question,
  handleOuterClick,
  handleOKButtonClick,
  handleCancelButtonClick,
}: ModalProps) {
  return (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 z-20 flex items-center justify-center overflow-y-scroll bg-black bg-opacity-10 backdrop-blur-[2px] animate-fadeIn"
      onClick={(e) => handleOuterClick(e)}
    >
      <div className="bg-white border border-black rounded-lg shadow animate-modalDown">
        <div className="px-16 py-8 text-center">
          <svg
            className="w-6 h-6 mx-auto mb-4 text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>

          <h3 className="mb-5 text-lg font-normal text-gray-500">{question}</h3>

          <button
            onClick={handleOKButtonClick}
            type="button"
            className="text-white bg-indigo-500 hover:bg-indigo-600 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-6"
          >
            확인
          </button>
          <button
            onClick={handleCancelButtonClick}
            type="button"
            className="text-gray-500 bg-white hover:bg-gray-100 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900"
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
}
