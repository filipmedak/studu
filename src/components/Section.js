// React Components
import React, { useContext } from 'react'
// Custom Components
import AddTodoForm from './Todos/AddTodoForm'
import TodoList from './Todos/TodoList'
// Logic Components
import AppContext from '../context/app-context'
import useUpdateUrl from '../hooks/useUpdateUrl'

const Section = () => {
    // Global variables grabbed and defined from Context Hook
    const { addBtn, toggleAddBtn } = useContext(AppContext)
    // Section naming logic
    const url = useUpdateUrl()
    const nameCapitalized = url.charAt(0).toUpperCase() + url.slice(1)

    return (
        <div>
            <p>{nameCapitalized}</p>
            {/* Add Todo toggle logic & Conditional rendering */}
            <button onClick={ () => { toggleAddBtn(!addBtn) }}>+</button>
            <div>
                { addBtn && <AddTodoForm />}
            </div>
            {/* Todo list render */}
            <TodoList url={ url }/>
        </div>
    )
}

export { Section as default }