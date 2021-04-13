import '../Meal.css'

const Meal = (props) => {
    return(
        <div className="meal-card">
            {props.meal.id ? <button className="likeBtn" onClick={(e) => props.deleteClick(e, props.meal)}>Delete</button> : <button className="likeBtn" onClick={() => props.likeClick(props.meal)}>Like</button>}
            {props.meal.strArea ? <h3>{props.meal.strMeal}</h3> : <h3><button onClick={() => props.handleClick(props.meal.idMeal)}>{props.meal.strMeal}</button></h3>}
           <img className="meal-pic" alt="" src={props.meal.strMealThumb} />        
           {props.meal.strArea ? <div>
               <p>Area: {props.meal.strArea}</p>
               <p>Category: {props.meal.strCategory}</p>
               {props.meal.strYoutube ? <p>Video:{props.meal.strYoutube}</p> : ""}
               </div> : ""}
        </div>
    )
}

export default Meal