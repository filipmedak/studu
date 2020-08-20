// React Components
import React, { useContext } from 'react'
// Logic Components
import AppContext from '../../../context/app-context'
// FontAwesome Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Apperance = () => {
    const { userDispatch, darkMode, toggleDarkMode } = useContext(AppContext)

    return (
        <div className="_settings_theme_body">
            <button onClick={() => {
                toggleDarkMode(!darkMode)
                userDispatch({
                    type: 'CHANGE_THEME',
                    darkMode
                }) 
            }}>
                <FontAwesomeIcon icon={['fas', 'adjust']} className="_adjust_icon" />
                Theme
            </button>
        </div>
    )
}

export { Apperance as default }