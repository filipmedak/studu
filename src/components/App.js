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

const App = () => {
    // Global variables & functions spread throught components using Context Hook
    const [ todos, dispatch ] = useReducer(todosReducer, [])
    const [ user, userDispatch ] = useReducer(userReducer, {}) 
    const [ editBtn, toggleEditBtn ] = useState(false)
    const [ addBtn, toggleAddBtn ] = useState(false)
    const classes = user.id && user.classes

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
        <AppContext.Provider value={{ todos, dispatch, user, userDispatch, data, classes, editBtn, toggleEditBtn, addBtn, toggleAddBtn }}>
            <BrowserRouter>
                {
                   !user.id && <UserForm />
                }
                <Header />
                <Switch>
                    {/* Routing logic */}
                    <Route exact path="/">
                        <Redirect to="/important" />
                    </Route>
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
            </BrowserRouter>
        </AppContext.Provider>
    )
}

// Main component - rendered in main file (index.js)
export { App as default }