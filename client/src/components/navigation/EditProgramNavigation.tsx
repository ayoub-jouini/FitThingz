"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

interface Props {
  program: string;
  day: string;
}

const EditProgramNavigation: React.FC<Props> = (props) => {
  const { program, day } = props;
  const page = useSelectedLayoutSegment();

  return (
    <div className="w-full border-2 border-grisPrimary h-14 rounded-[45px] flex">
      <Link
        href={`/dashboard/coach/programs/${program}/${day}/editexercises/`}
        className={`h-full rounded-[45px] flex items-center justify-center w-1/2 text-center ${
          page !== "myexercises" ? "bg-primary text-tertiary" : "bg-tertiary"
        }`}
      >
        Exercise library
      </Link>
      <Link
        href={`/dashboard/coach/programs/${program}/${day}/editexercises/myexercises`}
        className={`h-full rounded-[45px] flex items-center justify-center w-1/2 text-center ${
          page === "myexercises" ? "bg-primary text-tertiary" : "bg-tertiary"
        }`}
      >
        My Exercises
      </Link>
    </div>
  );
};

export default EditProgramNavigation;
