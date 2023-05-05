"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function DashbordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let auth: any = useSelector((state: any) => state.auth);

  const router = useRouter();

  useEffect(() => {
    if (!auth.accessToken) {
      router.push("/login");
    }
  }, [auth]);

  return <div>{children}</div>;
}
