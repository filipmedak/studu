import React, { useReducer } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import todosReducer from '../reducers/todos'
import Header from './Header'
import Section from './Sections/Section'
import Settings from '../components/Settings/Settings'
import Footer from './Footer'
import AppContext from '../context/app-context'


const App = () => {
    const [ todos, dispatch ] = useReducer(todosReducer, []) 

    return (
        <AppContext.Provider value={{ todos, dispatch }}>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/important" />
                    </Route>
                    <Route path={['/important', '/homework', '/notes', '/finished']} component={Section}/>
                    <Route path="/settings" component={Settings}/>
                </Switch>
                <Footer />   
            </BrowserRouter>
        </AppContext.Provider>
    )
}

export { App as default }