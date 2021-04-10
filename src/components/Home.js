import React from 'react'
import {connect} from 'react-redux'
import Meal from './Meal'
import {fetchMeals} from '../actions/mealActions'
//import {BrowserRouter as Router, Switch} from 'react-router-dom'
//import MealContainer from './MealContainer'

class Home extends React.Component {
    componentDidMount (){
        console.log(this.props.randomMeal)
        this.props.fetchMeals()
    }

    renderRandom() {
        return this.props.randomMeal.map((m) => <Meal key={m.idMeal} meal={m}/>)
     }

    render(){
        return(
            <div>
                {this.renderRandom()}
            </div>
        )
    }
}

const stateToProps = state => {
    return{
        randomMeal: state.mealReducer.randomMeal
    }
}

const dispToProps = disp => {
    return {
      fetchMeals: () => disp(fetchMeals()),
    }
  }

export default connect(stateToProps, dispToProps)(Home)