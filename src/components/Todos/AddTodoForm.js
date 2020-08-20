// React Components
import React, { useContext, useState } from 'react'
// Logic Components
import AppContext from '../../context/app-context'
import MapSelect from '../../hooks/MapSelect'
import { v4 as uuidv4 } from 'uuid'
// FontAwesome Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AddTodoForm = ({ todo, settingsBtn, changeSettingsBtn }) => {
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
        <div className="_todos_add">
            {/* On input values change, local variables are updated */}
            <form onSubmit={addTodo}>
                {/* todo Title input */}
                <input 
                    value={title} 
                    placeholder="Create a description.."
                    className="_todo_add_input"
                    onChange={ (e) => setTitle(e.target.value) } 
                />
                
                {/* todo Type input */}
                <div className="_todo_grid_column _todo_type_input">
                    <FontAwesomeIcon icon={['far', 'bookmark']} className="_bookmark_icon" />
                    <select 
                        value={todoType} 
                        className={todoType ? "_spec_form_item" : "_spec_form_item _empty_item"}
                        onChange={ (e) => setType(e.target.value) }
                    >
                        <option value="" hidden>Select Task Type</option>
                        <option value="important">Important</option>
                        <option value="homework">Homework</option>
                        <option value="notes">Notes</option>
                    </select>
                </div>
                
                {/* todo Class input */}
                <div className="_todo_grid_column _todo_class_input">
                    <FontAwesomeIcon icon="question" className="_question_icon" />
                    <select 
                        value={course} 
                        className={course ? "_spec_form_item" : "_spec_form_item _empty_item"}
                        onChange={ (e) => setCourse(e.target.value) }
                    >
                        <option value="" hidden>Select Class</option>
                        { MapSelect(classes) }
                    </select>
                </div>

                {/* todo Date input */}
                <div className="_todo_grid_column _todo_date_input">
                    <FontAwesomeIcon icon={['far', 'calendar-alt']} className="_calendar_alt_icon" />
                    <input 
                        type="date" 
                        value={date} 
                        className={date ? "_spec_form_item" : "_spec_form_item _empty_item"}
                        onChange={ (e) => setDate(e.target.value) }
                    /> 
                </div>

                {/* Submit button is disabled if title, type & course aren't selected */}
                <button
                    className="_todo_add_btn"
                    disabled={ title.length < 1 || course.length < 1 || todoType.length < 1 } 
                >
                    <FontAwesomeIcon icon="check" className="_check_icon" />
                    { addBtn ? "Add" : "Update" }
                </button>

                {/* Logic that removes form component (either edit or add) */}
                <button 
                    type="button" 
                    className="_todo_cancel_btn"
                    onClick={ () => { 
                        addBtn ? toggleAddBtn(!addBtn) : toggleEditBtn(!editBtn)
                        settingsBtn && changeSettingsBtn(false)
                }}>
                    <FontAwesomeIcon icon="times" className="_times_icon" />
                    Cancel
                </button>
            </form>
        </div>
    )
}

export { AddTodoForm as default }