export default function TableWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-[0.1rem] p-1 border border-gray-400 rounded shadow-xl sm:gap-1 md:gap-2 sm:p-2 sm:shadow-2xl">
      {children}
    </div>
  );
}
