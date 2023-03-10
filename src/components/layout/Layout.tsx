// ** React Imports
import { FC, useState } from "react";
import { Outlet } from "react-router-dom";

// ** Context Import
import ThemeContext, {themes} from "utility/themeContext";

// ** Custom Component Import
import Topbar from "./topbar";

// ** Style Import
import "assets/css/layout.css"

// ** Type Import
import { ThemeContextType } from "interfaces/theme.interface";

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
        <Topbar />
        <div className="main-container">
          <Outlet />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default Layout;
