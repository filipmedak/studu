import React, { useContext, useState } from 'react'
import AppContext from '../../context/app-context'
import { v4 as uuidv4 } from 'uuid'

const AddTodoForm = () => {
    const { dispatch } = useContext(AppContext)
    const [id, setId] = useState(uuidv4())
    const [title, setTitle] = useState('')
    const [todoType, setType] = useState('')
    const [course, setCourse] = useState('')
    const [date, setDate] = useState('')
    const [finished, setFinished] = useState(false)
    

    const addTodo = (e) => {
        e.preventDefault()     
        dispatch({
            type: 'ADD_TODO',
            id,
            title,
            todoType,
            course,
            date,
            finished
        })
        setId('')
        setTitle('')    
        setType('')
        setCourse('')
        setDate('')
        setFinished('')
    }

    return (
        <div>
            <form onSubmit={addTodo}>
                <input value={title} onChange={ (e) => setTitle(e.target.value) }></input>
                <select value={todoType} onChange={ (e) => setType(e.target.value) } >
                    <option value="" hidden>Select Task Type</option>
                    <option value="important">important</option>
                    <option value="homework">homework</option>
                    <option value="notes">notes</option>
                </select>
                <select value={course} onChange={ (e) => setCourse(e.target.value) }>
                    <option value="" hidden>Select Class</option>
                    <option value="Web Development">Web Development</option>
                    <option value="PHP Programming">PHP Programming</option>
                    <option value="Internet Marketing">Internet Marketing</option>
                </select>
                <input type="date" value={date} onChange={ (e) => setDate(e.target.value) }></input> 
                <button disabled={ title.length < 1 || course.length < 1 || todoType.length < 1 }>Add Todo</button>
            </form>
        </div>
    )
}

export { AddTodoForm as default }