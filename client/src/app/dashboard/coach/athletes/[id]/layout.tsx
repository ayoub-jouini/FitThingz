import AthleteNavigation from "../../../../../components/navigation/AthleteNavigartion";
import UserData from "../../../../../components/userData/UserData";

export default function AthleteProgramsLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <div className="m-5">
      <UserData />
      <AthleteNavigation id={params.id} />
      {children}
    </div>
  );
}
