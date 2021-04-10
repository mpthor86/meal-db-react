import React from 'react'
import Meal from './Meal'
import {connect} from 'react-redux'
import {getMealDetails} from '../actions/mealActions'
 
class MealContainer extends React.Component {

    renderMeals(){
        return this.props.meals.map((m) => <Meal loggedIn={this.props.loggedIn} handleClick={this.mealClick} key={m.idMeal} meal={m}/>)
    }

    mealClick = (mealId) => {
        this.props.getDetails(mealId)
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
      loggedIn: state.authReducer.loggedIn
    }
}

const dispToProps = disp => {
    return {
      getDetails: (mealId) => disp(getMealDetails(mealId))
    }
  }
  

export default connect(mapStateToProps, dispToProps)(MealContainer)