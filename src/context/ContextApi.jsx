"use client";

import { createContext, useState, useContext } from "react";

const myContext = createContext();

export function MyState({ children }) {
  const [mode, setMode] = useState("dark");
  const [info, setInfo] = useState({
    name: "",
    gender: "",
    email: "",
    password: "",
  });

  const togglemode = () => {
    if (mode == "dark") {
      setMode("light");
      document.body.style.backgroundColor = "rgb(17,24,39)";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <myContext.Provider value={{ mode, togglemode, info, setInfo }}>
      {children}
    </myContext.Provider>
  );
}

export function AppWrapper() {
  return useContext(myContext);
}
