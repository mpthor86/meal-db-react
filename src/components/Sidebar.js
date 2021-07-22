import React from 'react'
//import CategoryContainer from './CategoryContainer'
import '../Sidebar.css'
import {Link} from 'react-router-dom'
import {logout} from '../actions/authActions'
import {homeState} from '../actions/mealActions'
import {connect} from 'react-redux'

class Sidebar extends React.Component {
    renderMenu() {
                return(
                    <div className="sidebar">
                    </div>
                )
            }
            
            render() {
                return(
                    <div className='sidebar'>
                    <Link to='/' onClick={() => this.props.homeState()}>Home</Link>
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
                        <Link to='/categories' onClick={() => this.props.homeState()}>Categories</Link>
                </div>
        )
    }
}

const stateToProps = state => {
    return{
        loggedIn: state.authReducer.loggedIn,
        user: state.authReducer.currentUser,
    }
}

const dispToProps = disp => {
    return{
        logout:() => disp(logout()),
        homeState:() => disp(homeState())
    }
}

export default connect(stateToProps, dispToProps)(Sidebar)