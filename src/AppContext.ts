import React from "react";
 
import { UserModel } from "./types/user.model";
import { EntryModel } from "./types/entry.model";

export type ContextType ={
  loading: boolean;
  setLoading: (loading: boolean) => void;
  user: UserModel | null;
  setuser: (user: UserModel) => void;
  alert: string | null;
  setAlert: (alert: string) => void;
  currentUser: string | null;
  setCurrentUser: (currentUser: string) => void;
  message: string | null;
  setMessage: (message: string) => void;
  itemMenu: string | null;
  setItemMenu: (itemMenu: string) => void;
  entry: EntryModel | null;
  setEntry: (entry: EntryModel) => void;
}
  
export const defaultProps = {
  loading: false,
  setLoading: () => null,
  user: null,
  setuser: () => null,
  alert: null,
  setAlert: () => null,
  currentUser: null,
  setCurrentUser: () => null,
  message: null,
  setMessage: () => null,
  itemMenu: null,
  setItemMenu: () => null,
  entry: null,
  setEntry: () => null,
};
const AppContext = React.createContext<ContextType | undefined> (undefined);

export default AppContext;
