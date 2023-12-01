'use client';
import { State } from '@/redux/store';
import Table from './table';
import TableWrapper from './tableWrapper';
import { useSelector } from 'react-redux';

export default function Create() {
  const tables = useSelector((state: State) => state.tableReducer);

  return (
    <TableWrapper>
      {tables.map((table, tIdx) => (
        <Table key={tIdx} tIdx={tIdx} isActive={table.isActive} elements={table.elements} />
      ))}
    </TableWrapper>
  );
}
