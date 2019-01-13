export const setUser = user => ({
    type: 'SET_USER',
    user: user
})

export const logoutUser = () => {
    return ({
      type: 'USER_LOGOUT'
    })
}

export const setSearch = search => ({
    type: 'SET_SEARCH',
    search: search  
})