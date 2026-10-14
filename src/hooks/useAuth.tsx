import { useEffect, useState } from "react";

interface Auth {
  cookie: string;
  isAuthenticated: boolean;
}

export default function useAuth() {
  const [authObj, setAuthObj] = useState<Auth>({
    cookie: "",
    isAuthenticated: false,
  });

  const checkAuth = () => {
    setAuthObj((prev: Auth) => ({ ...prev, cookie: "temp" }));
    setAuthObj((prev: Auth) => ({ ...prev, isAuthenticated: true }));
  };

  //   AUTH LOGIC HERE
  useEffect(() => {
    checkAuth();
  }, []);

  return authObj;
}
