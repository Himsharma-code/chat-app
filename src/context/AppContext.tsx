// components/MyContext.tsx
"use client";
import { isLoggedIn, logout } from "@/utils/isLoggedIn";
import { request } from "@/utils/request";
import { usePathname, useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";

interface MyContextProps {
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
}

const MyContext = createContext<MyContextProps | undefined>(undefined);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      const data = await request("/api/users/me", "GET");
      if (data.success) {
        setUser(data.data.user);
      }
    } catch (error) {
      logout();
      setUser(null);
      router.push("/");
    }
  };

  useEffect(() => {
    if (isLoggedIn()) {
      fetchUser();
    }
  }, [pathname]);

  const contextValue: MyContextProps = {
    user,
    setUser,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

export const useMyContext = (): MyContextProps => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return context;
};
