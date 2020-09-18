// React Components
import React, { useState } from 'react'
// Custom Components
import AddRemoveClass from './AddRemoveClass'
// FontAwesome Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Classes = () => {
    const [removeClassBtn, setRemoveClassBtn] = useState(false)
    const [addClassBtn, setAddClassBtn] = useState(false)
    
    return (
        <>
            {/* Change remove section toggle */}
            <div className="_settings_add_class_body fade-in-top">
                <button 
                    onClick={ () => {
                        setAddClassBtn(!addClassBtn) 
                        setRemoveClassBtn(false) }}
                    className="_settings_theme_main_btn"
                >
                    <FontAwesomeIcon icon={['fas', 'plus-square']} className="_plus_square_icon"/>
                    Add Class
                </button>
                {
                    addClassBtn && <AddRemoveClass addClassBtn={addClassBtn} setAddClassBtn={setAddClassBtn} />
                }
            </div>
            
            {/* Change add class section toggle */}
            <div className="_settings_remove_class_body fade-in-top">
                <button 
                    onClick={ () => {
                        setRemoveClassBtn(!removeClassBtn) 
                        setAddClassBtn(false)} }
                    className="_settings_theme_main_btn"
                >
                    <FontAwesomeIcon icon={['fas', 'trash-alt']} className="_trash_alt_icon"/>
                    Remove Class</button>
                {
                    removeClassBtn && <AddRemoveClass removeClassBtn={removeClassBtn} setRemoveClassBtn={setRemoveClassBtn} />
                }
            </div>
        </>
    )
}

export { Classes as default }