
const mealReducer = (state = {meals: [], userMeals: [], randomMeal: [], mealDetails: [], loading: false}, action) => {
    switch(action.type){
        case 'GET_MEALS':
            return{
                ...state,
                loading: true
            }

        case 'ADD_RANDOM_MEAL':
            return{
                ...state,
                randomMeal: action.randomMeal,
                loading: false
            }

        case 'ADD_MEALS':
            return{
                ...state.randomMeal,
                meals: action.meals,
                loading: false
            }

        case 'CREATE_USER_MEAL':
            return{
                ...state,
                userMeals: action.payload.meal
            }

        case 'ADD_USER_MEALS':
            return{
                ...state,
                loading: false,
                userMeals: action.payload.meals
            }

        case 'DELETE_USER_MEALS':
            return{
                ...state,
                userMeals: action.meals
            }

        case 'MEAL_DETAILS':
            return{
                ...state.randomMeal,
                meals: [],
                mealDetails: action.meals,
                loading: false
            }

        default:
            return state
    }
}

export default mealReducer