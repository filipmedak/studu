import React, { useContext, useEffect } from 'react'
import Todo from './Todo'
import AppContext from '../../context/app-context'

const TodoList = () => {
    const { todos, dispatch } = useContext(AppContext)
    
    const url = window.location.pathname.slice(1)

    useEffect(() => {
        let todos = JSON.parse(localStorage.getItem(url))

        if(todos){
            dispatch({ type: 'POPULATE_TODOS', todos})
        } else{
            todos = []
            dispatch({ type: 'POPULATE_TODOS', todos})
        }

        // eslint-disable-next-line
    }, [ url ])

    useEffect(() => {
        localStorage.setItem(url, JSON.stringify(todos))
        // eslint-disable-next-line
    }, [todos])

    return todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
    ))
}

export { TodoList as default }