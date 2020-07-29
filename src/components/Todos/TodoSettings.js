import React, { useContext } from 'react'
import AppContext from '../../context/app-context'

const TodoSettings = ({ todo, url }) => {
    const { dispatch } = useContext(AppContext)

    return (
        <div>
            {url !== 'finished' 
                ?   <div>
                        <button onClick={ () => dispatch({ type: 'TOGGLE_TODO', id: todo.id, finished: todo.finished })}>Finish</button>
                        <button>Edit</button>
                        <button onClick={ () => dispatch({ type: 'REMOVE_TODO', id: todo.id}) }>Remove</button>
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