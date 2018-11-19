export const setUser = user => ({
    type: 'SET_USER',
    user: user
})

export const logoutUser = () => {
    return ({
      type: 'USER_LOGOUT'
    })
}