import React, {useContext} from 'react'
// Logic Components
import AppContext from '../context/app-context'
import useUpdateUrl from '../hooks/useUpdateUrl'

const Modal = ({todo}) => {
    const { toggleModal, dispatch } = useContext(AppContext)
    const url = useUpdateUrl()

    // Modal for double-checking if user is sure in their actions
    return (
        <div 
            className="_modal_background"
            onClick={ () => {toggleModal(false)}}
        >
            <div className="_modal_content">
                <p className="_modal_p">Are you sure?</p>
                <button 
                    className="_modal_yes_btn"
                    onClick={ () => {
                        toggleModal(false)
                        url === 'settings' ? dispatch({ type: 'DELETE_FINISHED'}) : dispatch({ type: 'REMOVE_TODO', id: todo.id})}}>
                        Yes
                </button>
                <button 
                    className="_modal_no_btn"
                    onClick={ () => {toggleModal(false)}}>
                    No
                </button>
            </div>
        </div>
    )
}

export {Modal as default}