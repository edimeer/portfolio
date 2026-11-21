import { createContext, useContext, useEffect, useMemo, useState } from "react";

// Dark is the default. index.html sets the `dark` class before React loads
// so the page never flashes light; this provider takes over from there.
const ThemeContext = createContext({ theme: "dark", toggle: () => {} });

function readStoredTheme() {
  try {
    return localStorage.getItem("theme");
  } catch {
    return null;
  }
}

function storeTheme(theme) {
  try {
    localStorage.setItem("theme", theme);
  } catch {
    // Private mode or blocked storage: the toggle still works for this visit.
  }
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() =>
    readStoredTheme() === "light" ? "light" : "dark",
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      toggle: () =>
        setTheme((current) => {
          const next = current === "dark" ? "light" : "dark";
          storeTheme(next);
          return next;
        }),
    }),
    [theme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  return useContext(ThemeContext);
}
