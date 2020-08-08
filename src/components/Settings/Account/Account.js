// React Components
import React, { useContext, useState } from 'react'
// Custom Components
import Username from './Username'
import UserForm from '../../UserForm'
// Logic Components
import AppContext from '../../../context/app-context'

const Account = () => {
    const { dispatch } = useContext(AppContext)
    const [ usernameBtn, setUsernameBtn ] = useState(false)
    const [ programBtn, setProgramBtn ] = useState(false)

    return (
        <div>
            <div>
                {/* Change username section toggle */}
                <button onClick={ () => setUsernameBtn(!usernameBtn) }>Change username</button>
                {
                    usernameBtn && <Username setUsernameBtn={setUsernameBtn}/>
                }
            </div>
            <div>
                {/* Change program section toggle */}
                <button onClick={ () => setProgramBtn(!programBtn) }>Change program</button>
                {
                    programBtn && <UserForm setProgramBtn={setProgramBtn}/>
                }
            </div>
            <button onClick={ () => dispatch({ type: 'DELETE_FINISHED'}) }>Delete finished tasks</button>
        </div>
    )
}

export { Account as default }