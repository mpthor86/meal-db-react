const mealReducer = (state = {meals: [], loading: false}, action) => {
    switch(action.type){
        case 'GET_CATEGORIES':
            return{
                ...state,
                meals: [state.meals],
                loading: true
            }

        case 'ADD_CATEGORIES':
            return{
                ...state,
                meals: action.strCategory,
                loading: false
            }

        default:
            return state
    }
}

export default mealReducer