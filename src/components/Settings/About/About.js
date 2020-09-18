import React from 'react'

const About = () => {
    // Static react component that contains information about the creator 
    return (
        <div className="_settings_about_body fade-in-top">
            <p>Created by: <b>Filip Medak</b></p>
            <p>Used by: <b>Algebra University College</b></p>
            <p>© 2020 Filip Medak. All rights reserved.</p>
        </div>
    )
}

export { About as default }