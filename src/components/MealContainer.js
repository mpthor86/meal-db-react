import React from 'react'
import Meal from './Meal'

class MealContainer extends React.Component {
    renderRandom() {
       return this.props.meal.map((m) => <Meal key={m.idMeal} meal={m}/>)
    }
    render(){
        return(
            
            <div>
                {this.renderRandom()}
            </div>
        )
    }
}

export default MealContainer