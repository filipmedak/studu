// React Components
import React, { useContext, useEffect } from 'react'
// Custom Components
import Todo from './Todo'
// Logic Components
import AppContext from '../../context/app-context'

const TodoList = ({ url }) => {
    const { todos, dispatch } = useContext(AppContext)

    // Grab array of objects from localStorage and save it in todo global variable - if exist render
    // Hook that runs only once on page load
    useEffect(() => {
        let todos = JSON.parse(localStorage.getItem('todos'))

        if(todos){
            dispatch({ type: 'POPULATE_TODOS', todos })
        }
    // eslint-disable-next-line
    }, [])

    // Push updated todos array in localStorage
    // Hook that runs every time on todo array change
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [ todos ])

    // Filtering logic that seperates ongoing/finished todos & renders depending on current url
    const filteredTodos = todos.filter((todo) => {
        if(todo.type === url && !todo.finished){
            return todo
        } else if (url === 'finished' && todo.finished){
            return todo
        } else{
            return false
        }
    })
 
    // Conditional rendering depending on todo array length
    // Repeating React components require unique identificators (key value)
    return (
        filteredTodos.length > 0 
        ?   filteredTodos.map((todo) => {
                return <Todo key={todo.id} todo={todo} url={url}/>
            })
        :   <p>No todos. Please add one.</p>
    )
}

export { TodoList as default }