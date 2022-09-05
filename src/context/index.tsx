import React, { createContext } from "react";

interface IAppContext {
  searchOpen: boolean;
  controlSearchOpen: (value: boolean) => void;
}

const defaultState = {
  searchOpen: false,
  controlSearchOpen: () => {},
};

const AppContext = createContext<IAppContext>(defaultState);

export default AppContext;
