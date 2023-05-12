"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

interface Props {}

const AthleteSideBarMenu: React.FC<Props> = (props) => {
  const page = useSelectedLayoutSegment();

  return (
    <div className="">
      <Link
        href="/dashboard/athlete/"
        className={`flex items-center h-11 pl-10 ${
          !page && "bg-primary -ml-5 rounded-l-[19px]"
        }`}
      >
        {!page ? (
          <img alt="" src="/icons/dashboardiconwhite.svg" className="mr-3" />
        ) : (
          <img alt="" src="/icons/dashboardicon.svg" className="mr-3" />
        )}
        <p
          className={`text-sm font-semibold ${
            !page ? "text-tertiary" : "text-textPrimary"
          }`}
        >
          Dashboard
        </p>
      </Link>
      <Link
        href="/dashboard/athlete/coaches"
        className={`flex items-center h-11 pl-10 ${
          page === "coaches" && "bg-primary -ml-5 rounded-l-[19px]"
        }`}
      >
        {page === "coaches" ? (
          <img alt="" src="/icons/sportifsiconwhite.svg" className="mr-3" />
        ) : (
          <img alt="" src="/icons/sporifsicon.svg" className="mr-3" />
        )}
        <p
          className={`text-sm font-semibold ${
            page === "coaches" ? "text-tertiary" : "text-textPrimary"
          }`}
        >
          Coaches
        </p>
      </Link>
      <Link
        href="/dashboard/athlete/programs"
        className={`flex items-center h-11 pl-10 ${
          page === "programs" && "bg-primary -ml-5 rounded-l-[19px]"
        }`}
      >
        {page === "programs" ? (
          <img alt="" src="/icons/programsiconwhite.svg" className="mr-3" />
        ) : (
          <img alt="" src="/icons/programsicon.svg" className="mr-3" />
        )}
        <p
          className={`text-sm font-semibold ${
            page === "programs" ? "text-tertiary" : "text-textPrimary"
          }`}
        >
          Programs
        </p>
      </Link>
      <Link
        href="/dashboard/athlete/exercises"
        className={`flex items-center h-11 pl-10 ${
          page === "exercises" && "bg-primary -ml-5 rounded-l-[19px]"
        }`}
      >
        {page === "exercises" ? (
          <img alt="" src="/icons/exercicesiconwhite.svg" className="mr-3" />
        ) : (
          <img alt="" src="/icons/exercicesicon.svg" className="mr-3" />
        )}
        <p
          className={`text-sm font-semibold ${
            page === "exercises" ? "text-tertiary" : "text-textPrimary"
          }`}
        >
          Exercises
        </p>
      </Link>
      <Link
        href="/dashboard/athlete/nutrition"
        className={`flex items-center h-11 pl-10 ${
          page === "nutrition" && "bg-primary -ml-5 rounded-l-[19px]"
        }`}
      >
        {page === "nutrition" ? (
          <img alt="" src="/icons/nutritionwhite.svg" className="mr-3" />
        ) : (
          <img alt="" src="/icons/nutrition.svg" className="mr-3" />
        )}
        <p
          className={`text-sm font-semibold ${
            page === "nutrition" ? "text-tertiary" : "text-textPrimary"
          }`}
        >
          Nutrition
        </p>
      </Link>
    </div>
  );
};

export default AthleteSideBarMenu;
