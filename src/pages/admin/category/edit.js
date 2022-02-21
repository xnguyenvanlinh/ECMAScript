import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import '../../../firebase';
import NavAdmin from '../NavAdmin';
import { $ } from '../../../untils/until';
import { updateCate, getCate } from '../../../api/category';
const EditCategory = {
    async render(id) {
        const category = (await getCate(id)).data;
        console.log(category)
        return /* html */ `
            ${NavAdmin.render()}
            <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div class="text-right">
                    <a href="/admin/category" class="inline-flex my-[20px] justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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
                                    Tên danh mục
                                    </label>
                                    <div class="mt-1 flex rounded-md shadow-sm">
                                    <input type="text" value="${category.name}" name="name" id="name" class="px-[20px] py-[10px] focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Nhập tên danh mục" required>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label for="introduce" class="block text-sm font-medium text-gray-700">
                                    Giới thiệu
                                </label>
                                <div class="mt-1">
                                    <textarea required id="introduce" name="introduce" rows="3" class="px-[20px] py-[10px] shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Giới thiệu về danh mục">${category.introduce}</textarea>
                                </div>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700">
                                    Ảnh danh mục
                                </label>
                            <div class="mt-1 flex items-center">
                            <label for="imgInp" class="cursor-pointer ">
                                <img src="${category.image}" 
                                id="blah" class="object-cover h-14 w-20 py-1"/>
                            </label>
                            </div>
                            <input id="imgInp" type="file" class="hidden" accept="image/*">
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
    afterRender(id) {
        imgInp.onchange = evt => {
            const [file] = imgInp.files
            if (file) {
                blah.src = URL.createObjectURL(file)
            }
        }
        const formEdit = $('#form-edit');
        const file = $('input[type="file"]');
        formEdit.addEventListener('submit', async(e) => {
            e.preventDefault();
            const image = file.files[0]
            if (image === undefined) {
                updateCate({
                    name: $('#name').value,
                    introduce: $('#introduce').value,
                    id
                }).then(() => {
                    document.location.href = '/#/admin/category'
                });
            } else {
                const storage = getStorage();
                const storageRef = ref(storage, `images/${image.name}`);
                uploadBytes(storageRef, image).then(async() => {
                    const URLImage = await getDownloadURL(storageRef);
                    return URLImage;
                }).then((URLImage) => {
                    updateCate({
                        name: $('#name').value,
                        introduce: $('#introduce').value,
                        image: URLImage,
                        id
                    }).then(() => {
                        document.location.href = '/#/admin/category'
                    });
                });
            }
        });
    },
};
export default EditCategory;