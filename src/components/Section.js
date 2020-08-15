// React Components
import React, { useContext } from 'react'
// Custom Components
import AddTodoForm from './Todos/AddTodoForm'
import Filter from './Todos/Filter'
import TodoList from './Todos/TodoList'
// Logic Components
import AppContext from '../context/app-context'
import useUpdateUrl from '../hooks/useUpdateUrl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Section = () => {
    // Global variables grabbed and defined from Context Hook
    const { addBtn, toggleAddBtn } = useContext(AppContext)
    // Section naming logic
    const url = useUpdateUrl()
    const sectionName = url.charAt(0).toUpperCase() + url.slice(1)

    return (
        <>
            <div id="section_body">
                <h2 className="_section_title">
                    <FontAwesomeIcon icon="star" className="_star_icon" />
                    {sectionName}
                </h2>
                {/* Add Todo toggle logic & Conditional rendering */}
                <button className="_section_button" onClick={ () => { toggleAddBtn(!addBtn) }}>+</button>
            </div>

            <div id="filter_body">
                <Filter />
            </div>
            
            <div id="todos_body">
                { addBtn && <AddTodoForm />}
                {/* Todo list render */}
                <TodoList url={ url }/>
            </div>
        </>
    )
}

export { Section as default }