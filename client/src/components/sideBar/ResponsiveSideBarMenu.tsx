"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

const ResponsiveSideBarMenu = () => {
  const page = useSelectedLayoutSegment();

  return (
    <div className="flex flex-col h-1/3 my-20">
      <Link
        href="/dashboard/coach/"
        className={`my-2 flex items-center h-11  ${
          !page && "bg-tertiary rounded-l-[19px] pl-10"
        }`}
      >
        {!page ? (
          <img alt="" src="/icons/dashboardicon.svg" className="mr-3" />
        ) : (
          <img alt="" src="/icons/dashboardiconwhite.svg" className="mr-3" />
        )}
        <p
          className={`text-sm font-semibold ${
            !page ? "text-textPrimary" : "text-tertiary"
          }`}
        >
          Dashboard
        </p>
      </Link>
      <Link
        href="/dashboard/coach/athletes"
        className={`my-2 flex items-center h-11  ${
          page === "athletes" && "bg-tertiary rounded-l-[19px] pl-10"
        }`}
      >
        {page === "athletes" ? (
          <img alt="" src="/icons/sporifsicon.svg" className="mr-3" />
        ) : (
          <img alt="" src="/icons/sportifsiconwhite.svg" className="mr-3" />
        )}
        <p
          className={`text-sm font-semibold ${
            page === "athletes" ? "text-textPrimary" : "text-tertiary"
          }`}
        >
          Athletes List
        </p>
      </Link>
      <Link
        href="/dashboard/coach/programs"
        className={`my-2 flex items-center h-11  ${
          page === "programs" && "bg-tertiary rounded-l-[19px] pl-10"
        }`}
      >
        {page === "programs" ? (
          <img alt="" src="/icons/programsicon.svg" className="mr-3" />
        ) : (
          <img alt="" src="/icons/programsiconwhite.svg" className="mr-3" />
        )}
        <p
          className={`text-sm font-semibold ${
            page === "programs" ? "text-textPrimary" : "text-tertiary"
          }`}
        >
          Programs
        </p>
      </Link>
      <Link
        href="/dashboard/coach/exercises"
        className={`my-2 flex items-center h-11  ${
          page === "exercises" && "bg-tertiary rounded-l-[19px] pl-10"
        }`}
      >
        {page === "exercises" ? (
          <img alt="" src="/icons/exercicesicon.svg" className="mr-3" />
        ) : (
          <img alt="" src="/icons/exercicesiconwhite.svg" className="mr-3" />
        )}
        <p
          className={`text-sm font-semibold ${
            page === "exercises" ? "text-textPrimary" : "text-tertiary"
          }`}
        >
          Exercises
        </p>
      </Link>
      <Link
        href="/dashboard/coach/nutrition"
        className={`my-2 flex items-center h-11  ${
          page === "nutrition" && "bg-tertiary rounded-l-[19px] pl-10"
        }`}
      >
        {page === "nutrition" ? (
          <img alt="" src="/icons/nutrition.svg" className="mr-3" />
        ) : (
          <img alt="" src="/icons/nutritionwhite.svg" className="mr-3" />
        )}
        <p
          className={`text-sm font-semibold ${
            page === "nutrition" ? "text-textPrimary" : "text-tertiary"
          }`}
        >
          Nutrition
        </p>
      </Link>
    </div>
  );
};

export default ResponsiveSideBarMenu;
