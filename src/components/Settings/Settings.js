// React Components
import React, { useState } from 'react'
// Custom Components
import About from './About/About'
import Account from './Account/Account'
import Apperance from './Apperance/Apperance'
import Classes from './Classes/Classes'

const Settings = () => {
    let [ apperance, setApperance ] = useState(false)
    let [ account, setAccount ] = useState(false)
    let [ about, setAbout ] = useState(false) 
    let [ classes, setClasses ] = useState(false)

    return (
        <div>
            {/* Show/hide settings sections logic */}
            <div>
                <button onClick={ 
                    () => {
                        setApperance(!apperance) 
                        setAccount(false)
                        setClasses(false)
                        setAbout(false)
                    }
                }>
                Apperance</button>
                {apperance && <Apperance />}
            </div>
            <div>
                <button onClick={ 
                    () => {
                        setApperance(false)
                        setAccount(!account) 
                        setClasses(false)
                        setAbout(false)
                    }
                }>
                Account</button>
                {account && <Account />}
            </div>
            <div>
                <button onClick={ 
                    () => {
                        setApperance(false)
                        setAccount(false) 
                        setClasses(!classes)
                        setAbout(false)
                    } 
                }>
                Classes</button>
                {classes && <Classes /> }
            </div>
            <div>
                <button onClick={ 
                    () => {
                        setApperance(false)
                        setAccount(false) 
                        setClasses(false)
                        setAbout(!about)
                    } 
                }>
                About</button>
                {about && <About />}
            </div>
        </div>
    )
}

export { Settings as default }