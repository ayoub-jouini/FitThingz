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

  const handleSearch = (event: any) => {
    setSearch(event.target.value);
  };
  return (
    <main className="flex">
      <div className="w-1/6 h-screen flex justify-center items-center py-5 ">
        <CoachSideBar handleLogout={handleLogout} />
      </div>
      <div className="w-5/6">
        <CoachNavBar
          value={search}
          handleChange={handleSearch}
          handleLogout={handleLogout}
        />
        {children}
      </div>
    </main>
  );
}
