import { call } from "@/utils/call";
import React, { useEffect, useState } from "react";

const Chat = () => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await call("/api/chats", "GET");
      console.log("res", res);
    };
    fetch();
  }, []);

  return <div>Chat</div>;
};

export default Chat;
