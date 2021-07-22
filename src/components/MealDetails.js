import '../Meal.css'

const MealDetails = (props) => {
    return(
        <div className="detail-card">
            <h2>{props.meal.strMeal}</h2>
            <img className="meal-pic" alt="" src={props.meal.strMealThumb} />
            <a className='video' href={props.meal.strYoutube} target='_blank' rel = "noopener noreferrer">Video Instructions</a>
            <br></br>
            <table className='ingredients'>
                <td className='column'>
            {props.measure.map((el)=> <tr>{el}</tr>)}
                </td>
                <td className='column'>
            {props.ingredients.map((el)=> <tr>- {el}</tr>)}
                </td>
                <td className='instructions'>
            {props.meal.strInstructions}
                </td>
            </table>
            <button className="likeBtn" onClick={(e) => props.mealClick(e, props.meal)}>Like</button>
        </div>
    )
}

export default MealDetails

//{props.meal.id ? <button className="likeBtn" onClick={(e) => props.handleClick(e, props.meal)}>Delete</button> : <button className="likeBtn" onClick={(e) => props.handleClick(e, props.meal)}>Like</button>}
//            {props.meal.strArea ? <h3>{props.meal.strMeal}</h3> : <h4>{props.meal.strMeal}<button onClick={(e) => props.handleClick(e, props.meal.idMeal)}>Details</button></h4>}
//           <img className="meal-pic" alt="" src={props.meal.strMealThumb} />        
//           {props.meal.strArea ? <div>
//               <p>Area: {props.meal.strArea}</p>
//               <p>Category: {props.meal.strCategory}</p>
//               {props.meal.strYoutube ? <p>Video:{props.meal.strYoutube}</p> : ""}
//               </div> : ""}