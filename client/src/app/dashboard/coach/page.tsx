"use client";

import { useState } from "react";
import CoachNavBar from "../../../components/nav/CoachNavBar";
import { logout } from "../../../store/features/auth/authThunk";
import { useDispatch } from "react-redux";

export default function CoachDashboard() {
  const dispatch = useDispatch();

  const [search, setSearch] = useState<string>("");

  const handleSearch = (event: any) => {
    setSearch(event.target.value);
  };

  const handleLogout = () => {
    dispatch<any>(logout());
  };

  return (
    <main>
      <CoachNavBar value={search} handleChange={handleSearch} />
      {/* <button onClick={handleLogout}>logout</button> */}
    </main>
  );
}
