import { useState } from "react"

//hook creado
export const useCounter = (initialValue = 10) => {
 
    const [counter, setCounter] = useState(initialValue)


    ///ponermos value para poder mandar un valor en el cual se quiere sumar o restar en 2 n 2 o mas ahora, aqui estamos pasando un valor
    /**para que funcione en nuestro hook del otro lado del componente hay que recibir ese valor  */
    const increment = (value =1) => {
        setCounter(counter + value);
    }

    const decrement = (value =1) => {
        
       // if(counter == 0) return //si counter es igual a cero que ahi se quede que ya no siga -1 etc

        setCounter(counter - value);
        //setCounter(counter -1);
    }

    const reset = () => {
        setCounter(initialValue);
    }


    return { //retornamos un objeto con la info que queremos mandar
        counter: counter,
        increment,
        decrement,
        reset
    }

}
