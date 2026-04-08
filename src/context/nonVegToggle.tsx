'use client'
import { createContext, useContext, useState } from "react";

type NonVegToggleContextValue = {
  toggle: boolean;
  toggleMode: () => void;
};

const NonVegToggleContext = createContext<NonVegToggleContextValue | undefined>(
  undefined,
);

type NonVegToggleProviderProps = {
  children: React.ReactNode;
};

export const NonVegToggleProvider = ({
  children,
}: NonVegToggleProviderProps) => {
  const [toggle, setToggle] = useState(false);

  const toggleMode = () => {
    setToggle((prev) => !prev);
  };

  return (
    <NonVegToggleContext.Provider value={{ toggle, toggleMode }}>
      {children}
    </NonVegToggleContext.Provider>
  );
};

export const useNonVegToggle = () => {
  const context = useContext(NonVegToggleContext);
  if (!context) {
    throw new Error("useNonVegToggle must be used within NonVegToggleProvider");
  }
  return context;
};
