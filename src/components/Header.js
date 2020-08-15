// React Components
import React from 'react'
import { NavLink } from 'react-router-dom'
// FontAwesome Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
    return (
        <div id="header_body">
            {/* React-Router linking || CSS class on active link */}
            <NavLink 
                to="/important" 
                activeClassName="is-active" 
                exact={true}>
                <FontAwesomeIcon icon="star" className="_star_icon" />
            </NavLink> 
            <NavLink 
                to="/homework" 
                activeClassName="is-active">
                <FontAwesomeIcon icon="book" className="_book_icon" />
            </NavLink>
            <NavLink 
                to="/notes" 
                activeClassName="is-active">
                <FontAwesomeIcon icon="sticky-note" className="_sticky_note_icon" />
            </NavLink>
            <NavLink 
                to="/finished" 
                activeClassName="is-active">
                <FontAwesomeIcon icon="folder-minus" className="_folder_minus_icon" />
            </NavLink>
        </div>
    )
}

export { Header as default }