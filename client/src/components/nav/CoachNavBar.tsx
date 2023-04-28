import { useState } from "react";
import SearchBar from "../global/search/SeachBar";
import Link from "next/link";

interface Props {
  value: string;
  handleChange: (event: any) => void;
  handleLogout: () => void;
}

const CoachNavBar: React.FC<Props> = (props) => {
  const { value, handleChange, handleLogout } = props;
  const [toggle, setToggle] = useState<boolean>(true);

  const [navMenuToggle, setNavMenuToggle] = useState<boolean>(false);
  return (
    <nav className="flex justify-between items-center px-5 h-24">
      <SearchBar value={value} handleChange={handleChange} />
      <div className="flex justify-between items-center">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            onClick={() => setToggle(!toggle)}
            className="sr-only peer"
            checked={toggle}
          />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-0 dark:peer-focus:ring-primary dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            {toggle === true ? "light" : "dark"}
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
            style={{ backgroundImage: "url(/images/Group11234.png)" }}
          />
          <p className="">Foulen el fouleni</p>
          <img alt="" src="/icons/Vector1.svg" className="" />
        </div>
      </div>
      <div
        className={`shadow rounded-[22px] p-5 bg-tertiary absolute right-5 top-20 ${
          !navMenuToggle && "hidden"
        }`}
      >
        <Link
          href="/dashboard/coach/profile/"
          className="flex items-center py-3 cursor-pointer"
        >
          <img className="mx-2" alt="" src="/icons/profileicon.svg" />
          <p className="text-xs text-textPrimary">Profile</p>
        </Link>
        <Link
          href="/dashboard/coach/settings/"
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
    </nav>
  );
};

export default CoachNavBar;
