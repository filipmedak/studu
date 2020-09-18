// React Components
import React, { useContext, useState } from 'react'
// Custom Components
import Username from './Username'
import UserForm from '../../UserForm'
// Logic Components
import AppContext from '../../../context/app-context'
// Fontawesome Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Modal
import Modal from '../../Modal'

const Account = () => {
    const { modal, toggleModal } = useContext(AppContext)
    const [ usernameBtn, setUsernameBtn ] = useState(false)
    const [ programBtn, setProgramBtn ] = useState(false)

    return (
        <>
            <div className="_settings_username_body fade-in-top">
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

            <div className="_settings_program_body fade-in-top">
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
            
            {/* Modal activated on delete all todos */}
            {modal && <Modal />}

            {/* Delete finished todos component */}
            <div className="_settings_finished_body fade-in-top">
                <button 
                    onClick={ () => { toggleModal(!modal) }}
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