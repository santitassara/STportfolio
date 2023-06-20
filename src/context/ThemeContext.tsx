import React from "react";

type ThemeContextType = {
  theme:any;
  setTheme:any;
}
type Props = {
  children: React.ReactNode; 
}
export const ThemeContext = React.createContext<null | ThemeContextType>(null);

export const ThemeContextProvider = ({children}:Props) =>{
  const [theme,setTheme] = React.useState("light")

  return (
    <ThemeContext.Provider value={{
        theme,
        setTheme,
        
    }}>{children}</ThemeContext.Provider>
)
}
export const useThemeContext = () => {
  const themeContext = React.useContext(ThemeContext);
  if(!themeContext) throw new Error ("Is not inside a Provider");

  return themeContext;
}