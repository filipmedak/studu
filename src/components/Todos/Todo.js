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
    const { editBtn } = useContext(AppContext)
    // Local variable manipulated by useState & setState hooks
    const [ settingsBtn, changeSettingsBtn ] = useState(false)
    
    return (
        <>
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
        </>
    )
}

export { Todo as default }