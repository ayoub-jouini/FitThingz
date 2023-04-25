"use client";

import { useState } from "react";
import CoachNavBar from "../../../components/nav/CoachNavBar";
import CoachSideBar from "../../../components/sideBar/CoachSideBar";

export default function DashbordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [search, setSearch] = useState<string>("");

  const handleSearch = (event: any) => {
    setSearch(event.target.value);
  };
  return (
    <main className="flex">
      <div className="w-1/6 h-screen flex justify-center items-center py-5 ">
        <CoachSideBar />
      </div>
      <div className="w-5/6">
        <CoachNavBar value={search} handleChange={handleSearch} />
        {children}
      </div>
    </main>
  );
}
