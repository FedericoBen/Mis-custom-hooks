import { useState } from "react"


export const useForm = (initialState={}) => {

    //El value es el que va a contener los diferentes atributos del objeto y cada atributo 
    //debe apuntar a al name correspondiente de input al que se va a queres captar
    const [values, setValues] = useState(initialState);

    //Funcion para reiniciar los valores del objeto
    const reset = () =>{
        setValues(initialState)
    }

    //Funcion para detectar los cambios generados en el input en el que se esta escribiendo
    const handleInputChange =({target})=>{
        setValues({
            ...values,
            [target.name]:target.value
        })
    }

    return [values, handleInputChange, reset];
  
}
