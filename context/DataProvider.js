import React, { createContext, useState } from "react";

export const DataContext = createContext();

export default function DataProvider({ children }) {
  const [theme, setTheme] = useState(true);
  const [menu, setMenu] = useState(false);
  const [copy, setCopy] = useState(false);
  return (
    <DataContext.Provider
      value={{ theme, setTheme, menu, setMenu, copy, setCopy }}
    >
      {children}
    </DataContext.Provider>
  );
}
