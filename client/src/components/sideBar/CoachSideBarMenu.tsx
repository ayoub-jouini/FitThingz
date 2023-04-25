"use client";

interface Props {}

const CoachSideBarMenu: React.FC<Props> = (props) => {
  let page = "athletes";
  return (
    <div className="">
      <div
        className={`flex items-center h-11 pl-10 ${
          page === "dashboard" && "bg-primary -ml-5 rounded-l-[19px]"
        }`}
      >
        {page === "dashboard" ? (
          <img alt="" src="/icons/dashboardiconwhite.svg" className="mr-3" />
        ) : (
          <img alt="" src="/icons/dashboardicon.svg" className="mr-3" />
        )}
        <p
          className={`text-sm font-semibold ${
            page === "dashboard" ? "text-tertiary" : "text-textPrimary"
          }`}
        >
          Dashboard
        </p>
      </div>
      <div
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
      </div>
      <div
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
      </div>
      <div
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
      </div>
      <div
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
      </div>
    </div>
  );
};

export default CoachSideBarMenu;
