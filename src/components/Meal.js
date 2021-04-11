import '../Meal.css'

const Meal = (props) => {
    console.log(props)
    return(
        <div className="meal-card">
            {props.userMeals ? <button onClick={() => props.likeClick(props.meal, props.user)}>Like</button> : ""}
            {props.meal.strArea ? <h3>{props.meal.strMeal}</h3> : <h3><button onClick={() => props.handleClick(props.meal.idMeal)}>{props.meal.strMeal}</button></h3>}
           <img className="meal-pic" alt="" src={props.meal.strMealThumb} />        
           {props.meal.strArea ? <div>
               <p>Area: {props.meal.strArea}</p>
               <p>Category: {props.meal.strCategory}</p>
               <strong>Instructions:</strong> <p>{props.meal.strInstructions}</p>
               {props.meal.strYoutube ? <p>Video:{props.meal.strYoutube}</p> : ""}
               </div> : ""}
        </div>
    )
}

export default Meal