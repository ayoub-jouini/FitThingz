"use client";

import { useState } from "react";
import Link from "next/link";

import SearchBar from "../global/search/SeachBar";
import { useSelector } from "react-redux";

interface Props {
  value: string;
  handleChange: (event: any) => void;
  handleLogout: () => void;
  handleToggleMenu: () => void;
  setDarkModeToggle: (event: boolean) => void;
  darkModeToggle: boolean;
  type: string;
}

const CoachNavBar: React.FC<Props> = (props) => {
  const {
    darkModeToggle,
    setDarkModeToggle,
    value,
    handleChange,
    handleLogout,
    handleToggleMenu,
    type,
  } = props;

  const auth: any = useSelector((state: any) => state.auth);

  const [navMenuToggle, setNavMenuToggle] = useState<boolean>(false);
  return (
    <nav className="">
      <div className="hidden md:flex justify-between items-center px-5 h-24 ">
        <SearchBar value={value} handleChange={handleChange} />
        <div className="flex justify-between items-center">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              onChange={() => setDarkModeToggle(!darkModeToggle)}
              className="sr-only peer"
              checked={darkModeToggle}
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-0 dark:peer-focus:ring-primary dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              {darkModeToggle === true ? "light" : "dark"}
            </span>
          </label>
        </div>
        <div className="">
          <div
            className="flex justify-between items-center w-60 shadow rounded-[22px] px-2 cursor-pointer"
            onClick={() => setNavMenuToggle(!navMenuToggle)}
          >
            <div
              className="bg-cover rounded-full h-14 w-14"
              style={{ backgroundImage: `url(${auth.avatar})` }}
            />
            <p className="">{`${auth.prenom} ${auth.nom}`}</p>
            <img
              alt=""
              src="/icons/Vector1.svg"
              className={`${navMenuToggle && "rotate-180"}`}
            />
          </div>
        </div>
        <div
          className={`shadow rounded-[22px] p-5 bg-tertiary absolute right-10 top-20 ${
            !navMenuToggle && "hidden"
          }`}
        >
          <Link
            href={`/dashboard/${type}/profile/`}
            className="flex items-center py-3 cursor-pointer"
          >
            <img className="mx-2" alt="" src="/icons/profileicon.svg" />
            <p className="text-xs text-textPrimary">Profile</p>
          </Link>
          <Link
            href={`/dashboard/${type}/settings/`}
            className="flex items-center py-3 cursor-pointer border-y-2 border-grisPrimary"
          >
            <img className="mx-2" alt="" src="/icons/settingsicon.svg" />
            <p className="text-xs text-textPrimary">Settings</p>
          </Link>
          <div
            className="flex items-center py-3 cursor-pointer"
            onClick={handleLogout}
          >
            <img className="mx-2" alt="" src="/icons/logoutprimary.svg" />
            <p className="text-xs text-textPrimary">Logout</p>
          </div>
        </div>
      </div>

      {
        //responsive navbar
      }

      <div className="flex md:hidden justify-between items-center h-24 w-full">
        <div
          className="w-9 h-9 shadow rounded-[10px] flex justify-center items-center"
          onClick={handleToggleMenu}
        >
          <img alt="" src="/icons/menuicon.svg" />
        </div>
        <div className="w-9 h-9 shadow rounded-[10px] flex justify-center items-center">
          <img alt="" src="/icons/search.svg" />
        </div>
      </div>
    </nav>
  );
};

export default CoachNavBar;
