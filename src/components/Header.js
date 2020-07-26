import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <p>Studo-App</p>
            <NavLink to="/" activeClassName="is-active" exact={true}>Important</NavLink> <br/>
            <NavLink to="/homework" activeClassName="is-active">Homework Todos</NavLink> <br/>
            <NavLink to="/notes" activeClassName="is-active">Notes Todos</NavLink> <br/>
            <NavLink to="/finished" activeClassName="is-active">Finished Todos</NavLink> <br/>
            <NavLink to="/settings" activeClassName="is-active">Settings</NavLink>
        </div>
    )
}

export { Header as default }