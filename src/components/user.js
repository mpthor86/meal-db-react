import React from 'react'
import {connect} from 'react-redux'
import Meal from './Meal'
import {fetchUserMeals} from '../actions/userActions'

class User extends React.Component {
    componentDidMount(){
        this.props.fetchUserMeals(this.props.user)
    }

    render(){
        console.log(this.props.user)
        return(
            <div>
                {this.props.user.username}'s profile<br></br>
                {this.props.userMeals.map((m) => <Meal meal={m} />)}
            </div>
        )
    }
}

const stateToProps = state =>{
    return{
        user: state.authReducer.currentUser,
        userMeals: state.mealReducer.userMeals
    }
}

const dispToProps = disp => {
    return{
        fetchUserMeals: (user) => disp(fetchUserMeals(user))
    }
}

export default connect(stateToProps, dispToProps)(User)