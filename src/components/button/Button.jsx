import { useContext } from "react"
import { ThemeContext } from "../contexts/theme-context"
import "./button.css"

export const Button = (props)=>{

    const {theme} = useContext(ThemeContext)

    return(
        <button {...props} 
        style={{color:theme.color, backgroundColor: theme.background}}/>
    )
}