import { useContext } from "react"
import { AuthContext } from "../auth"
import { Navigate } from "react-router-dom"


export const PublicRouter = ({children}) => {
 const {Logged} = useContext(AuthContext)

 
    return (Logged)? <Navigate to="Dc"/> :children
}

