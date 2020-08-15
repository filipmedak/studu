// React Components
import React from 'react'
import { Link } from 'react-router-dom'
// FontAwesome Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Images
import logo from '../img/algebra_white_logo.png'

const Footer = () => {
    return (
        <div id="footer_body">
            <img src={logo} className="_algebra_white_logo" alt="Logo" />
            <Link 
                to="/settings">
                <FontAwesomeIcon icon="ellipsis-v" className="_ellipsis_v_icon" />
            </Link>
        </div>
    )
}

export { Footer as default }