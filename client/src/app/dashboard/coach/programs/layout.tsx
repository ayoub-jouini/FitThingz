import ProgramsNavigation from "@/components/navigation/ProgramsNavigation";

export default function ProgramsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="m-5">
      <ProgramsNavigation />
      {children}
    </div>
  );
}
