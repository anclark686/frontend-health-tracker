import React, { createContext, useState } from "react";

type NavbarContextType = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavbarContext = createContext<NavbarContextType>(
  null as unknown as NavbarContextType,
);

type ContextProviderProps = {
  children: React.ReactNode;
};

export const NavbarProvider = ({ children }: ContextProviderProps) => {
  const [darkMode, setDarkMode] = useState(false);

  const value = {
    darkMode,
    setDarkMode,
  };

  return (
    <NavbarContext.Provider value={value}>{children}</NavbarContext.Provider>
  );
};
