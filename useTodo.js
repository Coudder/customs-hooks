import React, { useEffect, useReducer } from 'react'
import { todoReducer } from '../08-useReducer/todoReducer';

//creamos nuestro custom hook

const initialState = []

const init =  () => { //se utliza init para tener un inical y se guarden en e localstorgage
    return JSON.parse(localStorage.getItem('todos')) || [] ; //si es nulo regresa un arreglo vacio
}


export const useTodo = () => {

    //aqui importamos nuestro todoreducer que es nuestro reducer solo se pasa la refrencia a la funcion 
    const [todos, dispatch] = useReducer(todoReducer, initialState, init)

    useEffect(() => {
      localStorage.setItem('todos',JSON.stringify(todos)); //para guardar en el localstorgae usameos el useEffect
    }, [todos])
    

    const handleNewTodo =(todo)=>{
        //este es eñ payload que quiero enviar la nueva tarea
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        //para enviar la funcio al reducer usamos el dispartch
        dispatch( action );
        //console.log({todo});
    }

    const handleDeleteTodo = (id) => {
      //  console.log(id);
       dispatch({
         type: '[TODO] Delete Todo',
         payload: id
        }) 
    }


    const handleToggleTodo = (id) => {
        //console.log(id);
        dispatch({
            type: '[TODO] Todo Done',
            payload: id
           }) 
    }

   

    return {
        todos,
        todosCount: todos.length, //para saber cuantas tareas tenemos
        pendingTodosCount: todos.filter(todo =>!todo.done).length ,//cuantas tareas tenemos pendientes
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    }

    



}
