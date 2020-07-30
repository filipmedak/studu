// React Components
import React, { useState, useContext } from 'react'
// Custom Components
import TodoSettings from './TodoSettings'
// Logic Components
import AppContext from '../../context/app-context'

// Variables passed through as props
const Todo = ({ todo, url }) => {
    const { editBtn } = useContext(AppContext)
    // Local variable manipulated by useState & setState hooks
    const [ settingsBtn, changeSettingsBtn ] = useState(false)
    
    return (
        <>
            {/* Logic for hiding todos that are being edited */}  
            { !editBtn &&
                <div className="todo" onClick={ e => changeSettingsBtn(!settingsBtn) }>
                    <h3>{todo.title}</h3>
                    <p>{todo.course}</p>
                    <p>{todo.date}</p>
                </div>
            }
            {/* Logic for displaying / hiding todo settings coponent */}  
            <div>
                { settingsBtn && <TodoSettings todo={todo} url={url}/> }
            </div>
        </>
    )
}

export { Todo as default }