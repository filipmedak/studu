import React from 'react'

const Todo = ({ todo }) => {
    return (
        <div>
            <h3>{todo.title}</h3>
            <p>{todo.class}</p>
            <p>{todo.date}</p>
        </div>
    )
}

export { Todo as default }