"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

interface Props {}

const CoachesAthletesNavigation: React.FC<Props> = (props) => {
  const page = useSelectedLayoutSegment();

  return (
    <>
      {(!page || page === "request") && (
        <div className="w-5/12 border-2 border-grisPrimary h-14 rounded-[45px] flex my-10">
          <Link
            href={`/dashboard/coach/athletes/`}
            className={`h-14 rounded-[45px] flex items-center justify-center w-1/2 ${
              !page && "bg-primary text-tertiary"
            }`}
          >
            All Clients
          </Link>
          <Link
            href={`/dashboard/coach/athletes/request`}
            className={`h-14 rounded-[45px] flex items-center justify-center w-1/2 ${
              page === "request" && "bg-primary text-tertiary"
            }`}
          >
            Clients Request
          </Link>
        </div>
      )}
    </>
  );
};

export default CoachesAthletesNavigation;
