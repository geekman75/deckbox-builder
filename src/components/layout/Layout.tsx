// ** React Imports
import { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import { ThemeContextType } from "../../interfaces/theme.interface";

// ** Context Import
import ThemeContext, {themes} from "../../utility/themeContext";

const Layout: FC = () => {

  const switchTheme = () => {
    setTheme((prevTheme: ThemeContextType) => ({
      mode: prevTheme.mode === themes.dark ? themes.light : themes.dark,
      switchTheme
    }))
  }
  
  const [theme, setTheme] = useState<ThemeContextType>({
    mode: themes.light,
    switchTheme
  })

  return (
    <ThemeContext.Provider value={theme}>
      <div className={'theme-' + (theme.mode ? 'dark' : 'light')}>
        <Outlet />
      </div>
    </ThemeContext.Provider>
  );
};

export default Layout;
