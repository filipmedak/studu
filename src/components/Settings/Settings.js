// React Components
import React, { useState } from 'react'
// Custom Components
import About from './About/About'
import Account from './Account/Account'
import Apperance from './Apperance/Apperance'
import Classes from './Classes/Classes'
// FontAwesome Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Settings = () => {
    let [ apperance, setApperance ] = useState(false)
    let [ account, setAccount ] = useState(false)
    let [ about, setAbout ] = useState(false) 
    let [ classes, setClasses ] = useState(false)

    return (
        <div id="settings_body">
            <div className="_settings_head">
                <FontAwesomeIcon icon={['fas', 'long-arrow-alt-left']} className="_long_arrow_alt_left_icon" />
                <p>Settings</p>
            </div>

            {/* Show/hide settings sections logic */}
            <div className="_settings_apperance">
                <button 
                    className="_settings_main_btn"
                    onClick={ 
                        () => {
                            setApperance(!apperance) 
                            setAccount(false)
                            setClasses(false)
                            setAbout(false)
                        }
                }>
                    <FontAwesomeIcon icon={['fas', 'cog']} className="_cog_icon" />
                    Apperance
                    <FontAwesomeIcon icon={['fas', 'angle-right']} className="_angle_right_icon" />
                </button>
                {apperance && <Apperance />}
            </div>

            <div className="_settings_account">
                <button
                    className="_settings_main_btn" 
                    onClick={ 
                    () => {
                        setApperance(false)
                        setAccount(!account) 
                        setClasses(false)
                        setAbout(false)
                    }
                }>
                    <FontAwesomeIcon icon={['fas', 'user']} className="_user_icon" />
                    Account
                    <FontAwesomeIcon icon={['fas', 'angle-right']} className="_angle_right_icon" />
                </button>
                {account && <Account />}
            </div>

            <div className="_settings_classes">
                <button
                    className="_settings_main_btn" 
                    onClick={ 
                        () => {
                            setApperance(false)
                            setAccount(false) 
                            setClasses(!classes)
                            setAbout(false)
                        } 
                }>
                    <FontAwesomeIcon icon={['fas', 'chalkboard-teacher']} className="_chalkboard_teacher_icon" />
                    Classes
                    <FontAwesomeIcon icon={['fas', 'angle-right']} className="_angle_right_icon" />
                </button>
                {classes && <Classes /> }
            </div>
            
            <div className="_settings_about">
                <button
                    className="_settings_main_btn" 
                    onClick={ 
                        () => {
                            setApperance(false)
                            setAccount(false) 
                            setClasses(false)
                            setAbout(!about)
                        } 
                }>
                    <FontAwesomeIcon icon={['fas', 'info-circle']} className="_info_circle_icon" />
                    About
                    <FontAwesomeIcon icon={['fas', 'angle-right']} className="_angle_right_icon" />
                </button>   
                {about && <About />}
            </div>
        </div>
    )
}

export { Settings as default }