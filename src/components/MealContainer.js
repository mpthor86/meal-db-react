import React from 'react'
import Meal from './Meal'
import MealDetails from './MealDetails'
//import UserMeals from './userMeals'
import {connect} from 'react-redux'
import {getMealDetails} from '../actions/mealActions'
import {createMeal, deleteMeal} from '../actions/userActions'
 
class MealContainer extends React.Component {
    getKeyValues(obj, term){
        let keys = []
        let values= []
        let ingredient= []

        for(let key in obj){
            if(obj.hasOwnProperty(key)){
                keys.push(key)
                values.push(obj[key])                
            } 
        }
        for(let i=0; i< keys.length; ++i){
            if(keys[i].includes(term)){
                ingredient.push(values[i])
            }
        }
        return ingredient.filter((el)=> el !== "" && el !== null)
    }
    
    //renderMeals(){
    //    if(this.props.mealDetails.length !== 0){
    //        return this.props.mealDetails.map((m) => <MealDetails key={m.idMeal} meal={m} mealClick={this.mealClick} measure={this.getKeyValues(this.props.mealDetails[0], 'strMeasure')} ingredients={this.getKeyValues(this.props.mealDetails[0], 'strIng')}/>)
    //    }else if(this.props.meals.length !== 0){
    //        return this.props.meals.map((m) => <Meal loggedIn={this.props.loggedIn} mealClick={this.mealClick} key={m.idMeal} meal={m}/>)
    //    }else if(this.props.userMeals.length !== 0){
    //        return this.props.userMeals.map((m) => <Meal loggedIn={this.props.loggedIn} mealClick={this.mealClick} key={m.id} meal={m} />)
    //    }else if(this.props.randomMeal.length !== 0){
    //        return this.props.randomMeal.map((m) => <Meal meal={m} key={m.idMeal} mealClick={this.mealClick} />)
    //    }
    //}

    renderMeals(){
        console.log(window.location.href)
           return (
               <div>
                   {this.props.mealDetails.map((m) => <MealDetails key={m.idMeal} meal={m} mealClick={this.mealClick} measure={this.getKeyValues(this.props.mealDetails[0], 'strMeasure')} ingredients={this.getKeyValues(this.props.mealDetails[0], 'strIng')}/>)}
                   {this.props.meals.map((m) => <Meal loggedIn={this.props.loggedIn} mealClick={this.mealClick} key={m.idMeal} meal={m}/>)}
                   {this.props.userMeals.map((m) => <Meal loggedIn={this.props.loggedIn} mealClick={this.mealClick} key={m.id} meal={m} />)}
                   {window.location.href === 'http://localhost:3001/' ? this.props.randomMeal.map((m) => <Meal meal={m} key={m.idMeal} mealClick={this.mealClick} />) : ""}
               </div>
           )
    }
    
    mealClick = (e, meal) => {
        if (e.target.innerText === 'Delete'){
            this.props.deleteMeal(meal)
        }else if(e.target.innerText === 'Details'){
            this.props.getDetails(meal.idMeal)
        }else if(e.target.innerText === 'Like'){
            this.props.createMeal(meal)
        }
    }

    render(){
        
        return(
            <div>
                {this.getKeyValues(this.props.mealDetails[0])}
                {this.props.mealLoading ? <img src="https://i.pinimg.com/originals/b5/66/e3/b566e354ae8a23022884e0ac9f3cc88f.gif" alt=""></img> : this.renderMeals()}
            </div>
            
        )
    }
}

const mapStateToProps = state => {
    return {
      userMeals: state.mealReducer.userMeals,
      randomMeal: state.mealReducer.randomMeal,
      meals: state.mealReducer.meals,
      mealLoading: state.mealReducer.loading,
      user: state.authReducer.currentUser,
      loggedIn: state.authReducer.loggedIn,
      mealDetails: state.mealReducer.mealDetails
    }
}

const dispToProps = disp => {
    return {
      getDetails: (mealId) => disp(getMealDetails(mealId)),
      createMeal: (meal, user) => disp(createMeal(meal, user)),
      deleteMeal: (meal) => disp(deleteMeal(meal))
    }
  }
  

export default connect(mapStateToProps, dispToProps)(MealContainer)

//{this.props.userMeals ? this.renderUserMeals : this.renderMeals()}