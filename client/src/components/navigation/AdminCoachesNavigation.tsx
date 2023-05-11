"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

interface Props {}

const AdminCoachesNavigation: React.FC<Props> = (props) => {
  const page = useSelectedLayoutSegment();

  return (
    <div className="w-5/12 border-2 border-grisPrimary h-14 rounded-[45px] flex my-10">
      <Link
        href={`/dashboard/admin/coaches/`}
        className={`h-14 rounded-[45px] flex items-center justify-center w-1/2 ${
          !page && "bg-primary text-tertiary"
        }`}
      >
        All Coaches
      </Link>
      <Link
        href={`/dashboard/admin/coaches/requests`}
        className={`h-14 rounded-[45px] flex items-center justify-center w-1/2 ${
          page === "requests" && "bg-primary text-tertiary"
        }`}
      >
        Coaches Requests
      </Link>
    </div>
  );
};

export default AdminCoachesNavigation;
