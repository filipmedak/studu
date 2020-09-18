// React Components
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
// Logic Components
import AppContext from '../context/app-context'
// FontAwesome Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Images
import logo from '../img/algebra_white_logo.png'

const Footer = () => {
    const { isMobile } = useContext(AppContext)

    return (
        <div id="footer_body">
            {/* Mobile only logo */}
            <Link to="/" className="_mobile_only_logo focus-in-expand">
                <img src={logo} className="_algebra_white_logo" alt="Logo" />
            </Link>
            <Link 
                to="/settings"
                className="focus-in-expand"
            >
                {
                    /* Logo depending on app version (mobile/desktop) */
                    isMobile 
                    ? <FontAwesomeIcon icon="ellipsis-v" className="_ellipsis_v_icon" />
                    : <FontAwesomeIcon icon="cog" className="_cog_icon" />
                }
                <span className="_footer_settings_text">Settings</span>
            </Link>
        </div>
    )
}

export { Footer as default }