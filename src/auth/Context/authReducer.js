import { types } from "../types/types"



export const authReducer = (state = {}, action) => {
switch(action.type){
 
case types.Login:
    return {
        ...state,
        Logged:true,
        user:action.payload
    }

case types.LogOut:
    return {
logged:false

    }

    default:
       return state

}

 
}
