export const todoReducer = ( initialState = [], action ) => {

    switch (action.type) {
        case '[TODO] Add Todo': //recibimos el payload 
            return [ ...initialState, action.payload ]
            
        case '[TODO] Delete Todo':
            return initialState.filter( todo => todo.id  !== action.payload)

        case '[TODO] Todo Done':
            return initialState.map(todo => {
                
                if(todo.id === action.payload){
                    return {
                        
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo;
            }) 

        default: //caso contrario mandamos el estado inicial
            return initialState 
    }

}

/**
 *            throw new Error('Action.type = ABC no esta implementada')//esto se ocupa cuando todavia no tenemos implementada nuestra accion
 
 */