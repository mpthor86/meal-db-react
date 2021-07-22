
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
                ...state,
                mealDetails: [],
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
                mealDetails: [],
                meals: [],
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
                ...state,
                meals: [],
                userMeals: [],
                mealDetails: action.meals,
                loading: false
            }

        case 'HOME_STATE':
            return{
                ...state,
                meals: [],
                mealDetails: [],
                userMeals: [],
            }

        default:
            return state
    }
}

export default mealReducer