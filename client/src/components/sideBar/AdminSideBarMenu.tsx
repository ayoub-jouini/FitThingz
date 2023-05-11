"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

interface Props {}

const AdminSideBarMenu: React.FC<Props> = (props) => {
  const page = useSelectedLayoutSegment();

  return (
    <div className="">
      <Link
        href="/dashboard/admin/"
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
        href="/dashboard/admin/coaches"
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
          Coaches List
        </p>
      </Link>
      <Link
        href="/dashboard/admin/athletes"
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
        href="/dashboard/admin/reports"
        className={`flex items-center h-11 pl-10 ${
          page === "reports" && "bg-primary -ml-5 rounded-l-[19px]"
        }`}
      >
        {page === "reports" ? (
          <img alt="" src="/icons/reportsisconwhite.svg" className="mr-3" />
        ) : (
          <img alt="" src="/icons/reportsiscon.svg" className="mr-3" />
        )}
        <p
          className={`text-sm font-semibold ${
            page === "reports" ? "text-tertiary" : "text-textPrimary"
          }`}
        >
          Reports
        </p>
      </Link>
      <Link
        href="/dashboard/admin/settings"
        className={`flex items-center h-11 pl-10 ${
          page === "settings" && "bg-primary -ml-5 rounded-l-[19px]"
        }`}
      >
        {page === "settings" ? (
          <img alt="" src="/icons/settingsiconwhite.svg" className="mr-3" />
        ) : (
          <img alt="" src="/icons/settingsiconblack.svg" className="mr-3" />
        )}
        <p
          className={`text-sm font-semibold ${
            page === "settings" ? "text-tertiary" : "text-textPrimary"
          }`}
        >
          Settings
        </p>
      </Link>
    </div>
  );
};

export default AdminSideBarMenu;
