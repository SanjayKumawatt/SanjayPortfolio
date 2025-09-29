import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState("light");

  // Load theme from localStorage
  useEffect(() => {
    const savedItem = localStorage.getItem("theme");
    if (savedItem) {
      setIsDark(savedItem);  // saved string ("dark" / "light")
    }
  }, []);

  // Save theme to localStorage
  useEffect(() => {
    localStorage.setItem("theme", isDark);
  }, [isDark]);

  return (
    <ThemeContext.Provider value={[isDark, setIsDark]}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
