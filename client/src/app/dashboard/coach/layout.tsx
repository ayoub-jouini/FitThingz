"use client";

import { useState } from "react";
import CoachNavBar from "../../../components/nav/CoachNavBar";
import CoachSideBar from "../../../components/sideBar/CoachSideBar";

import { logout } from "../../../store/features/auth/authThunk";
import { useDispatch } from "react-redux";

export default function DashbordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch<any>(logout());
  };

  const [search, setSearch] = useState<string>("");

  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const [darkModeToggle, setDarkModeToggle] = useState<boolean>(true);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleSearch = (event: any) => {
    setSearch(event.target.value);
  };
  return (
    <main className="flex">
      <div className="absolute md:relative md:w-1/6 h-screen flex justify-center items-center py-5 ">
        <CoachSideBar
          handleLogout={handleLogout}
          handleToggleMenu={handleToggleMenu}
          toggleMenu={toggleMenu}
          darkModeToggle={darkModeToggle}
          setDarkModeToggle={setDarkModeToggle}
        />
      </div>
      <div className="md:w-5/6 mx-5 w-full">
        <CoachNavBar
          value={search}
          handleChange={handleSearch}
          handleLogout={handleLogout}
          handleToggleMenu={handleToggleMenu}
          darkModeToggle={darkModeToggle}
          setDarkModeToggle={setDarkModeToggle}
          type="coach"
        />
        {children}
      </div>
    </main>
  );
}
