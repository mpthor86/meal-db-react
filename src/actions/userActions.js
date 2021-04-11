const url = 'http://localhost:3000'

export const createUser = (data) => {
    return (disp) => {
        fetch(url)
        .then(r => r.json())
        .then(json => disp({type: 'LOGIN', user: json.user}))
    }
}

export const fetchUser = (user) => {
    return (disp) => {
        fetch(`${url}/${user}`)
        .then(r => r.json())
        .then(json => disp({type: 'LOGIN', payload: {user: json.user}}))
    }
}

export const createMeal = (meal, user) => {
    console.log(user)
    return dispatch => {
        fetch(`${url}/meals`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({meal: meal, user: user})
        })
        .then(resp => resp.json())
        .then(data => dispatch({type: 'CREATE_USER_MEAL', payload: {meal: data.meal}})) 
    }
}