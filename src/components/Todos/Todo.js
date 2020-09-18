// React Components
import React, { useState, useContext } from 'react'
// Custom Components
import TodoSettings from './TodoSettings'
// Logic Components
import AppContext from '../../context/app-context'
// FontAwesome Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Variables passed through as props
const Todo = ({ todo, url }) => {
    const { editBtn, toggleEditBtn } = useContext(AppContext)
    // Local variable manipulated by useState & setState hooks
    const [ settingsBtn, changeSettingsBtn ] = useState(false)
    // eslint-disable-next-line
    const [ isHover, toggleHover ] = useState(false)

    // Setup classes on mouse enter
    const addClass = (e) => {
        const elems = document.querySelectorAll('._todo_body')
        elems.forEach((elem) => {
            elem.classList.add("_todo_toned_down")
        })
        e.target.classList.remove("_todo_toned_down")
    }

     // Reset all classes on mouse leave
     const resetClasses = (e) => {
        const elems = document.querySelectorAll('._todo_body')
        elems.forEach((elem) => {
            elem.classList.remove("_todo_toned_down")
        })
    }
    
    return (
        <div className="_todo fade-in"
            onMouseEnter={ e => {
                addClass(e)
                toggleHover(true)
            }}
            onMouseLeave={ e => {
                resetClasses(e)
                toggleHover(false)
                if(!editBtn) {
                    changeSettingsBtn(false)
                    toggleEditBtn(false)
                }
            }}
        >
            {/* Logic for hiding todos that are being edited */}  
            { !editBtn &&
                <div 
                    className="_todo_body"  
                    onClick={ e => changeSettingsBtn(!settingsBtn) }
                >
                    <h3>
                        {
                            settingsBtn
                            ? <FontAwesomeIcon icon={['fas', 'circle']} className="_circle_icon"/>
                            : <FontAwesomeIcon icon={['far', 'circle']} className="_circle_icon"/>
                        }
                        {todo.title}
                    </h3>

                    <p className="_todo_details _todo_date">
                        { todo.date && <FontAwesomeIcon icon={['far', 'calendar-alt']} className="_calendar_alt_icon" /> }
                        {todo.date}
                    </p>

                    <p className="_todo_details _todo_class">
                        <FontAwesomeIcon icon={['far', 'bookmark']} className="_bookmark_icon" />
                        {todo.course}
                    </p>
                </div>
            }
            {/* Logic for displaying / hiding todo settings coponent */}  
            <>
                { settingsBtn && <TodoSettings todo={todo} url={url} settingsBtn={settingsBtn} changeSettingsBtn={changeSettingsBtn}/> }
            </>
        </div>
    )
}

export { Todo as default }