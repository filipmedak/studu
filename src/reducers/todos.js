const todosReducer = (state, action) => {
    switch (action.type) {
        case 'POPULATE_TODOS':
            return action.todos
        case 'ADD_TODO':
            return [
                ...state,
                { id: action.id, title: action.title, type: action.todoType, course: action.course, date: action.date, finished: action.finished }
            ]
        case 'REMOVE_TODO':
            return state.filter((note) => note.id !== action.id)
        case 'TOGGLE_TODO':
            return state.map(
                (todo) => action.id === todo.id && {...todo, finished: !action.finished}
            )
        default:
            return state
    }
}

export { todosReducer as default }