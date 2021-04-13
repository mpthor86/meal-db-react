import React from 'react'
import {connect} from 'react-redux'
import {fetchUserMeals, deleteMeal, createMeal} from '../actions/userActions'
import {getMealDetails} from '../actions/mealActions'
import Meal from './Meal'

class User extends React.Component {
    componentDidMount(){
        this.props.fetchUserMeals(this.props.user)
    }

    renderMeals(){
        return this.props.meals.map((m) => <Meal loggedIn={this.props.loggedIn} handleClick={this.handleClick} key={m.idMeal} meal={m}/>)
    }

    handleClick = (e, meal) => {
        if (e.target.innerText === 'Delete'){
            this.props.deleteMeal(meal)
        }else if(e.target.innerText === 'Details'){
            this.props.getDetails(meal)
        }else if(e.target.innerText === 'Like'){
            this.props.createMeal(meal)
        }
    }  

    render(){
        return(
            <div>
                <h3>{this.props.user.username}'s profile</h3>
                <h3><u>Your Meals</u></h3>
                {this.props.loading === true ? "Loading" : this.renderMeals()}
            </div>
        )
    }
}

const stateToProps = state =>{
    return{
        user: state.authReducer.currentUser,
        meals: state.mealReducer.userMeals,
        loading: state.mealReducer.loading,
        loggedIn: state.authReducer.loggedIn
    }
}

const dispToProps = disp => {
    return{
        createMeal: (meal, user) => disp(createMeal(meal, user)),
        getDetails: (mealId) => disp(getMealDetails(mealId)),
        fetchUserMeals: (user) => disp(fetchUserMeals(user)),
        deleteMeal: (meal) => disp(deleteMeal(meal))
    }
}

export default connect(stateToProps, dispToProps)(User)