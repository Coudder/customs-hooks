import  { useState } from 'react'

export const useForm = (initialForm = {}) => {
    
    const [formState, setFormState] = useState(initialForm)

    

   
    const onInputChange = ({target}) =>{ //desestructuramos el evento obtenemos el target
        //console.log(target.name);
        //obtenemos lo que nos interesa del target
        const { name, value } = target
        //console.log(name,value);
        //hacemos el cambio del state
        setFormState({
            ...formState, //desestructuramos el formstate para tener todas sus propiedades
            [ name ]: value
        });
    }

    const onResetForm = () => {

        setFormState(initialForm);

    }


    return {
        ...formState, //hacer el spread del formsstate para acceder a todas sus props
        onInputChange,
        onResetForm,
    }

}
