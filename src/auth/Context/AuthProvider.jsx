import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { types } from "../types/types"

// const initialState = {
//     Logged:false
// }

const init = () => {

const user = JSON.parse(localStorage.getItem('user'))

return{
  Logged: !!user, // !!user quiere decir que si existe usuario, osea que retorna true o false
  user:user
}
}

export const AuthProvider = ({children}) => {

const [ authState ,dispatch] = useReducer(authReducer,{}, init)



const login = (name="" ) => {

const user = { id:"abc", name }

const action = {type: types.Login, payload: user}
localStorage.setItem('user',JSON.stringify(user))
dispatch(action)
}


const logOut = () => {

localStorage.removeItem('user')

const action = {
  type: types.LogOut
}

dispatch(action)



}
    
  return (
  <AuthContext.Provider value={{
    ...authState,
    login:login,
    logOut
  }}>
{children}
</AuthContext.Provider>

  )
}
