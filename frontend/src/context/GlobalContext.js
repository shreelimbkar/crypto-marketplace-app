import { createContext } from "react";

const initialState = {
  user: null,
};

export const GlobalContext = createContext(initialState);
