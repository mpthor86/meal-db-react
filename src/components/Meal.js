import '../Meal.css'

const Meal = (props) => {
    return(
        <div className="meal-card">
            {props.loggedIn ? <button className='likeBtn'>Like</button> : ""}
            <h3>{props.meal.strMeal}</h3>
           Area: {props.meal.strArea}<br></br>
           Category: {props.meal.strCategory}<br></br>
           <img className="meal-pic" alt="" src={props.meal.strMealThumb} />        </div>
    )
}

export default Meal