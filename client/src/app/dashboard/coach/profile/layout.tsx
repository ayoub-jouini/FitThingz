import CoachProfileNavigation from "../../../../components/navigation/CoachProfileNavigation";
import CoachProfileHeader from "../../../../components/userData/CoachProfileHeader";

export default function CoachReviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="m-5">
      <CoachProfileHeader />
      <CoachProfileNavigation />
      {children}
    </div>
  );
}
