export default function TableWrapper({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-3 grid-rows-3 gap-2">{children}</div>;
}
