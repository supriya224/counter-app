import { createContext } from "vm";
// import { theme } from "./theme";////
 import { theme } from "./theme";

type ThemeContextProviderProps = {
    children: React.ReactNode
   
}
export const ThemeContext = createContext(theme)

export const ThemeContextProvider = ({ children, }: ThemeContextProviderProps) => {
    return <ThemeContextProvider value={theme}>{children}</ThemeContextProvider>
}   