import '../Meal.css'

const Meal = (props) => {
    return(
        <div className="meal-card">
            <h3>Heres a random Meal!</h3>
           Name: {props.meal.strMeal}<br></br>
           Area: {props.meal.strArea}<br></br>
           Category: {props.meal.strCategory}<br></br>
           <img className="meal-pic" alt="" src={props.meal.strMealThumb} />
        </div>
    )
}

export default Meal