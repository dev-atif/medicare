"use client";
import { useAppSelector } from "@/Hooks/useRedux";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function withAuth(Component: any) {
  return function WithAuth(props: any) {
    const {token} = useAppSelector(s=>s.token)
    const session = token
    useEffect(() => {
      if (session) {
        redirect("/");
      }
    }, []);
    if (session) {
      return null;
    }
    return <Component {...props} />;
  };
}
