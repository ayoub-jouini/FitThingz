"use client";

import { logout } from "../../../store/features/auth/authThunk";
import { useDispatch } from "react-redux";

export default function AthleteDashboard() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch<any>(logout());
  };

  return (
    <main>
      <button onClick={handleLogout}>logout</button>
    </main>
  );
}
