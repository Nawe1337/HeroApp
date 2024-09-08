import { useState } from "react"

export const useForm = ( initialState = {}) => {

    const [ form, setForm] = useState(initialState)

   const onImputChage = ({target}) => {
const {value, name} = target
setForm({...form,[name]:value})


}

   const onResetForm  = () =>{

    setForm(initialState)
   }

  return {
onImputChage,
onResetForm,
form,
...form

  }
}
