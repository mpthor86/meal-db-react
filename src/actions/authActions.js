const url = 'http://localhost:3000'

export const signup = user => {
    return dispatch => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({user: user})
        })
        .then(resp => resp.json())
        .then(data => dispatch({type: 'AUTH_SUCCESS', payload: {loggedIn: data.logged_in, currentUser: data.user}})) 
    }
}

export const login = (user, history) => {
    return dispatch => {
        fetch(`${url}/sessions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({user: user})
        })
        .then(resp => resp.json())
        .then(data => {
            dispatch({
                type: 'AUTH_SUCCESS', 
                payload: {loggedIn: data.logged_in, currentUser: data.user},
            })
        })
    }
}

export const checkLoggedIn = () =>{
    return dispatch => {
        fetch(`${url}/logged_in`, {
            credentials: 'include'
        })
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: 'AUTH_SUCCESS',
                payload: {loggedIn: data.logged_in, currentUser: data.user}
            })
        })
    }
}

export const logout = () => {
    return dispatch => {
        fetch(`${url}/logout`, {
            method: 'DELETE',
            credentials: 'include'
        })
        .then(res => res.json())
        .then(data => dispatch({type: 'LOGOUT'}))
    }
}