import React from 'react'
import Meal from './Meal'
import UserMeals from './userMeals'
import {connect} from 'react-redux'
import {getMealDetails} from '../actions/mealActions'
import {createMeal, deleteMeal} from '../actions/userActions'
 
class MealContainer extends React.Component {

    renderMeals(){
        return this.props.meals.map((m) => <Meal loggedIn={this.props.loggedIn} handleClick={this.handleClick} key={m.idMeal} meal={m}/>)
    }

    renderUserMeals(){
        return this.props.userMeals.map((m) => <Meal loggedIn={this.props.loggedIn} handleClick={this.handleClick} key={m.idMeal} meal={m}/>)
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
                {this.props.userMeals ? this.renderUserMeals : this.renderMeals()}
            </div>
            
        )
    }
}

const mapStateToProps = state => {
    return {
      meals: state.mealReducer.meals,
      userMeals: state.mealReducer.userMeals,
      mealLoading: state.mealReducer.loading,
      user: state.authReducer.currentUser,
      loggedIn: state.authReducer.loggedIn,
    }
}

const dispToProps = disp => {
    return {
      getDetails: (mealId) => disp(getMealDetails(mealId)),
      createMeal: (meal, user) => disp(createMeal(meal, user)),
      deleteMeal: (meal) => disp(deleteMeal(meal))
    }
  }
  

export default connect(mapStateToProps, dispToProps)(MealContainer)