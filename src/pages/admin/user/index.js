import NavAdmin from "../NavAdmin";
import { $$, reRender } from "../../../untils/until";
import { getUser, removeUser } from "../../../api/user";
const Users = {
        async render() {
            return /* html */ `
           ${NavAdmin.render()}
           <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div class="text-right">
                    <a href="/admin/category/add" class="inline-flex my-[20px] justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                       Thêm người dùng
                    </a>
                </div>
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                    <tr>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            STT
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Tên khách hàng  
                        </th>
                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Phân quyền
                        </th>
                        <th scope="col" class="text-center py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Hành động
                        </th>
                    </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        ${((await getUser()).data).map((user,index) => /* html */ `
                            <tr>
                                <td class="py-4 pl-7 font-bold">
                                ${index+1}
                                </td>
                                <td class="py-4 ">
                                    <div class="flex items-center">
                                        <div class="ml-4">
                                            <div class="text-sm font-medium text-gray-900 m-w-[200px]" style="-webkit-line-clamp: 1;-webkit-box-orient: vertical;overflow: hidden;display: -webkit-box">
                                                <p class="" title="${user.email}">${user.email}</p>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td class="" >
                                    <div class="text-sm max-w-[600px]" style="-webkit-line-clamp: 3;-webkit-box-orient: vertical;overflow: hidden;display: -webkit-box;">
                                        ${user.permission=='admin'?`Admin`:`Khách hàng`}
                                    </div>
                                </td>
                                <td class="" >
                                    <div class="text-sm max-w-[600px]" style="-webkit-line-clamp: 3;-webkit-box-orient: vertical;overflow: hidden;display: -webkit-box;">
                                        ${user.name}
                                    </div>
                                </td>
                                <td class=" py-4 whitespace-nowrap text-center text-sm font-medium">
                                    <a href="/admin/users/${user.id}/edit" class="text-indigo-600 hover:text-indigo-900 px-2">
                                        Sửa
                                    </a>
                                    <button data-id="${user.id}" class="btn-delete text-red-600 font-semibold">
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
    afterRender(){
        const btns = $$('.btn-delete')
        btns.forEach(btn => {
            btn.addEventListener('click',() => {
                const id = btn.dataset.id
                if (window.confirm('Bạn có muốn xóa người dùng này không ?')) {
                    removeUser(id)
                    reRender(Users,'#root')
            }
            })
        });
    }
};
export default Users;