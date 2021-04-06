import React from 'react'
import {signup} from '../actions/authActions'
import {connect} from 'react-redux'

class Signup extends React.Component {
    state = {
        username: "",
        password: "",
        password_confirm: ""
    }

    handleChange = (e) => {
        this.setState({
           [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.signup(this.state)
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
                    <label>Confirm Password:</label>
                    <input name="password_confirm" value={this.state.passwordConfirm} onChange={this.handleChange} type='password' />
                    <br />
                    <button type="submit">Signup</button>
                </form>
            </div>
        )
    }
}

export default connect(null, {signup})(Signup)