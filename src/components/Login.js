import React from 'react'
import {login} from '../actions/authActions'
import {connect} from 'react-redux'

class Login extends React.Component {
    state = {
        username: "",
        password: "",
    }

    handleChange = (e) => {
        this.setState({
           [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.login(this.state)
        this.props.history.push('/')
    }

    render(){
        return(
            <div>
                <h3>Please signup below</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Username:</label>
                    <input name="username" value={this.state.username} onChange={this.handleChange} type='text' />
                        <br />
                    <label>Password:</label>
                    <input name="password" value={this.state.password} onChange={this.handleChange} type='password' />
                    <br />
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

const dispToProps = disp => {
    return{
        login: (user) => disp(login(user))
    }
}

export default connect(null, dispToProps)(Login)