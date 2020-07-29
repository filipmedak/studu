import React, { useState } from 'react'
import TodoSettings from './TodoSettings'

const Todo = ({ todo, url }) => {
    const [settingsBtn, changeSettingsBtn ] = useState(false)

    return (
        <>
            <div className="todo" onClick={ e => changeSettingsBtn(!settingsBtn) }>
                <h3>{todo.title}</h3>
                <p>{todo.course}</p>
                <p>{todo.date}</p>
            </div>
            <div>
                { settingsBtn && <TodoSettings todo={todo} url={url}/> }
            </div>
        </>
    )
}

export { Todo as default }