let cart = [];
if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'));
}

export const addToCart = (newProduct) => {
    const existProduct = cart.find((item) => item.id === newProduct.id);
    if (!existProduct) {
        cart.push(newProduct);
    } else {
        existProduct.quantity += Number(newProduct.quantity);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
};
export const removeCart = () => {
    return localStorage.removeItem('cart');
}
export const increaseQuantity = (id, next) => {
    cart.find((item) => item.id === id).quantity++;
    console.log(id)
    localStorage.setItem('cart', JSON.stringify(cart));
    next();
};
export const decreaseQuantity = (id) => {
    const currentProduct = cart.find((item) => item.id === id);
    currentProduct.quantity--;
    if (currentProduct.quantity < 1) {
        const confirm = window.confirm('Bạn có muốn xóa sản phẩm này khỏi giỏ hàng không ?');
        if (confirm) {
            cart = cart.filter((item) => item.id != id);
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
};
export const removeItemInCart = (id, next) => {
    const confirm = window.confirm('Bạn có muốn xóa sản phẩm này khỏi giỏ hàng không ?');
    if (confirm) {
        cart = cart.filter((item) => item.id !== id);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    next();
};