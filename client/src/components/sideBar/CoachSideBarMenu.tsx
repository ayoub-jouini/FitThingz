"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

interface Props {}

const CoachSideBarMenu: React.FC<Props> = (props) => {
  const page = useSelectedLayoutSegment();

  return (
    <div className="">
      <Link
        href="/dashboard/coach/"
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
        href="/dashboard/coach/athletes"
        className={`flex items-center h-11 pl-10 ${
          page === "athletes" && "bg-primary -ml-5 rounded-l-[19px]"
        }`}
      >
        {page === "athletes" ? (
          <img alt="" src="/icons/sportifsiconwhite.svg" className="mr-3" />
        ) : (
          <img alt="" src="/icons/sporifsicon.svg" className="mr-3" />
        )}
        <p
          className={`text-sm font-semibold ${
            page === "athletes" ? "text-tertiary" : "text-textPrimary"
          }`}
        >
          Athletes List
        </p>
      </Link>
      <Link
        href="/dashboard/coach/programs"
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
        href="/dashboard/coach/exercices"
        className={`flex items-center h-11 pl-10 ${
          page === "exercices" && "bg-primary -ml-5 rounded-l-[19px]"
        }`}
      >
        {page === "exercices" ? (
          <img alt="" src="/icons/exercicesiconwhite.svg" className="mr-3" />
        ) : (
          <img alt="" src="/icons/exercicesicon.svg" className="mr-3" />
        )}
        <p
          className={`text-sm font-semibold ${
            page === "exercices" ? "text-tertiary" : "text-textPrimary"
          }`}
        >
          Exercices
        </p>
      </Link>
      <Link
        href="/dashboard/coach/nutrition"
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

export default CoachSideBarMenu;
