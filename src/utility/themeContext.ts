import React from 'react'
import { ThemeContextType } from '../interfaces/theme.interface'

export const themes = {
    light: 0,
    dark: 1
}

export default React.createContext<ThemeContextType>({
    mode: themes.light,
    switchTheme: () => {}
})