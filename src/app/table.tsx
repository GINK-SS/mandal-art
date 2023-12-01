import { ElementState } from '@/redux/slices/table';
import Textarea from './textarea';

type TableProps = {
  tIdx: number;
  isActive: boolean;
  elements: ElementState[];
};

export default function Table({ tIdx, isActive, elements }: TableProps) {
  return (
    <div className="relative">
      <div className={`absolute z-10 w-full h-full bg-black opacity-30 ${isActive && 'hidden'}`} />

      <table className="border-0 border-gray-500">
        <tbody>
          {elements.map(
            (_, i) =>
              i % 3 === 0 && (
                <tr key={i} className="flex">
                  {elements.slice(i, i + 3).map((element, idx) => (
                    <td key={idx + i} className="flex items-center justify-center p-0 border">
                      <Textarea
                        tIdx={tIdx}
                        idx={idx + i}
                        content={element.content}
                        placeholder={element?.placeholder}
                      />
                    </td>
                  ))}
                </tr>
              )
          )}
        </tbody>
      </table>
    </div>
  );
}
