// React Components
import React, { useContext, useState } from 'react'
import { Route, Redirect } from 'react-router-dom'
// Logic Components
import AppContext from '../context/app-context'
import MapSelect from '../hooks/MapSelect'
import useUpdateUrl from '../hooks/useUpdateUrl'
import { v4 as uuidv4 } from 'uuid'
// Images
import logo from '../img/algebra_white_logo.png'

// This a form component that is used for inital user setup and program change in settings
const UserForm = ({ setProgramBtn }) => {
    // Global variables from context hook that will be changed depending on user input
    let { isUser, userDispatch, data, classes, darkMode, toggleDarkMode } = useContext(AppContext)  

    // Local variables needed for initial user setup
    const [id, setId] = useState(uuidv4())
    const [name, setName] = useState('')
    const [lang, setLang] = useState('')

    // Local variables needed for program change && initial user setup
    const [program, setProgram] = useState('')
    const [course, setCourse] = useState('')
    const [semester, setSemester] = useState('')
    // If current page is settings = true, else false
    const isSettings = (useUpdateUrl() === 'settings')
    
    // Form filter from JSON
    // Dynamic data rendering from JSON file depending on form changes (program->course->classes)
    const programs = Object.keys(data)
    let courses, semesters
    // If program input has value, render courses for course form select
    if(program){ courses = Object.keys(data[program]) } 
    // If course input has value, render semesters for semester form select
    if(course){ semesters = Object.keys(data[program][course]) }

    // Function that runs on form submit and references reducer
    const changeProgram = (e) => {
        e.preventDefault() 

        // Pull classes from JSON data depending on user choices
        classes = data[program][course][semester]

        // If current page is settings, change user program otherwise add new user
        isSettings
                ? userDispatch({
                    type: 'CHANGE_PROGRAM',
                    program, course, semester, classes
                }) 
                : 
                userDispatch({
                    type: 'ADD_USER',
                    id, name, program, course, lang, semester, classes, darkMode
                })        
        
        setId('')
        setName('')
        setProgram('')
        setCourse('')
        setLang('')
        setSemester('')
        toggleDarkMode(darkMode)
        // Close edit component if on settings page
        isSettings && setProgramBtn(false)
    }
    
    return (
        <div className={!isUser ? "user_setup_form" : "" }>

            {/* Re-Routing logic for init user setup */}
            {
                (isSettings && !isUser) && 
                <Route exact path="/settings">
                    <Redirect to="/" />
                </Route>
            }

            <form onSubmit={changeProgram}>
                {/* Renders only if not on settings page */}
                {
                    !isSettings && 
                        <>
                            <img src={logo} className="_algebra_white_logo" alt="Logo" />
                            {/* Username input */}
                            <input 
                                value={name} 
                                onChange={ (e) => setName(e.target.value) } 
                                placeholder="Please enter your name."
                            />

                            {/* Language input 
                            <select 
                                value={lang} 
                                onChange={ (e) => setLang(e.target.value) }
                            >
                                <option value="" hidden>Select language:</option>
                                <option value="English">English</option>
                                <option value="Croatian">Croatian</option>
                            </select>
                            */}
                        </>
                }
                
                {/* Program input */}
                <select 
                    value={program} 
                    onChange={ (e) => { setProgram(e.target.value)} }
                >
                    <option value="" hidden>Program:</option>
                    {/* Dynamic rendering for programs from JSON file */}
                    { MapSelect(programs) }
                </select>

                {/* Course input */}
                <select 
                    value={course} 
                    disabled={!program}
                    onChange={ (e) => { setCourse(e.target.value)} }
                >
                    <option value="" hidden>Course:</option>
                    {/* Dynamic rendering for courses from JSON file */}
                    { program && MapSelect(courses) }
                </select>

                {/* Semester input */}
                <select 
                    value={semester}
                    disabled={!course}
                    onChange={ (e) => { setSemester(e.target.value)} }
                >
                    <option value="" hidden>Semester:</option>
                    {/* Dynamic rendering for semesters from JSON file */}
                    { course && MapSelect(semesters) }
                </select>

                {/* Submit button */}
                <button 
                    disabled={!semester}
                    className="_settings_theme_secondary_btn"
                >
                    { isSettings ? 'Change User' : 'Create User' }
                </button>   
            </form>
        </div>
    )
}

export { UserForm as default }