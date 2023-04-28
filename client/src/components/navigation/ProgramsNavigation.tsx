"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

interface Props {}

const ProgramsNavigation: React.FC<Props> = (props) => {
  const page = useSelectedLayoutSegment();

  return (
    <div className="w-full border-2 border-grisPrimary h-14 rounded-[45px] flex my-10">
      <Link
        href={`/dashboard/coach/athletes/`}
        className={`h-14 rounded-[45px] flex items-center justify-center w-1/2 ${
          !page && "bg-primary text-tertiary"
        }`}
      >
        Informations
      </Link>
      <Link
        href={`/dashboard/coach/athletes/`}
        className={`h-14 rounded-[45px] flex items-center justify-center w-1/2 ${
          page === "programs" && "bg-primary text-tertiary"
        }`}
      >
        Programs
      </Link>
      <Link
        href={`/dashboard/coach/athletes/`}
        className={`h-14 rounded-[45px] flex items-center justify-center w-1/2 ${
          page === "programs" && "bg-primary text-tertiary"
        }`}
      >
        Programs
      </Link>
      <Link
        href={`/dashboard/coach/athletes/`}
        className={`h-14 rounded-[45px] flex items-center justify-center w-1/2 ${
          page === "programs" && "bg-primary text-tertiary"
        }`}
      >
        Programs
      </Link>
    </div>
  );
};

export default ProgramsNavigation;
