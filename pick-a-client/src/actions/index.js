export const setUser = user => ({
    type: 'SET_USER',
    user: user
})

export const logoutUser = () => {
    return ({
      type: 'USER_LOGOUT'
    })
}

export const setSearch = response => ({
    type: 'SET_SEARCH',
    response: response  
})