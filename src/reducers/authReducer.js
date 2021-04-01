export default (state = {loggedIn: false, currentUser: {}}, action) => {
    switch (action.type) {
        case 'AUTH_SUCCESS':
            return {...state, loggedIn: action.payload.loggedIn, currentUser: action.payload.currentUser}

        default:
            return state
    }
}

