
const mealReducer = (state = {meals: [], randomMeal: [], loading: false}, action) => {
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
        default:
            return state
    }
}

export default mealReducer