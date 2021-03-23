
const mealReducer = (state = {meals: [], loading: false}, action) => {
    switch(action.type){
        case 'GET_MEALS':
            return{
                ...state,
                meals: [state.meals],
                loading: true
            }

        case 'ADD_RANDOM_MEAL':
            return{
                ...state,
                meals: action.meals,
                loading: false
            }
        
        default:
            return state
    }
}

export default mealReducer