import CoachesAthletesNavigation from "../../../../components/navigation/CoachAthletesNavigation";

export default function ProgramsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="m-5">
      <CoachesAthletesNavigation />
      {children}
    </div>
  );
}
