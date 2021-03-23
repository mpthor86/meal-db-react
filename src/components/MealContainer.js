import React from 'react'
import Meal from './Meal'

class MealContainer extends React.Component {
    render(){
        console.log(this.props)
        return(
            
            <div>
                {this.props.status === true ? "" : <Meal meal={this.props.meal}/> }
            </div>
        )
    }
}

export default MealContainer