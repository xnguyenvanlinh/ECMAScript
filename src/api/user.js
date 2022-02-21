import instance from './instance';
export const signin = (user) => {
    const url = `/signin`
    return instance.post(url, user)
};
export const signup = (user) => {
    const url = `/signup`
    return instance.post(url, user)
};
export const getUser = () => {
    const url = `/users`
    return instance.get(url)
}
export const removeUser = (id) => {
    const url = `/users/${id}`
    return instance.delete(url)
}
export const updateUser = (user)=>{
    const url = `/users/${user.id}`
    return instance.put(url)
}
export const getOneUser = (id) => {
    const url = `/users/${id}`
    return instance.get(url)
}