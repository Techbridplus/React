import { Children, createContext, useContext } from "react";

export const ThemeContext = createContext({
   Children
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}