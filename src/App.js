//import logo from './logo.svg';
import './App.css';
import MealContainer from './components/MealContainer';
import {connect} from 'react-redux'
import React, {Component} from 'react'
import {fetchCategories} from './actions/mealActions'

class App extends Component {
  componentDidMount(){
    this.props.fetchCategories()
  }

  render(){
    return (
      <div className="App">
      <MealContainer meals={this.props.meals} status={this.props.loading}/>
    </div>
    )
  }
}

const stateToProps = state => {
    return {
      meals: state.meals,
      loading: state.loading
    }
}

const dispToProps = disp => {
  return {
    fetchCategories: () => disp(fetchCategories())
  }
}

export default connect(stateToProps, dispToProps)(App)
