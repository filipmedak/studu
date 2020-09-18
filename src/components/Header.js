// React Components
import React, { useContext, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
// Logic Components
import AppContext from '../context/app-context'
// FontAwesome Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Images 
import logo from '../img/algebra_white_logo.png'

const Header = () => {
    const { addBtn, toggleAddBtn } = useContext(AppContext)
    // Toggle between far and fas logo types 
    let [logoType, setLogoType] = useState({ importantLogoType: 'far', homeworkLogoType: 'far', notesLogoType: 'far', finishedLogoType: 'far' })
    
    return (
        <div id="header_body">
            {/* Desktop only logo */}
            <Link to="/" className="_desktop_only_logo focus-in-expand">
                <img src={logo} className="_algebra_white_logo" alt="Logo" />
            </Link>
            {/* React-Router linking || CSS class on active link */}
            <NavLink 
                to="/important" 
                className="_header_item focus-in-expand"
                activeClassName="is-active-important"
                exact={true}
                onClick={() => {
                    setLogoType({importantLogoType: 'fas', homeworkLogoType: 'far', notesLogoType: 'far', finishedLogoType: 'far'})
                }}
            >
                <FontAwesomeIcon icon={[logoType.importantLogoType, 'star']} className="_star_icon" />
                <span>Important</span>
            </NavLink> 

            <NavLink 
                to="/homework" 
                className="_header_item focus-in-expand"
                activeClassName="is-active-homework"
                onClick={() => {
                    setLogoType({importantLogoType: 'far', homeworkLogoType: 'fas', notesLogoType: 'far', finishedLogoType: 'far'})
                }}
            >
                <FontAwesomeIcon icon={[logoType.homeworkLogoType, 'clipboard']} className="_clipboard_icon" />
                <span>Homework</span>
            </NavLink>

            <FontAwesomeIcon onClick={() => {toggleAddBtn(!addBtn)}} icon={['fas', 'plus-square']} className="_plus_square_icon" />

            <NavLink 
                to="/notes" 
                className="_header_item focus-in-expand"
                activeClassName="is-active-notes"
                onClick={() => {
                    setLogoType({importantLogoType: 'far', homeworkLogoType: 'far', notesLogoType: 'fas', finishedLogoType: 'far'})
                }}
            >
                <FontAwesomeIcon icon={[logoType.notesLogoType, 'sticky-note']} className="_sticky_note_icon" />
                <span>Notes</span>
            </NavLink>

            <NavLink 
                to="/finished" 
                className="_header_item focus-in-expand"
                activeClassName="is-active-finished"
                onClick={() => {
                    setLogoType({importantLogoType: 'far', homeworkLogoType: 'far', notesLogoType: 'far', finishedLogoType: 'fas'})
                }}
            >
                <FontAwesomeIcon icon={[logoType.finishedLogoType, 'calendar-check']} className="_calendar_check_icon" />
                <span>Finished</span>
            </NavLink>
        </div>
    )
}

export { Header as default }