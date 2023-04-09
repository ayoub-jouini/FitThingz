"use client";

import { useSelector } from "react-redux";

export default function CoachDashboard() {
  const auth = useSelector((state: any) => state.auth);

  return <main>coach dashboard</main>;
}
