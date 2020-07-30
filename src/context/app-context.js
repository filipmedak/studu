import React from 'react'

// Context that allows to use gloabal variables without sending props withing components or using React Redux
const AppContext = React.createContext()

export { AppContext as default }