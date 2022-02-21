import NavAdmin from '../NavAdmin';
import { $ } from '../../../untils/until';
import { getOneUser, updateUser } from '../../../api/user';
const EditUser = {
    async render(id) {
        const { data: user } = await getOneUser(id);
        return /* html */ `
            ${NavAdmin.render()}
            <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div class="text-right">
                    <a href="/admin/users" class="inline-flex my-[20px] justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mr-[10px] mt-[3px] h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        Quay lại 
                    </a>
                </div>
                <form action="" id="form-edit" >
                    <div class="shadow sm:rounded-md sm:overflow-hidden">
                        <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                        <div class="grid grid-cols-3 gap-6">
                            <div class="col-span-3 sm:col-span-2">
                                <label for="company-website" class="block text-sm font-medium text-gray-700">
                                Email
                                </label>
                                <div class="mt-1 flex rounded-md shadow-sm">
                                <input type="text" disabled value="${user.email}" name="email" id="email" class="px-[20px] py-[10px] focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Nhập tên sản phẩm">
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-cols-3 gap-6">
                            <div class="col-span-3 sm:col-span-2">
                                <label for="company-website" class="block text-sm font-medium text-gray-700">
                                Tên
                                </label>
                                <div class="mt-1 flex rounded-md shadow-sm">
                                <input type="text" value="${user.name}" name="name" id="name" class="px-[20px] py-[10px] focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Nhập tên sản phẩm">
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-cols-3 gap-6">
                            <div class="col-span-3 sm:col-span-2">
                                <label for="company-website" class="block text-sm font-medium text-gray-700">
                                Phân quyền
                                </label>
                                <div class="mt-1 flex rounded-md shadow-sm">
                                <select disabled class="px-[20px] py-[10px] uppercase focus:ring-indigo-500 focus:border-indigo-500 flex-1 block rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Nhập tên sản phẩm" id="permission">
                                    <option value="${user.permission}">${user.permission == 'Admin' ? 'Admin' : 'Thành viên'}</option>
                                </select>
                                </div>
                            </div>
                        </div>
                        <div class="px-4 py-3 text-right sm:px-6">
                            <button type="submit"  class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Sửa
                            </button>
                        </div>
                    </div>
            </form>
            </div>
        `;
    },
    async afterRender(id) {
        const { data: user } = await getOneUser(id);
        $('#form-edit').addEventListener('submit', async (e) => {
            e.preventDefault()
            try {
                const { data } = await updateUser({
                    id: id,
                    email: user.email,
                    password: user.password,
                    name: $('#name').value,
                    permission: user.permission
                })
                console.log(data)
            } catch (error) {
                console.log(error.response.data)
            }

        });
    },
};
export default EditUser;