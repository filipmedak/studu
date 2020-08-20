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
    const { addBtn, toggleAddBtn, todos } = useContext(AppContext)
    // Section naming logic
    let url = useUpdateUrl()
    const sectionName = url.charAt(0).toUpperCase() + url.slice(1)
    // Number of todos on active section
    let todosNum = todos.filter((todo) => {
        if(url !== 'finished'){
            return todo.type === url && !todo.finished
        } else {
            return todo.finished
        }
    })
    const num = todosNum.length

    return (
        <>
            <div id="section_body" className={url}>
                <h2 className="_section_title">
                    {/* Dynamic logo rendering depending on active section */}
                    {(() => {
    
                        switch (url) {
                        case 'important':
                            return (
                                <><FontAwesomeIcon icon={['fas', 'star']} className="_star_icon" /></>
                            )
                        case 'homework':
                            return (
                                <><FontAwesomeIcon icon={['fas', 'clipboard']} className="_star_icon" /></>
                            )
                        case 'notes':
                            return (
                                <><FontAwesomeIcon icon={['fas', 'sticky-note']} className="_star_icon" /></>
                            )
                        case 'finished':
                            return (
                                <><FontAwesomeIcon icon={['fas', 'calendar-check']} className="_star_icon" /></>
                            )
                        default:
                            return (
                                <>Error: Invalid logo.</>
                            )
                        }
            
                    })()}
                    {sectionName} 
                    <span className="_section_number">({num})</span>
                </h2>
                {/* Add Todo toggle logic & Conditional rendering */}
                <FontAwesomeIcon onClick={ () => { toggleAddBtn(!addBtn) }} icon={['fas', 'plus-square']} className="_plus_square_icon" />
            </div>

            <div id="filter_body" className={url}>
                <Filter url={url} />
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