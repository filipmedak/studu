// React Components
import React, { useState, useContext } from 'react'
// Logic Components
import AppContext from '../../../context/app-context'

const Username = ({ setUsernameBtn }) => {
    const { user, userDispatch } = useContext(AppContext)
    const [ name, setName ] = useState(user.name)

    // Function that runs on form submit and sends new data to reducer
    const changeUsername = (e) => {
        e.preventDefault()
        userDispatch({ type: 'CHANGE_USERNAME', name})
        setName('')
        setUsernameBtn(false)
    }
 
    return (
        <div>
            <form onSubmit={changeUsername}>
                <input value={name} onChange={ (e) => setName(e.target.value) }/>
                <button>Change.</button>
            </form>
        </div>
    )
}

export { Username as default }