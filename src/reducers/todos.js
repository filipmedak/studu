// Reducer Hook that contains multiple functions that can be reused 
const todosReducer = (state, action) => {
    switch (action.type) {
        // Render todos
        case 'POPULATE_TODOS':
            return action.todos
        case 'ADD_TODO':
            return [
                ...state,
                { id: action.id, title: action.title, type: action.todoType, course: action.course, date: action.date, finished: action.finished }
            ]
        case 'REMOVE_TODO':
            return state.filter((note) => note.id !== action.id)
        // Toggle todos between finished and unfinished state 
        case 'TOGGLE_TODO':
            return state.map(
                (todo) => action.id === todo.id && {...todo, finished: !action.finished}
            )
        case 'EDIT_TODO':
            return state.map(
                (todo) => 
                    action.id === todo.id 
                    && { id: action.id, title: action.title, type: action.todoType, course: action.course, date: action.date, finished: action.finished }
            )
        default:
            return state
    }
}

export { todosReducer as default }