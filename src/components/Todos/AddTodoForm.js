// React Components
import React, { useContext, useState } from 'react'
// Logic Components
import AppContext from '../../context/app-context'
import MapSelect from '../../hooks/MapSelect'
import { v4 as uuidv4 } from 'uuid'

const AddTodoForm = ({ todo }) => {
    const { dispatch, addBtn, toggleAddBtn, editBtn, toggleEditBtn, classes } = useContext(AppContext)
    // Local variables for seperate todo information -- Variables are filled if todo exists (editing todos)
    const [id, setId] = useState( todo ? todo.id : uuidv4())
    const [title, setTitle] = useState( todo ? todo.title : '' )
    const [todoType, setType] = useState( todo ? todo.type : '' )
    const [course, setCourse] = useState( todo ? todo.course : '' )
    const [date, setDate] = useState('')
    const [finished, setFinished] = useState(false)

    // Add Todo function (reducer references)
    const addTodo = (e) => {
        // Prevent page reload on form submit
        e.preventDefault()   

        // If edit button is clicked - update existing todo, else create new
        if(editBtn){
            dispatch({
                type: 'EDIT_TODO',
                id, title, todoType, course, date, finished
            })
        } else{
            dispatch({
                type: 'ADD_TODO',
                id, title, todoType, course, date, finished
            })
        }

        // Reset form values to default
        setId('')
        setTitle('')    
        setType('')
        setCourse('')
        setDate('')
        setFinished('')
        // Close Add Todo form after submit
        addBtn ? toggleAddBtn(!addBtn) : toggleEditBtn(!editBtn)
    }

    return (
        <div>
            {/* On input values change, local variables are updated */}
            <form onSubmit={addTodo}>
                {/* todo Title input */}
                <input value={title} onChange={ (e) => setTitle(e.target.value) } />
                
                {/* todo Type input */}
                <select value={todoType} onChange={ (e) => setType(e.target.value) }>
                    <option value="" hidden>Select Task Type</option>
                    <option value="important">Important</option>
                    <option value="homework">Homework</option>
                    <option value="notes">Notes</option>
                </select>

                {/* todo Class input */}
                <select value={course} onChange={ (e) => setCourse(e.target.value) }>
                    <option value="" hidden>Select Class</option>
                    { MapSelect(classes) }
                </select>

                {/* todo Date input */}
                <input 
                    type="date" 
                    value={date} 
                    onChange={ (e) => setDate(e.target.value) }
                /> 

                {/* Submit button is disabled if title, type & course aren't selected */}
                <button
                    disabled={ title.length < 1 || course.length < 1 || todoType.length < 1 } >
                    Add Todo
                </button>

                {/* Logic that removes form component (either edit or add) */}
                <button 
                    type="button" 
                    onClick={ () => { addBtn ? toggleAddBtn(!addBtn) : toggleEditBtn(!editBtn)} }>
                    Cancel
                </button>
            </form>
        </div>
    )
}

export { AddTodoForm as default }