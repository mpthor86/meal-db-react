import './App.css';
import MealContainer from './components/MealContainer'
import Signup from './components/Signup'
import Sidebar from './components/Sidebar'
import {connect} from 'react-redux'
import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
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
          <Router>
            <Switch>
                  <Route exact path='/signup' component={Signup}/>
                  <Route exact path='/' component={MealContainer, Sidebar}/>
            </Switch>
          </Router>
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
