import { getAll, remove } from "../../src/api/post";
import NavAdmin from "./NavAdmin";

/* eslint-disable indent */
const Products = {
        async render() {
            const { data } = await getAll();
            return /* html */ `
            ${NavAdmin.render()}
            <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div class="text-right">
                    <a href="/admin/products/add" class="inline-flex my-[20px] justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Thêm sản phẩm
                    </a>
                </div>
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                    <tr>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Sản phẩm
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Sản phẩm
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Chi Tiết
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Số Lượng
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Giá
                        </th>
                        <th scope="col" class="text-center py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Hành động
                        </th>
                       
                    </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        ${data.map((product,index) => /* html */ `
                        <tr>
                            <td class="py-4 text-center font-bold">
                             ${index+1}
                            </td>
                            <td class="py-4 whitespace-nowrap">
                                <div class="flex items-center">
                                    <div class="flex-shrink-0 h-10 w-10">
                                        <img class="h-10 w-10 rounded-full" src="${product.img}" alt="">
                                    </div>
                                    <div class="ml-4">
                                        <div class="text-sm font-medium text-gray-900">
                                            ${product.name}
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td class="py-4 m-w-[200px]">
                                <div class="text-sm text-gray-500 ">
                                    ${product.desc}
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    ${product.quantity}
                                </span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                ${product.price} $
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <a href="/admin/product/${product.id}/edit" class="text-indigo-600 hover:text-indigo-900 px-2">
                                    Sửa
                                </a>
                                <button data-id="${product.id}" class="btn-delete text-red-600 font-semibold">
                                    Xóa
                                </button>
                            </td>
                        </tr>
                        `).join("")}
                    </tbody>
                </table>
            </div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        `;
    },
    afterRender() {
        const btns = document.querySelectorAll(".btn-delete");
        btns.forEach((btn) => {
            btn.addEventListener("click", () => {
                const { id } = btn.dataset;
                // eslint-disable-next-line no-alert
                const confirm = window.confirm("Bạn có chắc chắn muốn xóa không ?");
                if (confirm) {
                    remove(id)
                        .then(() => {
                            // eslint-disable-next-line no-restricted-globals
                            location.reload();
                        });
                }
            });
        });
    },
};
export default Products;