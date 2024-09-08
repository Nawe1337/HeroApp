import { useContext } from "react"
import { AuthContext } from "../auth"
import { Navigate, useLocation } from "react-router-dom"


export const PrivateRoute = ({children}) => {
  
    const {pathname,search} = useLocation()
    const {Logged} = useContext(AuthContext)

    const lastPath = pathname + search

    localStorage.setItem("lastPath",lastPath)
    
  return (Logged)? children : <Navigate to="login"/>
}
