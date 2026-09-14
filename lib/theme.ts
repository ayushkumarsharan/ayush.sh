import { ThemeId } from '@/content/universe.config';

export function getInitialTheme(): ThemeId {
  if (typeof window === "undefined") return "cosmos";
  
  const saved = localStorage.getItem("ayush_theme_mode") as ThemeId | null;
  if (saved) {
    return saved;
  }
  
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
    return "daylight";
  }
  
  return "cosmos";
}

export function applyTheme(mode: ThemeId) {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute("data-theme", mode);
  localStorage.setItem("ayush_theme_mode", mode);
}
