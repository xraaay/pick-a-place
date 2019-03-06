const loading = (state = {}, action) => {
    switch(action.type){
        case "SET_LOADING":
            return {
                ...state,
                user: action.loading
            }
        default:
            return state
    }
}

export default loading