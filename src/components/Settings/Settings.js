// React Components
import React, { useState } from 'react'
// Custom Components
import About from './About/About'
import Account from './Account/Account'
import Apperance from './Apperance/Apperance'
import Classes from './Classes/Classes'

const Settings = () => {
    const [ apperance, setApperance ] = useState(false)
    const [ account, setAccount ] = useState(false)
    const [ about, setAbout ] = useState(false) 
    const [ classes, setClasses ] = useState(false)

    return (
        <div>
            {/* Show/hide settings sections logic */}
            <div>
                <button onClick={ () => setApperance(!apperance) }>Apperance</button>
                {apperance && <Apperance />}
            </div>
            <div>
                <button onClick={ () => setAccount(!account) }>Account</button>
                {account && <Account />}
            </div>
            <div>
                <button onClick={ () => setClasses(!classes) }>Classes</button>
                {classes && <Classes /> }
            </div>
            <div>
                <button onClick={ () => setAbout(!about) }>About</button>
                {about && <About />}
            </div>
        </div>
    )
}

export { Settings as default }