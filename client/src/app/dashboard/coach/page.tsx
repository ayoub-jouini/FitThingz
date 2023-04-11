"use client";

import CoachNavBar from "../../../components/nav/CoachNavBar";
import { logout } from "../../../store/features/auth/authThunk";
import { useDispatch } from "react-redux";

export default function CoachDashboard() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch<any>(logout());
  };

  return (
    <main>
      <CoachNavBar />
      {/* <button onClick={handleLogout}>logout</button> */}
    </main>
  );
}
