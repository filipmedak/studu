// React Components
import React, { useReducer, useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
// Custom Components
import Header from './Header'
import Section from './Section'
import Settings from '../components/Settings/Settings'
import Footer from './Footer'
import UserForm from './UserForm'
// Logic Components
import AppContext from '../context/app-context'
import todosReducer from '../reducers/todos'
import userReducer from '../reducers/user'
// Json files
import data from '../json/data.json'
// SASS files
import '../styles/App.scss'
// Font Awesome Logos
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircle, faStar, faBook, faStickyNote, faFolderMinus, faEllipsisV, faEdit, faCheck, faTrashAlt, faUndoAlt, faTimes, faQuestion, faCog, faUser, faInfoCircle, faChalkboardTeacher, faAngleRight, faLongArrowAltLeft, faExchangeAlt, faPlusSquare, faCalendarCheck, faClipboard, faCircleNotch, faAdjust, faUniversity, faGraduationCap, faListOl, faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons'
import { faCircle as farFaCircle, faCalendarAlt, faBookmark, faStar as farFaStar, faStickyNote as farFaStickyNote, faClipboard as farFaClipboard, faCalendarCheck as farFaCalendarCheck } from '@fortawesome/free-regular-svg-icons'

const App = () => {
    // Global variables & functions spread throught components using Context Hook
    let [ todos, dispatch ] = useReducer(todosReducer, [])
    const [ user, userDispatch ] = useReducer(userReducer, {}) 
    const [ filterClass, setFilterClass ] = useState('')
    const [ editBtn, toggleEditBtn ] = useState(false)
    const [ addBtn, toggleAddBtn ] = useState(false)
    const [modal, toggleModal] = useState(false)
    const isUser = user.id ? true : false
    const classes = user.id && user.classes
    const isMobile = window.innerWidth < 992
    // Dark Mode Setup
    const [ darkMode, toggleDarkMode ] = useState(isUser ? user.darkMode : false)
    user.darkMode ? document.querySelector('#root').classList.add('dark_mode') : document.querySelector('#root').classList.remove('dark_mode')
    // Font Awesome Library
    library.add(faStar, faBook, faStickyNote, faFolderMinus, faEllipsisV, faBookmark, faCalendarAlt, farFaCircle, faCircle, faCheck, faEdit, faTrashAlt, faUndoAlt, faTimes, faQuestion, faCog, faUser, faInfoCircle, faChalkboardTeacher, faAngleRight,  faLongArrowAltLeft, faExchangeAlt, faPlusSquare, farFaStar, farFaStickyNote, farFaClipboard, farFaCalendarCheck, faCalendarCheck, faClipboard, faCircleNotch, faAdjust, faUniversity, faGraduationCap, faListOl, faToggleOn, faToggleOff )
    // Grab array of objects from localStorage and save it in todo global variable - if exist render
    // Hook that runs only once on page load
    useEffect(() => {
        let todos = JSON.parse(localStorage.getItem('todos'))
        let user = JSON.parse(localStorage.getItem('user'))

        todos && dispatch({ type: 'POPULATE_TODOS', todos })
        user && userDispatch({ type: 'POPULATE_USER', user })
    // eslint-disable-next-line
    }, [])

    // Push updated todos/user array in localStorage
    // Hook that runs every time on todo array change
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [ todos ])

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user))
    }, [ user ])
    
    return (
        <AppContext.Provider value={{ todos, dispatch, user, userDispatch, data, classes, filterClass, setFilterClass, editBtn, toggleEditBtn, addBtn, toggleAddBtn, isUser, darkMode, toggleDarkMode, isMobile, modal, toggleModal }}>
            <BrowserRouter>
                {/* Init user setup */}
                {
                    !isUser && <UserForm />
                }
                {/* App won't render if user isn't setup */}
                {
                    isUser &&
                    <>
                        <Header/>
                        <Switch>
                            {/* Re-Routing logic */}
                            <Route exact path="/">
                                <Redirect to="/important" />
                            </Route>
                            {/* Routing logic */}
                            <Route 
                                path={['/important', '/homework', '/notes', '/finished']} 
                                component={Section} 
                            />
                            <Route 
                                path="/settings" 
                                component={Settings} 
                            />
                        </Switch>
                        <Footer />   
                    </>
                }
            </BrowserRouter>
        </AppContext.Provider>
    )
}

// Main component - rendered in main file (index.js)
export { App as default }