// React Components
import React, { useContext } from 'react'
// Custom Components
import AddTodoForm from './AddTodoForm'
// Logic Components
import AppContext from '../../context/app-context'
// FontAwesome Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TodoSettings = ({ todo, url, changeSettingsBtn }) => {
    const { dispatch, editBtn, toggleEditBtn } = useContext(AppContext)

    return (
        <>
            {/* Nested conditional rendering depending if todo is new or existing (create or edit) */}
            { url !== 'finished' 
                ?   <div className="_todo_settings">
                        { editBtn 
                            ?   <AddTodoForm todo={todo} changeSettingsBtn={changeSettingsBtn}/>
                            :   <>
                                    {/* Props sent upwards to reducer (id) to find todo by id when mapping return value */}
                                    <button 
                                        className="_todo_finish_btn"
                                        onClick={ () => dispatch({ type: 'TOGGLE_TODO', id: todo.id, finished: todo.finished })}>
                                        <FontAwesomeIcon icon="check" className="_check_icon" />
                                        Finish
                                    </button>

                                    <button 
                                        className="_todo_edit_btn"
                                        onClick={ () => { toggleEditBtn(!editBtn) } }>
                                        <FontAwesomeIcon icon="edit" className="_edit_icon" />
                                        Edit
                                    </button>

                                    <button 
                                        className="_todo_remove_btn"
                                        onClick={ () => dispatch({ type: 'REMOVE_TODO', id: todo.id}) }>
                                        <FontAwesomeIcon icon="trash-alt" className="_trash_alt_icon" />
                                        Remove
                                    </button>
                                </>
                        }
                    </div>
                :   <div className="_todo_toggle">   
                        <button
                            className="_todo_return_btn" 
                            onClick={ () => dispatch({ type: 'TOGGLE_TODO', id: todo.id, finished: todo.finished })}>
                            <FontAwesomeIcon icon="undo-alt" className="_undo_alt_icon" />
                            Return
                        </button>
                        
                        <button 
                            className="_todo_delete_btn" 
                            onClick={ () => dispatch({ type: 'REMOVE_TODO', id: todo.id}) }>
                            <FontAwesomeIcon icon="trash-alt" className="_trash_alt_icon" />
                            Remove
                        </button>
                    </div> 
            }
        </>
    )
}

export { TodoSettings as default }