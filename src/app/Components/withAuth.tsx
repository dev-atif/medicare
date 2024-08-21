"use client";
import { useAppSelector } from "@/Hooks/useRedux";
import { redirect, useRouter } from "next/navigation";
;
import { useEffect} from "react";
import toast from "react-hot-toast";

export default function withOutAuth(Component: any) {
  return function WithoutAuth(props: any) {
    const router = useRouter();
    const {token} = useAppSelector(s=>s.token)
    const session = token
    useEffect(() => {
      if (!session) {
        toast.error('Sorry Login First')
        router.push("/login");
        
      }
    }, []);
    if (!session) {
      return null;
    }
    return <Component {...props} />;
  };
}
