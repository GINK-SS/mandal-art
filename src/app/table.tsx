import { ElementState } from '@/redux/slices/table';
import Textarea from './textarea';

type TableProps = {
  tId: number;
  elements: ElementState[];
};

export default function Table({ tId, elements }: TableProps) {
  return (
    <table className="border-0 border-gray-500">
      <tbody>
        {elements.map(
          (_, index) =>
            index % 3 === 0 && (
              <tr key={index} className="flex">
                {elements.slice(index, index + 3).map((element, index) => (
                  <td key={index} className="flex items-center justify-center p-0 border">
                    <Textarea
                      tId={tId}
                      id={element.id}
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
  );
}
