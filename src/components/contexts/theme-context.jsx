import { createContext, useState } from "react";

export const themes = {
    light:{
        color:'#2b2c30',
        background:'#ede3fb'
    },
    dark:{
        color:'#ede3fb',
        background:'#2b2c30'
    }
}

export const ThemeContext = createContext()

export const ThemeProvider = (props)=>{

    const [theme, setTheme] = useState(themes.light)

    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}