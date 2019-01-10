const response = (state = {}, action) => {
    debugger
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