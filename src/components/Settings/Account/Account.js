// React Components
import React, { useContext, useState } from 'react'
// Custom Components
import Username from './Username'
import UserForm from '../../UserForm'
// Logic Components
import AppContext from '../../../context/app-context'
// Fontawesome Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Account = () => {
    const { dispatch } = useContext(AppContext)
    const [ usernameBtn, setUsernameBtn ] = useState(false)
    const [ programBtn, setProgramBtn ] = useState(false)

    return (
        <>
            <div className="_settings_username_body">
                {/* Change username section toggle */}
                <button 
                    onClick={ () => setUsernameBtn(!usernameBtn) }
                    className="_settings_theme_main_btn"
                >
                    <FontAwesomeIcon icon={['fas', 'edit']} className="_edit_icon" />
                    Change username
                </button>
                {
                    usernameBtn && <Username setUsernameBtn={setUsernameBtn}/>
                }
            </div>

            <div className="_settings_program_body">
                {/* Change program section toggle */}
                <button 
                    onClick={ () => setProgramBtn(!programBtn) }
                    className="_settings_theme_main_btn"
                >
                    <FontAwesomeIcon icon={['fas', 'exchange-alt']} className="_exchange_alt_icon" />
                    Change program
                </button>
                {
                    programBtn && <UserForm setProgramBtn={setProgramBtn}/>
                }
            </div>
            
            <div className="_settings_finished_body">
                <button 
                    onClick={ (e) => {
                        window.confirm("Are you sure you want to delete all finished tasks?") 
                        && dispatch({ type: 'DELETE_FINISHED'})} }
                    className="_settings_theme_main_btn"
                >
                    <FontAwesomeIcon icon={['fas', 'trash-alt']} className="_trash_alt_icon" />
                    Delete finished tasks
                </button>
            </div>
        </>
    )
}

export { Account as default }