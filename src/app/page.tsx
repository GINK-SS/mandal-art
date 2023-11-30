'use client';
import { useSelector } from 'react-redux';
import Table from './table';
import TableWrapper from './tableWrapper';
import { State } from '@/redux/store';

export default function Home() {
  const tables = useSelector((state: State) => state.tableReducer);

  return (
    <>
      <div className="text-center cursor-default">
        <h1 className="text-5xl font-extrabold">만다라트 계획표</h1>
        <p>목표를 계획하거나 아이디어를 구체화 시킬 때 아주 유용하게 활용할 수 있습니다.</p>
      </div>

      <TableWrapper>
        {tables.map((table) => (
          <Table key={table.tId} elements={table.elements} />
        ))}
      </TableWrapper>
    </>
  );
}
