// React Components
import React, { useContext, useState } from 'react'
// Logic Components
import AppContext from '../../../context/app-context'
import MapSelect from '../../../hooks/MapSelect'

const AddRemoveClass = ({ addClassBtn, setAddClassBtn, removeClassBtn, setRemoveClassBtn }) => {
    let { user, userDispatch, data } = useContext(AppContext)  
    const [semester, setSemester] = useState('')
    const [course, setClass] = useState('')
    
    // Fill semester/classes variables using global user variable
    let semesters, classes
    semesters = Object.keys(data[user.program][user.course])
    if(semester){ 
        classes = data[user.program][user.course][semester] 
    } else{
        classes = user.classes
    }

    // Function for adding / deleting classes
    const addClass = (e) => {
        e.preventDefault() 

        // Grab existing classes array 
        let classList = user.classes

        // Logic depening if add or remove button is active
        if(addClassBtn){
            // Add new class on end of existing classes array
            classList.push(course)
        }else if(removeClassBtn){
            // Grab index of existing class and remove from classes array
            const index = classList.indexOf(course)
            index > -1 && classList.splice(index, 1)
        }

        // Reference reducer class logic
        userDispatch({
            type: 'ADD_REMOVE_CLASS',
            classList
        }) 

        // Reset values and close component on submit
        setSemester('')
        setClass('')
        addClassBtn ? setAddClassBtn(false) : setRemoveClassBtn(false)
    }

    return (
        <div>
            <form onSubmit={addClass}>
                {/* user Semester select (only active when adding class) */} 
                {
                    addClassBtn 
                    &&
                    (
                        <select 
                            value={semester}
                            onChange={ (e) => { setSemester(e.target.value)} }
                        >
                            <option value="" hidden>Semester</option>
                            {
                                MapSelect(semesters)
                            }
                        </select>
                    )
                }
                {/* user Class select */} 
                <select
                    disabled={!semester && addClassBtn}
                    onChange={ (e) => { setClass(e.target.value) } }
                >
                    <option value="" hidden>Class</option>
                    {
                        (semester || !addClassBtn) && MapSelect(classes)
                    }
                </select>
                <button>{addClassBtn ? 'Add' : 'Delete'}</button>
            </form>
        </div>
    )
}

export { AddRemoveClass as default }