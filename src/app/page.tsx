"use client";
import Auth from "@/pages/Auth";
import { isLoggedIn } from "@/utils/isLoggedIn";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn()) {
      router.push("/dashboard");
    }
  }, []);

  return (
    <main className="p-6">
      <Auth />
    </main>
  );
}
