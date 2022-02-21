import instance from './instance'
export const addCart = (cart) => {
    const url = `/carts`
    return instance.post(url, cart)
}
export const getCart = () => {
    const url = `/carts`
    return instance.get(url)
}