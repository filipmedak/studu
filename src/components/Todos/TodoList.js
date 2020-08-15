// React Components
import React, { useContext } from 'react'
// Custom Components
import Todo from './Todo'
// Logic Components
import AppContext from '../../context/app-context'

const TodoList = ({ url }) => {
    const { todos, filterClass } = useContext(AppContext)

    // Filtering logic that seperates ongoing/finished todos & renders depending on current url and class if it's set
    const filteredTodos = todos.filter((todo) => {
        // Return todo only if type is same as url path, isn't finished and class matches the one from class filter
        if(todo.type === url && !todo.finished && (filterClass && filterClass !== '' ? todo.course === filterClass : true)){
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
        :   <p className="_empty_todos">No todos. Please add one.</p>
    )
}

export { TodoList as default }