"use client";

import { useSelector } from "react-redux";

export default function DashbordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const auth = useSelector((state: any) => state.auth);

  if (auth) {
    return <main>{children}</main>;
  }
  return <main>you are not logged in</main>;
}
