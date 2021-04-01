export const createUser = (data) => {
    return (disp) => {
        fetch('http://[::1]:3000')
        .then(r => r.json())
        .then(json => disp({type: 'LOGIN', user: json.user}))
    }
}

export const fetchUser = (user) => {
    return (disp) => {
        fetch(`http://[::1]:3000/${user}`)
        .then(r => r.json())
        .then(json => disp({type: 'LOGIN', user: json.user}))
    }
}