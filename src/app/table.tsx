import { ElementState } from '@/redux/slices/table';
import Textarea from './textarea';

type TableProps = {
  tId: number;
  elements: ElementState[];
};

export default function Table({ tId, elements }: TableProps) {
  const style = {
    trStyle: 'flex',
    tdStyle: 'flex items-center justify-center p-0 border',
  };
  return (
    <table className="border-0 border-gray-500">
      <tbody>
        <tr className={style.trStyle}>
          <td className={style.tdStyle}>
            <Textarea
              tId={tId}
              id={elements[0].id}
              content={elements[0].content}
              placeholder={elements[0]?.placeholder}
            />
          </td>
          <td className={style.tdStyle}>
            <Textarea
              tId={tId}
              id={elements[1].id}
              content={elements[1].content}
              placeholder={elements[1]?.placeholder}
            />
          </td>
          <td className={style.tdStyle}>
            <Textarea
              tId={tId}
              id={elements[2].id}
              content={elements[2].content}
              placeholder={elements[2]?.placeholder}
            />
          </td>
        </tr>
        <tr className={style.trStyle}>
          <td className={style.tdStyle}>
            <Textarea
              tId={tId}
              id={elements[3].id}
              content={elements[3].content}
              placeholder={elements[3]?.placeholder}
            />
          </td>
          <td className={style.tdStyle}>
            <Textarea
              tId={tId}
              id={elements[4].id}
              content={elements[4].content}
              placeholder={elements[4]?.placeholder}
            />
          </td>
          <td className={style.tdStyle}>
            <Textarea
              tId={tId}
              id={elements[5].id}
              content={elements[5].content}
              placeholder={elements[5]?.placeholder}
            />
          </td>
        </tr>
        <tr className={style.trStyle}>
          <td className={style.tdStyle}>
            <Textarea
              tId={tId}
              id={elements[6].id}
              content={elements[6].content}
              placeholder={elements[6]?.placeholder}
            />
          </td>
          <td className={style.tdStyle}>
            <Textarea
              tId={tId}
              id={elements[7].id}
              content={elements[7].content}
              placeholder={elements[7]?.placeholder}
            />
          </td>
          <td className={style.tdStyle}>
            <Textarea
              tId={tId}
              id={elements[8].id}
              content={elements[8].content}
              placeholder={elements[8]?.placeholder}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
