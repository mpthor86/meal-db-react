import './App.css';
import MealContainer from './components/MealContainer'
import Sidebar from './components/Sidebar'
import {connect} from 'react-redux'
import React, {Component} from 'react'
import {fetchCategories, fetchMeals} from './actions/mealActions'

class App extends Component {

  componentDidMount(){
    this.props.fetchCategories()
    this.props.fetchMeals()
  }

  render(){
    return (
      <div className="App">
        <h1><u>The Meal DB on React</u></h1>
      <MealContainer meal={this.props.randomMeal} status={this.props.mealLoading}/>
      <Sidebar categories={this.props.categories}/>
    </div>
    )
  }
}

const stateToProps = state => {
    return {
      randomMeal: state.mealReducer.randomMeal,
      mealLoading: state.mealReducer.loading,
      categories: state.categoryReducer.categories,
      categoryLoading: state.categoryReducer.loading
    }
}
 
const dispToProps = disp => {
  return {
    fetchCategories: () => disp(fetchCategories()),
    fetchMeals: () => disp(fetchMeals())
  }
}

export default connect(stateToProps, dispToProps)(App)
