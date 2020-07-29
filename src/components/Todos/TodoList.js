import React, { useContext, useEffect } from 'react'
import Todo from './Todo'
import AppContext from '../../context/app-context'

const TodoList = ({ url }) => {
    const { todos, dispatch } = useContext(AppContext)

    useEffect(() => {
        let todos = JSON.parse(localStorage.getItem('todos'))

        if(todos){
            dispatch({ type: 'POPULATE_TODOS', todos })
        }
    // eslint-disable-next-line
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [ todos ])

    // eslint-disable-next-line
    const filteredTodos = todos.filter((todo) => {
        if(todo.type === url && todo.finished === false){
            return todo
        } else if (url === 'finished' && todo.finished === true){
            return todo
        }
    })

    if(filteredTodos.length > 0){
        return filteredTodos.map((todo) => {
            return <Todo key={todo.id} todo={todo} url={url}/>
        })
    } else{
        return <p>No todos. Please add one.</p>
    }    
}

export { TodoList as default }