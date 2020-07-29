import React, { useState } from 'react'
import TodoList from '../Todos/TodoList'
import useUpdateUrl from '../../hooks/useUpdateUrl'
import AddTodoForm from '../Todos/AddTodoForm'

const Section = () => {
    const url = useUpdateUrl()
    const nameCapitalized = url.charAt(0).toUpperCase() + url.slice(1)
    const [addBtn, changeAddBtn ] = useState(false)

    return (
        <div>
            <p>{nameCapitalized}</p>
            <button onClick={() => { changeAddBtn(!addBtn) }}>+</button>
            <div>
                { addBtn && <AddTodoForm />}
            </div>
            <TodoList url={url}/>
        </div>
    )
}

export { Section as default }