import React from 'react'
import Meal from './Meal'
import MealDetails from './MealDetails'
//import UserMeals from './userMeals'
import {connect} from 'react-redux'
import {getMealDetails} from '../actions/mealActions'
import {createMeal, deleteMeal} from '../actions/userActions'
 
class MealContainer extends React.Component {

    renderMeals(){
        if(this.props.mealDetails){
            return this.props.mealDetails.map((m) => <MealDetails key={m.idMeal} meal={m}/>)
        }else {
            return this.props.meals.map((m) => <Meal loggedIn={this.props.loggedIn} mealClick={this.mealClick} key={m.idMeal} meal={m}/>)
        }
    }

    mealClick = (e, meal) => {
        if (e.target.innerText === 'Delete'){
            this.props.deleteMeal(meal)
        }else if(e.target.innerText === 'Details'){
            this.props.getDetails(meal.idMeal)
        }else if(e.target.innerText === 'Like'){
            this.props.createMeal(meal)
        }
    }

    render(){
        return(
            <div>
                {console.log(this.props.meals)}
                {this.props.mealLoading ? <img src="https://i.pinimg.com/originals/b5/66/e3/b566e354ae8a23022884e0ac9f3cc88f.gif" alt=""></img> : this.renderMeals()}
            </div>
            
        )
    }
}

const mapStateToProps = state => {
    return {
      userMeals: state.mealReducer.userMeals,
      mealLoading: state.mealReducer.loading,
      user: state.authReducer.currentUser,
      loggedIn: state.authReducer.loggedIn,
      mealDetails: state.mealReducer.mealDetails
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

//{this.props.userMeals ? this.renderUserMeals : this.renderMeals()}