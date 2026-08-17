export type ThemeMode = "dark" | "light";

export function getInitialTheme(): ThemeMode {
  if (typeof window === "undefined") return "dark";
  
  const saved = localStorage.getItem("ayush_theme_mode") as ThemeMode | null;
  if (saved === "dark" || saved === "light") {
    return saved;
  }
  
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
    return "light";
  }
  
  return "dark";
}

export function applyTheme(mode: ThemeMode) {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute("data-theme", mode);
  localStorage.setItem("ayush_theme_mode", mode);
}
