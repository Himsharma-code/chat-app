"use client";

import Chat from "@/pages/Chat";
import { call } from "@/utils/call";
import { useEffect } from "react";

export default function ChatPage() {
  const apicall = async () => {
    const data = await call("/api/test", "GET");
  };
  useEffect(() => {
    apicall();
  }, []);
  return (
    <main className="p-6">
      <Chat />
    </main>
  );
}
