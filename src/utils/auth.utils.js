export const setJwtToken = (token) => localStorage.setItem('token', token)

export const getJwtToken = () => localStorage.getItem('token')

export const unsetJwtToken = () => localStorage.setItem('token', null)
