import instance from "./instance";
export const getAllCate = () => {
    const url = `/categories/`;
    return instance.get(url);
}
export const getCate = (id) => {
    const url = `/categories/${id}`;
    return instance.get(url);
}
export const updateCate = (post) => {
    const url = `/categories/${post.id}`;
    return instance.patch(url, post);
}
export const addCate = (post) => {
    const url = `/categories/`;
    return instance.post(url, post);
}
export const removeCate = (id) => {
    const url = `/categories/${id}`;
    return instance.delete(url);
}