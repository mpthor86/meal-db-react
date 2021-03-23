import '../Meal.css'

const Meal = (props) => {
    const meal = props.meal[0]
    return(
        <div className="meal-card">
            Name: {meal.strMeal}<br></br>
            Area: {meal.strArea}<br></br>
            Category: {meal.strCategory}<br></br>
            <img className="meal-pic" alt="" src={meal.strMealThumb} />
        </div>
    )
}

export default Meal