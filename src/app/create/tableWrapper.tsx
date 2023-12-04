export default function TableWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-2 p-2 border rounded shadow-2xl">
      {children}
    </div>
  );
}
