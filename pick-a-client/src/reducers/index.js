import { combineReducers } from 'redux'
import currentUser from './currentUser'
import response from './response'

const appReducer = combineReducers({
    currentUser,
    response
})

const rootReducer = (state, action) => {
    if(action.type === "USER_LOGOUT"){
        state = undefined
    }
    return appReducer(state, action);
}

export default rootReducer