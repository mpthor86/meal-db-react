import './App.css';
import CategoryContainer from './components/CategoryContainer';
import MealContainer from './components/MealContainer'
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
      <CategoryContainer categories={this.props.categories} status={this.props.loading}/>
      {this.props.loading === true ? "" : <MealContainer meal={this.props.meals} status={this.props.mealLoading}/>}
    </div>
    )
  }
}

const stateToProps = state => {
    return {
      meals: state.mealReducer.meals,
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
