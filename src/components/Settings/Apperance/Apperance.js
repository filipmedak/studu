// React Components
import React, { useContext } from 'react'
// Logic Components
import AppContext from '../../../context/app-context'
// FontAwesome Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Apperance = () => {
    const { userDispatch, darkMode, toggleDarkMode, user } = useContext(AppContext)

    return (
        <div className="_settings_theme_body fade-in-top">
            <button onClick={() => {
                toggleDarkMode(!darkMode)
                userDispatch({
                    type: 'CHANGE_THEME',
                    darkMode
                }) 
            }}>
                { user.darkMode 
                    ? <FontAwesomeIcon icon={['fas', 'toggle-on']} className="_toggle_on_icon" /> 
                    : <FontAwesomeIcon icon={['fas', 'toggle-off']} className="_toggle_off_icon" /> 
                }
                Theme
            </button> 
        </div>
    )
}

export { Apperance as default }