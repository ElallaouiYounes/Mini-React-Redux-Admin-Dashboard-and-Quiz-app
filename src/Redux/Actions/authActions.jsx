export const login = (admin) => {
    return{
        type: 'LOGIN',
        payload: admin,
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT',
    }
}