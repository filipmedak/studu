const todosReducer = (state, action) => {
    switch (action.type) {
        case 'POPULATE_TODOS':
            return action.todos
        case 'ADD_TODO':
            return true
        case 'REMOVE_TODO':
            return false
        default:
            return null
    }
}

export { todosReducer as default }