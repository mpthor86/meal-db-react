import './App.css';
import MealContainer from './components/MealContainer'
import Signup from './components/Signup'
import Login from './components/Login'
import Sidebar from './components/Sidebar'
import {connect} from 'react-redux'
import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {fetchCategories, fetchMeals, filterMealByCategory} from './actions/mealActions'
import {checkLoggedIn} from './actions/authActions'


class App extends Component {

  componentDidMount(){
    this.props.fetchCategories()
    this.props.fetchMeals()
    this.props.checkLoggedIn()
  }
  
  render(){
    console.log(this.props.checkLoggedIn)
    return (
      <div className="App">
        <h1><u>The Meal DB on React</u></h1>
          <Router>
          <Sidebar />
            <Switch>
                  <Route exact path='/login' component={Login} />
                  <Route exact path='/signup' component={Signup}/>
                  <Route path='/' render={() => 
                    <React.Fragment>
                      <MealContainer />
                    </React.Fragment>} />
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
    filterMeal: (category) => disp(filterMealByCategory(category)),
    checkLoggedIn: () => disp(checkLoggedIn())
  }
}

export default connect(stateToProps, dispToProps)(App)
