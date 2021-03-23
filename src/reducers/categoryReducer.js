
const categoryReducer = (state = {categories: [], loading: false}, action) => {
    switch(action.type){
        case 'GET_CATEGORIES':
                return{
                    ...state,
                    categories: [state.categories],
                    loading: true
                }
    
            case 'ADD_CATEGORIES':
                return{
                    ...state,
                    categories: action.categories,
                    loading: false
                }

        default:
            return state
    }
}

export default categoryReducer