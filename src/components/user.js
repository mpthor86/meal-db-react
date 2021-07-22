import React from 'react'
import {connect} from 'react-redux'
import {fetchUserMeals, deleteMeal, createMeal} from '../actions/userActions'
import {getMealDetails} from '../actions/mealActions'
import Meal from './Meal'
import MealContainer from './MealContainer'

class User extends React.Component {
    state = {
        search: "",
        meals: []
    }

    componentDidMount(){
        this.props.fetchUserMeals(this.props.user)
    }

    renderMeals(){
        return(
            <MealContainer />
        )
    }

    handleChange = (e) => {
        this.setState({
           [e.target.name]: e.target.value
        })
    }

    handleSubmit =(e) =>{
        const arr = this.props.meals.filter((m) => m.strMeal.toLowerCase().includes(this.state.search.toLowerCase()))
        this.setState({meals: arr})
    }

    renderSearch(){
        return this.state.searchMeals.forEach((m) => <Meal loggedIn={this.props.loggedIn} handleClick={this.handleClick} key={m.idMeal} meal={m}/>)
    }
    
    render(){
        return(
            <div>
                <h3>{this.props.user.username}'s profile</h3>
                <h3><u>Your Meals</u></h3>
                <input name='search' type="text" value={this.state.search} onChange={this.handleChange}></input><button onClick={this.handleSubmit}>Search</button>
                {this.props.loading === false ? this.renderMeals() : "Loading"}
            </div>
        )
    }
}

const stateToProps = state =>{
    return{
        user: state.authReducer.currentUser,
        meals: state.mealReducer.userMeals,
        loading: state.mealReducer.loading,
        loggedIn: state.authReducer.loggedIn
    }
}

const dispToProps = disp => {
    return{
        createMeal: (meal, user) => disp(createMeal(meal, user)),
        getDetails: (mealId) => disp(getMealDetails(mealId)),
        fetchUserMeals: (user) => disp(fetchUserMeals(user)),
        deleteMeal: (meal) => disp(deleteMeal(meal))
    }
}

export default connect(stateToProps, dispToProps)(User)
