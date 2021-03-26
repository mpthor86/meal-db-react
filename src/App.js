import './App.css';
import MealContainer from './components/MealContainer'
import Sidebar from './components/Sidebar'
import {connect} from 'react-redux'
import React, {Component} from 'react'
import {fetchCategories, fetchMeals, filterMealByCategory} from './actions/mealActions'

class App extends Component {

  componentDidMount(){
    this.props.fetchCategories()
    this.props.fetchMeals()
  }

  render(){
    return (
      <div className="App">
        <h1><u>The Meal DB on React</u></h1>
      <MealContainer meals={this.props.meals} randomMeal={this.props.randomMeal} status={this.props.mealLoading}/>
      <Sidebar filterMeal={this.props.filterMeal} categories={this.props.categories}/>
    </div>
    )
  }
}

const stateToProps = state => {
    return {
      meals: state.mealReducer.meals,
      randomMeal: state.mealReducer.randomMeal,
      mealLoading: state.mealReducer.loading,
      categories: state.categoryReducer.categories,
      categoryLoading: state.categoryReducer.loading
    }
}
 
const dispToProps = disp => {
  return {
    fetchCategories: () => disp(fetchCategories()),
    fetchMeals: () => disp(fetchMeals()),
    filterMeal: (category) => disp(filterMealByCategory(category))
  }
}

export default connect(stateToProps, dispToProps)(App)
