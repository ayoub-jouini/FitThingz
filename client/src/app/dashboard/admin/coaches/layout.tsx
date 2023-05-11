import AdminCoachesNavigation from "../../../../components/navigation/AdminCoachesNavigation";

export default function ProgramsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="m-5">
      <AdminCoachesNavigation />
      {children}
    </div>
  );
}
