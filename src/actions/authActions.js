export const signup = user => {
    return dispatch => {
        fetch('http://[::1]:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user: user})
        })
        .then(resp => resp.json())
        .then(data => dispatch({type: 'AUTH_SUCCESS', payload: {loggedIn: data.logged_in, currentUser: data.user}})) 
    }
}