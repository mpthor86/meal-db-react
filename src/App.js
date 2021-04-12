import './App.css';
import Home from './components/Home'
import {connect} from 'react-redux'
import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {fetchCategories, fetchMeals} from './actions/mealActions'
import {checkLoggedIn} from './actions/authActions'
import Sidebar from './components/Sidebar'
import Login from './components/Login'
import Signup from './components/Signup'
import User from './components/user'
//import Category from './components/Category';
import CategoryContainer from './components/CategoryContainer';
import MealContainer from './components/MealContainer';
//import * as Cookies from 'js-cookie'

class App extends Component {

  componentDidMount(){
    this.props.fetchCategories()
    this.props.fetchMeals()
    this.props.checkLoggedIn()
  }
  
  render(){
    return (
      <div className="App">
        <h1><u>The Meal DB on React</u></h1>
          <Router>
                <Sidebar className='sidebar'/>
            <Switch>
                <Route exact path='/login' component={Login} />
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/categories' component={CategoryContainer} />
                <Route exact path='/categories/:id' component={MealContainer} />
                <Route exact path='/users/:id' component={User} />
                <Route path='/' component={Home} />
            </Switch>
          </Router>
      </div>
    )
  }
}

const stateToProps = state => {
    return {
      user: state.authReducer.currentUser,
      category: state.categoryReducer.categories,
      mealId: state.mealReducer.meals
    }
}
 
const dispToProps = disp => {
  return {
    fetchCategories: () => disp(fetchCategories()),
    fetchMeals: () => disp(fetchMeals()),
    checkLoggedIn: () => disp(checkLoggedIn())
  }
}

export default connect(stateToProps, dispToProps)(App)

//    filterMeal: (category) => disp(filterMealByCategory(category)),
