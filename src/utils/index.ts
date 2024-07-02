import { THEME } from "../constants";

export function getUserTheme() {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.setAttribute("data-theme", "dark");
    return THEME.DARK;
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    return THEME.LIGHT;
  }
}
