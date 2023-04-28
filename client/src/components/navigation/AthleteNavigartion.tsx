"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

interface Props {
  id: string;
}

const AthleteNavigation: React.FC<Props> = (props) => {
  const { id } = props;

  const page = useSelectedLayoutSegment();

  return (
    <div className="w-5/12 border-2 border-grisPrimary h-14 rounded-[45px] flex my-10">
      <Link
        href={`/dashboard/coach/athletes/${id}`}
        className={`h-14 rounded-[45px] flex items-center justify-center w-1/2 ${
          !page && "bg-primary text-tertiary"
        }`}
      >
        Informations
      </Link>
      <Link
        href={`/dashboard/coach/athletes/${id}/programs`}
        className={`h-14 rounded-[45px] flex items-center justify-center w-1/2 ${
          page === "programs" && "bg-primary text-tertiary"
        }`}
      >
        Programs
      </Link>
    </div>
  );
};

export default AthleteNavigation;
