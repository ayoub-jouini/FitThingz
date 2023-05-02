import ProgramHeader from "../../../../../components/programHeader/ProgramHeader";

export default function programLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="m-5">
      <ProgramHeader />
      {children}
    </div>
  );
}
