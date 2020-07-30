// React Components
import React, { useReducer, useState } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
// Custom Components
import Header from './Header'
import Section from './Sections/Section'
import Settings from '../components/Settings/Settings'
import Footer from './Footer'
// Logic Components
import AppContext from '../context/app-context'
import todosReducer from '../reducers/todos'


const App = () => {
    // Global variables & functions spread throught components using Context Hook
    const [ todos, dispatch ] = useReducer(todosReducer, []) 
    const [ editBtn, toggleEditBtn ] = useState(false)
    const [ addBtn, toggleAddBtn ] = useState(false)

    return (
        <AppContext.Provider value={{ todos, dispatch, editBtn, toggleEditBtn, addBtn, toggleAddBtn }}>
            <BrowserRouter>
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