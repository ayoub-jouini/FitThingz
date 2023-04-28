"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

interface Props {}

const CoachProfileNavigation: React.FC<Props> = (props) => {
  const page = useSelectedLayoutSegment();

  return (
    <div className="flex justify-between items-center">
      <div className="w-5/12 border-2 border-grisPrimary h-14 rounded-[45px] flex my-10">
        <Link
          href={`/dashboard/coach/profile/`}
          className={`h-14 rounded-[45px] flex items-center justify-center w-1/2 ${
            !page && "bg-primary text-tertiary"
          }`}
        >
          Personal Informations
        </Link>
        <Link
          href={`/dashboard/coach/profile/reviews`}
          className={`h-14 rounded-[45px] flex items-center justify-center w-1/2 ${
            page === "reviews" && "bg-primary text-tertiary"
          }`}
        >
          Reviews
        </Link>
      </div>
      <div className="rounded-xl text-primary font-medium bg-tertiary border-primary border-2  cursor-pointer h-12 w-48 text-base flex justify-center items-center">
        <img alt="" src="/icons/editicon.svg" className="mx-2" />
        <p className="mx-2">Edit</p>
      </div>
    </div>
  );
};

export default CoachProfileNavigation;
