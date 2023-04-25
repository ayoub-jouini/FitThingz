"use client";

import { logout } from "../../../store/features/auth/authThunk";
import { useDispatch } from "react-redux";

export default function CoachDashboard() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch<any>(logout());
  };

  return <div>{/* <button onClick={handleLogout}>logout</button> */}</div>;
}
