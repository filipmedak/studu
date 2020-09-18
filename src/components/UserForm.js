// React Components
import React, { useContext, useState } from 'react'
import { Route, Redirect } from 'react-router-dom'
// Logic Components
import AppContext from '../context/app-context'
import MapSelect from '../hooks/MapSelect'
import useUpdateUrl from '../hooks/useUpdateUrl'
import { v4 as uuidv4 } from 'uuid'
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Images
import {ReactComponent as RegistrationIllustration} from '../img/registration_illustration.svg'


// This a form component that is used for inital user setup and program change in settings
const UserForm = ({ setProgramBtn }) => {
    // Global variables from context hook that will be changed depending on user input
    let { isUser, userDispatch, data, classes, darkMode, toggleDarkMode } = useContext(AppContext)  

    // Local variables needed for initial user setup
    const [id, setId] = useState(uuidv4())
    const [name, setName] = useState('')

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
                    id, name, program, course, semester, classes, darkMode
                })        
        
        setId('')
        setName('')
        setProgram('')
        setCourse('')
        setSemester('')
        toggleDarkMode(darkMode)
        // Close edit component if on settings page
        isSettings && setProgramBtn(false)
    }
    
    return (
        <>
            <div className={!isUser ? "user_setup_form" : "" }>

                {/* Re-Routing logic for init user setup */}
                {
                    (isSettings && !isUser) && 
                    <Route exact path="/settings">
                        <Redirect to="/" />
                    </Route>
                }

                <form onSubmit={changeProgram} className="scale-in-center">
                    {/* Renders only if not on settings page */}
                    {
                        !isSettings && 
                            <>
                                <p className="_user_form_heading tracking-in-expand">Sign up</p>
                                <div className="_user_form_name_div fade-in-left">
                                    {/* Username input */}
                                    <FontAwesomeIcon icon={['fas', 'user']} className="_user_icon" />
                                    <input 
                                        value={name} 
                                        onChange={ (e) => setName(e.target.value) } 
                                        className="_user_form_name_input"
                                        placeholder="Your name"
                                    />
                                </div>
                            </>
                    }
                    
                    {/* Program input */}
                    <div className="_user_form_program_div fade-in-left">
                        {!isSettings && <FontAwesomeIcon icon={['fas', 'university']} className="_user_icon" />} 
                        <select 
                            className="_user_form_program_input"
                            value={program} 
                            onChange={ (e) => { setProgram(e.target.value)} }
                        >
                            <option value="" hidden>Program:</option>
                            {/* Dynamic rendering for programs from JSON file */}
                            { MapSelect(programs) }
                        </select>
                    </div>

                    {/* Course input */}
                    <div className="_user_form_course_div fade-in-left">
                        {!isSettings && <FontAwesomeIcon icon={['fas', 'graduation-cap']} className="_user_icon" />}
                        <select 
                            className="_user_form_course_input"
                            value={course} 
                            disabled={!program}
                            onChange={ (e) => { setCourse(e.target.value)} }
                        >
                            <option value="" hidden>Course:</option>
                            {/* Dynamic rendering for courses from JSON file */}
                            { program && MapSelect(courses) }
                        </select>
                    </div>

                    {/* Semester input */}
                    <div className="_user_form_semester_div fade-in-left">
                        {!isSettings && <FontAwesomeIcon icon={['fas', 'list-ol']} className="_user_icon" />}
                        <select 
                            className="_user_form_semester_input"
                            value={semester}
                            disabled={!course}
                            onChange={ (e) => { setSemester(e.target.value)} }
                        >
                            <option value="" hidden>Semester:</option>
                            {/* Dynamic rendering for semesters from JSON file */}
                            { course && MapSelect(semesters) }
                        </select>
                    </div>

                    {/* Submit button */}
                    <button 
                        disabled={!semester}
                        className={semester.length > 0 ? "_settings_theme_secondary_btn scale-in-ver-center pulsate-fwd" : "_settings_theme_secondary_btn scale-in-ver-center"}

                    >
                        { isSettings ? 'Change User' : 'Create User' }
                    </button>   
                </form>
                
                    { semester.length > 0 }

                {!isSettings && 
                    <div className="_user_form_illustration_div">
                        <RegistrationIllustration className="_user_form_illustration"/>
                    </div>
                }
            </div>
        </>
    )
}

export { UserForm as default }