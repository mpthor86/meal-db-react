
const mealReducer = (state = {meals: [], userMeals: [], randomMeal: [], loading: false}, action) => {
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
                meals: action.meals,
                randomMeal: [],
                loading: false
            }

        case 'CREATE_USER_MEAL':
            return{
                ...state,
                userMeals: action.meal
            }

        default:
            return state
    }
}

export default mealReducer