const userReducer = (state, action) => {
    switch (action.type) {
        // Render todos
        case 'POPULATE_USER':
            return action.user
        case 'ADD_USER':
            return { id: action.id, name: action.name, program: action.program, course: action.course, semester: action.semester, lang: action.lang, classes: action.classes }
        case 'CHANGE_USERNAME':
            return { ...state, name: action.name }
        case 'CHANGE_PROGRAM':
            return { ...state, program: action.program, course: action.course, semester: action.semester, classes: action.classes}
        case 'ADD_CLASS':
            return state
        case 'DELETE_CLASS':
            return state
        default:
            return state
    }
}

export { userReducer as default }