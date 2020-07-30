import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <p>Studu</p>
            {/* React-Router linking || CSS class on active link */}
            <NavLink 
                to="/" activeClassName="is-active" 
                exact={true}>
                Important
            </NavLink> 
            <NavLink 
                to="/homework" 
                activeClassName="is-active">
                Homework
            </NavLink>
            <NavLink 
                to="/notes" 
                activeClassName="is-active">
                Notes
            </NavLink>
            <NavLink 
                to="/finished" 
                activeClassName="is-active">
                Finished
            </NavLink>
            <NavLink 
                to="/settings" 
                activeClassName="is-active">
                Settings
            </NavLink>
        </div>
    )
}

export { Header as default }