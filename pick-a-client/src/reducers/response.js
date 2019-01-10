const response = (state = {}, action) => {
    switch(action.type){
        case 'SET_SEARCH':
            return {
                ...state,
                response: action.response
            }
            default: 
                return state
    }
} 

export default response