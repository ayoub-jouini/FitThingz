import UserNavigation from "../../../../../components/userData/UserNavigartion";
import UserData from "../../../../../components/userData/UserData";

export default function DashbordLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <div className="m-5">
      <UserData />
      <UserNavigation id={params.id} />
      {children}
    </div>
  );
}
