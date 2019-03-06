import { combineReducers } from 'redux'
import currentUser from './currentUser'
import loading from './loading'
import search from './search'

const appReducer = combineReducers({
    currentUser,
    search,
    loading: false
})

const rootReducer = (state, action) => {
    if(action.type === "USER_LOGOUT"){
        state = undefined
    }
    return appReducer(state, action);
}

export default rootReducer