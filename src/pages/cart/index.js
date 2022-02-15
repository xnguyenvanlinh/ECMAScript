import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { formatter } from '../../untils/until';

/* eslint-disable indent */
const Cart = {
        render() {
            const carts = JSON.parse(localStorage.getItem('cart'));

            console.log(carts)
            return /* html */ `
            ${Header.render()}
            <div class="container mx-auto mt-10">
                <div class="flex shadow-md my-10">
                <div class="w-3/4 bg-white px-10 py-10">
                    <div class="flex justify-between border-b pb-8">
                    <h1 class="font-semibold text-2xl">Giỏ hàng</h1>
                    <h2 class="font-semibold text-2xl">3 Sản phẩm</h2>
                    </div>
                    <div class="flex mt-10 mb-5">
                    <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                    <h3 class="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Số lượng</h3>
                    <h3 class="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Đơn giá</h3>
                    <h3 class="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">Tổng tiền</h3>
                    </div>
                    ${carts.map((cart) => /* html */`
                    <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                        <div class="flex w-2/5"> 
                            <div class="w-20 h-20">
                            <img class="object-cover" style="width:100px;height:100px;" src="${cart.images[0]}" alt="">
                            </div>
                            <div class="flex flex-col justify-between ml-4 flex-grow">
                            <span class="font-bold text-sm">${cart.name}</span>
                            <button id="remove-product" class="remove w-fit btn" data-id=${cart.id}>Xóa</button>
                            </div>
                        </div>
                        <div class="flex justify-center w-1/5">
                            <svg id="descrease" class="cursor-pointer descrease btn fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" data-id="${cart.id}"/>
                            </svg>
                            <input class="mx-2 border text-center w-8" type="text" value=${cart.quantity}>
                            <svg id="descrease" class="cursor-pointer descrease fill-current text-gray-600 w-3 btn" viewBox="0 0 448 512" data-id="${cart.id}">
                            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
                            </svg>
                        </div>
                        <span class="text-center w-1/5 font-semibold text-sm">${formatter.format(cart.price)}</span>
                        <span class="text-center w-1/5 font-semibold text-sm">${formatter.format(cart.price*cart.quantity)}</span>
                    </div>
                    `).join('')}
                    <a href="#" class="flex font-semibold text-indigo-600 text-sm mt-10">
                    <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
                    Tiếp tục mua hàng
                    </a>
                </div>

                <div id="summary" class="w-1/4 px-8 py-10">
                    <h1 class="font-semibold text-2xl border-b pb-8">Thanh Toán</h1>
                    <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                        <span>Total cost</span>
                        <span>$600</span>
                    </div>
                    <button class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Đặt hàng</button>
                    </div>
                </div>
                </div>
            </div>
            ${Footer.render()}
        `;
    },
    afterRender() {
        Footer.afterRender()
        const btns = document.querySelectorAll('.btn')
        console.log(btns)
        btns.forEach(btn => {
            btn.addEventListener('click', function(){
                const id = btn.dataset.id;
                if(btn.classList.contains('increase')){
                    console.log('increase')
                    // increaseQuantity(id, () => {
                        // toastr.success("Tăng số lượng thành công")
                    // })
                } else if(btn.classList.contains('decrease')){
                    console.log('decrease')

                    // decreaseQuantity(id);
                } else {
                    // removeItemInCart(id, () => {
                        // reRender(CartPage, "#content");
                    // });
                }
            })
        });
    }
};
export default Cart;