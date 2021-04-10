import React from 'react'
//import CategoryContainer from './CategoryContainer'
import '../Sidebar.css'
import {Link} from 'react-router-dom'
import {logout} from '../actions/authActions'
import {connect} from 'react-redux'

class Sidebar extends React.Component {
    render() {
        return(
            <div className="sidebar">
                <Link to='/'>Home</Link>
                {this.props.loggedIn ? (
                    <>
                    <Link to={`/users/${this.props.user.id}`} >Profile</Link>
                    <Link to="/" onClick={() => this.props.logout()}>Logout</Link>
                    </>
                ) :
                <>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Signup</Link>
                </>}
                <Link to='/categories'>Categories</Link>
            </div>
        )
    }
}

const stateToProps = state => {
    return{
        loggedIn: state.authReducer.loggedIn,
        user: state.authReducer.currentUser
    }
}

export default connect(stateToProps, {logout})(Sidebar)