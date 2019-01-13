const search = (state = {}, action) => {
    switch(action.type){
        case 'SET_SEARCH':
            return {
                ...state,
                search: action.search
            }
            default: 
                return state
    }
} 

export default search