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
                <Route path='/' component={Home} />
            </Switch>
          </Router>
      </div>
    )
  }
}

//const stateToProps = state => {
//    return {
//      meals: state.mealReducer.meals,
//      randomMeal: state.mealReducer.randomMeal,
//      mealLoading: state.mealReducer.loading,
//      categories: state.categoryReducer.categories,
//      categoryLoading: state.categoryReducer.loading
//    }
//}
 
const dispToProps = disp => {
  return {
    fetchCategories: () => disp(fetchCategories()),
    fetchMeals: () => disp(fetchMeals()),
    checkLoggedIn: () => disp(checkLoggedIn())
  }
}

export default connect(null, dispToProps)(App)

//    filterMeal: (category) => disp(filterMealByCategory(category)),
