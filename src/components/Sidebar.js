import React from 'react'
import CategoryContainer from './CategoryContainer'
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
                    <Link to="/" onClick={() => this.props.logout()}>Logout</Link>
                    </>
                ) :
                <>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>Signup</Link>
                </>}
                <CategoryContainer filterMeal={this.props.filterMeal} categories={this.props.categories}/>
            </div>
        )
    }
}

const stateToProps = state => {
    return{
        loggedIn: state.authReducer.loggedIn
    }
}

export default connect(stateToProps, {logout})(Sidebar)