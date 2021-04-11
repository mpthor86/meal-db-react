import React from 'react'
import Meal from './Meal'
import {connect} from 'react-redux'
import {getMealDetails} from '../actions/mealActions'
import {createMeal} from '../actions/userActions'
 
class MealContainer extends React.Component {

    renderMeals(){
        return this.props.meals.map((m) => <Meal loggedIn={this.props.loggedIn} handleClick={this.mealClick} key={m.idMeal} likeClick={this.likeClick} userMeals={this.props.userMeals} meal={m}/>)
    }

    mealClick = (mealId) => {
        this.props.getDetails(mealId)
    }

    likeClick = (meal) => {
        this.props.createMeal(meal, this.props.user)
    }

    render(){
        return(
            <div>
                {this.props.user.username ? <u><strong>Hello {this.props.user.username}</strong></u> : ""}
                {this.renderMeals()}
            </div>
            
        )
    }
}

const mapStateToProps = state => {
    return {
      meals: state.mealReducer.meals,
      mealLoading: state.mealReducer.loading,
      user: state.authReducer.currentUser,
      loggedIn: state.authReducer.loggedIn,
      userMeals: state.mealReducer.userMeals
    }
}

const dispToProps = disp => {
    return {
      getDetails: (mealId) => disp(getMealDetails(mealId)),
      createMeal: (meal, user) => disp(createMeal(meal, user))
    }
  }
  

export default connect(mapStateToProps, dispToProps)(MealContainer)