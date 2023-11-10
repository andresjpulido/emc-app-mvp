import { useState, ReactNode } from "react";
import AppContext, { ContextType } from "./AppContext";

type ContextProviderProps = {
  children?: ReactNode;
};

export const AppProvider = ({ children }: ContextProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [user, setuser] = useState<ContextType["user"]>(null);
  const [currentUser, setCurrentUser] =
    useState<ContextType["currentUser"]>(null);
  const [alert, setAlert] = useState<ContextType["alert"]>("");
  const [message, setMessage] = useState<ContextType["message"]>("este es");
  const [itemMenu, setItemMenu] = useState<ContextType["itemMenu"]>("entries");
  const [entry, setEntry] = useState<ContextType["entry"]>(null);

  const value = {
    loading,
    setLoading,
    user,
    setuser,
    alert,
    setAlert,
    currentUser,
    setCurrentUser,
    message,
    setMessage,
    itemMenu,
    setItemMenu,
    entry,
    setEntry,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
