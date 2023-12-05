import { ElementState } from '@/redux/slices/table';
import Element from './element';

type TableProps = {
  tIdx: number;
  isActive: boolean;
  elements: ElementState[];
};

export default function Table({ tIdx, isActive, elements }: TableProps) {
  return (
    <div className="relative">
      <div className={`absolute z-10 w-full h-full bg-black opacity-30 ${isActive && 'hidden'}`} />

      <table className="border-2 border-collapse border-gray-900">
        <tbody>
          {elements.map(
            (_, i) =>
              i % 3 === 0 && (
                <tr key={i} className="flex">
                  {elements.slice(i, i + 3).map((element, idx) => (
                    <Element
                      key={idx + i}
                      tIdx={tIdx}
                      idx={idx + i}
                      content={element.content}
                      isActive={isActive}
                      placeholder={element.placeholder}
                    />
                  ))}
                </tr>
              )
          )}
        </tbody>
      </table>
    </div>
  );
}
