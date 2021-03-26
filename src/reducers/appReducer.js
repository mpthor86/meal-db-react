const appReducer = (state = {currentUser: {}, loggedIn: false}, action) => {
    switch(action.type){
        case 'LOGIN':
            return{
                ...state,
                currentUser: action.user,
                loggedIn: true
            }

        case 'SIGNOUT':
            return{
                currentUser: {},
                loggedIn: false
            }

        default: 
            return state
    }
}

export default appReducer