import '../Meal.css'

const Meal = (props) => {
    console.log(props.meal)
    return(
        <div className="meal-card">
            <h3>{props.meal.strMeal}</h3>
           Area: {props.meal.strArea}<br></br>
           Category: {props.meal.strCategory}<br></br>
           <img className="meal-pic" alt="" src={props.meal.strMealThumb} />
        </div>
    )
}

export default Meal