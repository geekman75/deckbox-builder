// ** React Import
import { FC, useContext, MouseEventHandler } from "react";

// ** Redux Import
import { useDispatch } from "react-redux";
import { pushEvent } from "redux/event";

// ** Context Import
import ThemeContext from "utility/themeContext";

// ** FontAwesome Import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedo } from '@fortawesome/free-solid-svg-icons'

// ** Type Import
import { ThemeContextType } from "interfaces/theme.interface";
import { AppDispatch } from "redux/store";

const ThemeButton: FC = () => {
  const theme = useContext<ThemeContextType>(ThemeContext);
  const dispatch: AppDispatch = useDispatch();

  const handleChangeTheme: MouseEventHandler = () => {
    theme.switchTheme();
    dispatch(pushEvent('Theme was set to ' + (theme.mode ? "Light" : "Dark")))
  };

  return (
    <button onClick={handleChangeTheme} className="btn w-300">
      <FontAwesomeIcon icon={faRedo} /> Set {theme.mode ? "Light" : "Dark"} Theme
    </button>
  );
};

export default ThemeButton;
