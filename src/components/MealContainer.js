import React from 'react'
import Meal from './Meal'
import {connect} from 'react-redux'
 
class MealContainer extends React.Component {
    renderRandom() {
       return this.props.randomMeal.map((m) => <Meal key={m.idMeal} meal={m}/>)
    }

    renderMeals(){
        return this.props.meals.map((m) => <Meal loggedIn={this.props.loggedIn} handleClick={this.handleClick} key={m.idMeal} meal={m}/>)
    }

    handleClick = () => {
        
    }
    render(){
        return(
            <div>
                {this.props.user.username ? <u><strong>Hello {this.props.user.username}</strong></u> : ""}
                {this.renderRandom()}
                {this.renderMeals()}
            </div>
            
        )
    }
}

const mapStateToProps = state => {
    return {
      meals: state.mealReducer.meals,
      randomMeal: state.mealReducer.randomMeal,
      mealLoading: state.mealReducer.loading,
      user: state.authReducer.currentUser,
      loggedIn: state.authReducer.loggedIn
    }
}

//const dispToProps = disp => {
//    return {
//      loggedIn: () => disp(checkLoggedIn())
//    }
//  }
  

export default connect(mapStateToProps)(MealContainer)