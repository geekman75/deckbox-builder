// ** React Import
import { createContext } from "react";

// ** Type Import
import { ThemeContextType } from "interfaces/theme.interface";

export const themes = {
  light: 0,
  dark: 1,
};

export default createContext<ThemeContextType>({
  mode: themes.light,
  switchTheme: () => {},
});
