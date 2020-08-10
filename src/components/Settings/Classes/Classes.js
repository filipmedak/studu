// React Components
import React, { useState } from 'react'
// Custom Components
import AddRemoveClass from './AddRemoveClass'

const Classes = () => {
    const [removeClassBtn, setRemoveClassBtn] = useState(false)
    const [addClassBtn, setAddClassBtn] = useState(false)
    
    return (
        <div>
            {/* Change remove section toggle */}
            <button onClick={ () => {
                setAddClassBtn(!addClassBtn) 
                setRemoveClassBtn(false)
            }}
            >Add Class</button>
            {
                addClassBtn && <AddRemoveClass addClassBtn={addClassBtn} setAddClassBtn={setAddClassBtn} />
            }
            {/* Change add class section toggle */}
            <button onClick={ () => {
                setRemoveClassBtn(!removeClassBtn) 
                setAddClassBtn(false)
            }}
            >Remove Class</button>
            {
                removeClassBtn && <AddRemoveClass removeClassBtn={removeClassBtn} setRemoveClassBtn={setRemoveClassBtn} />
            }
        </div>
    )
}

export { Classes as default }