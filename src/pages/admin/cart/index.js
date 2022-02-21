import NavAdmin from "../NavAdmin";
import { $$, reRender } from "../../../untils/until";
import { getCart } from "../../../api/carts";
const ListCart = {
    async render() {
        const { data: carts } = await getCart();
        return /* html */ `
           ${NavAdmin.render()}
           <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                    <tr>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            STT
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Khách hàng
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Sản phẩm
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Tổng tiền
                        </th>
                        <th scope="col" class="text-center py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Hành động
                        </th>
                    </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        ${carts.map((cart, index) => /* html */ `
                            <tr>
                                <td class="py-4 pl-7 font-bold">
                                ${index + 1}
                                </td>
                                <td class="py-4 ">
                                    <div class="flex items-center">
                                        <div class="ml-4">
                                            <div class="text-sm font-medium text-gray-900 m-w-[200px]" style="-webkit-line-clamp: 1;-webkit-box-orient: vertical;overflow: hidden;display: -webkit-box">
                                                <p class="uppercase" title="${cart.email}">${cart.email}</p>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                
                                <td class="" >
                                    ${cart.cart.map((item) => /* html */`
                                        <div class="text-sm max-w-[600px]" style="-webkit-line-clamp: 3;-webkit-box-orient: vertical;overflow: hidden;display: -webkit-box;">
                                            <div class="flex items-center">
                                                <img src="${item.images[0]}" width="50px" height="50px" alt="">
                                                <p>${item.name}</p>
                                            </div>
                                        </div>`)
                                    .join('')}
                                </td>
                                <td class="" >
                                    ${(function fun() {
                                        
                                        console.log(cart.cart)
                                    //    for (let i = 0; i < cart.cart.length; i++) {
                                    //        console.log('price',cart)
                                    //    }
                                    })()}
                                    <div class="text-sm max-w-[600px]" style="-webkit-line-clamp: 3;-webkit-box-orient: vertical;overflow: hidden;display: -webkit-box;">
                                        <div class="flex items-center">
                                            
                                        </div>
                                    </div>
                                </td>
                                <td class="" >
                                    <div class="text-sm max-w-[600px]" style="-webkit-line-clamp: 3;-webkit-box-orient: vertical;overflow: hidden;display: -webkit-box;">
                                        ${cart.product}
                                    </div>
                                </td>
                                <td class=" py-4 whitespace-nowrap text-center text-sm font-medium">
                                    <a href="/admin/category/${cart.id}/edit" class="text-indigo-600 hover:text-indigo-900 px-2">
                                        Sửa
                                    </a>
                                    <button data-id="${cart.id}" class="btn-delete text-red-600 font-semibold">
                                        Xóa
                                    </button>
                                </td>
                            </tr>
                        `).join("")}
                    </tbody>
                </table>
            </div>
        `;
    },
    afterRender() {
        const btns = $$('.btn-delete')
        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.dataset.id
                if (window.confirm('Bạn có muốn xóa danh mục này không ?')) {
                    removeCate(id);
                    reRender(Category, '#root')
                }
            })
        });
    }
};
export default ListCart;