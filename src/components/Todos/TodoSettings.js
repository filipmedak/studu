// React Components
import React, { useContext } from 'react'
// Custom Components
import AddTodoForm from './AddTodoForm'
// Logic Components
import AppContext from '../../context/app-context'


const TodoSettings = ({ todo, url }) => {
    const { dispatch, editBtn, toggleEditBtn } = useContext(AppContext)

    return (
        <div>
            {/* Nested conditional rendering depending if todo is new or existing (create or edit) */}
            {url !== 'finished' 
                ?   <div>
                        { editBtn 
                            ?   <AddTodoForm todo={todo}/>
                            :   <>
                                    {/* Props sent upwards to reducer (id) to find todo by id when mapping return value */}
                                    <button onClick={ () => dispatch({ type: 'TOGGLE_TODO', id: todo.id, finished: todo.finished })}>Finish</button>
                                    <button onClick={ () => { toggleEditBtn(!editBtn) } }>Edit</button>
                                    <button onClick={ () => dispatch({ type: 'REMOVE_TODO', id: todo.id}) }>Remove</button>
                                </>
                        }
                    </div>
                :   <div>   
                        <button onClick={ () => dispatch({ type: 'TOGGLE_TODO', id: todo.id, finished: todo.finished })}>Return</button>
                        <button onClick={ () => dispatch({ type: 'REMOVE_TODO', id: todo.id}) }>Remove</button>
                    </div> 
            }
        </div>
    )
}

export { TodoSettings as default }