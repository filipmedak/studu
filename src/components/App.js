import React, { useReducer } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import todosReducer from '../reducers/todos'
import Header from './Header'
import Important from '../components/Sections/Important'
import Homework from '../components/Sections/Homework'
import Notes from '../components/Sections/Notes'
import Finished from '../components/Sections/Finished'
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
                    <Route path="/important" component={Important}/>
                    <Route path="/homework" component={Homework}/>
                    <Route path="/notes" component={Notes}/>
                    <Route path="/finished" component={Finished}/>
                    <Route path="/settings" component={Settings}/>
                </Switch>
                <Footer />   
            </BrowserRouter>
        </AppContext.Provider>
    )
}

export { App as default }