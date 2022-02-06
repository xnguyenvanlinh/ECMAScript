import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { add } from '../../api/product';
import '../../firebase';
import NavAdmin from './NavAdmin';
import { $ } from '../../untils/until';
import { getAllCate } from '../../api/category';
const AddProduct = {
        async render() {
            const categories = (await getAllCate()).data;
            return /* html */ `
            ${NavAdmin.render()}
            <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div class="text-right">
                    <a href="/admin/products" class="inline-flex my-[20px] justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mr-[10px] mt-[3px] h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        Quay lại 
                    </a>
                </div>
                <form action="" id="form-add" >
                    <div class="shadow sm:rounded-md sm:overflow-hidden">
                        <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                            <div class="grid grid-cols-3 gap-6">
                                <div class="col-span-3 sm:col-span-2">
                                    <label for="company-website" class="block text-sm font-medium text-gray-700">
                                    Danh Mục
                                    </label>
                                    <div class="mt-1 flex rounded-md shadow-sm">
                                    <select class="px-[20px] py-[10px] uppercase focus:ring-indigo-500 focus:border-indigo-500 flex-1 block rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Nhập tên sản phẩm" id="cateId">
                                        ${categories.map((category) => /* html */`
                                        <option value="${category.id}" >${category.name}</option>
                                        `
                                        ).join('')}
                                    </select>
                                    </div>
                                </div>
                            </div>
                            <div class="grid grid-cols-3 gap-6">
                                <div class="col-span-3 sm:col-span-2">
                                    <label for="company-website" class="block text-sm font-medium text-gray-700">
                                    Tên
                                    </label>
                                    <div class="mt-1 flex rounded-md shadow-sm">
                                    <input type="text" value="" name="name" id="name" class="px-[20px] py-[10px] focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Nhập tên sản phẩm">
                                    </div>
                                </div>
                            </div>
                            <div class="grid grid-cols-3 gap-6">
                                <div class="col-span-3 sm:col-span-2">
                                    <label for="company-website" class="block text-sm font-medium text-gray-700">
                                    Giá 
                                    </label>
                                    <div class="mt-1 flex rounded-md shadow-sm">
                                    <input type="text" value="" name="price" id="price" class="px-[20px] py-[10px] focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Nhập tên sản phẩm">
                                    </div>
                                </div>
                            </div>
                            <div class="grid grid-cols-3 gap-6">
                                <div class="col-span-3 sm:col-span-2">
                                    <label for="company-website" class="block text-sm font-medium text-gray-700">
                                    Số lượng
                                    </label>
                                    <div class="mt-1 flex rounded-md shadow-sm">
                                    <input type="text" value="" name="quantity" id="quantity" class="px-[20px] py-[10px] focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Nhập tên sản phẩm">
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label for="desc" class="block text-sm font-medium text-gray-700">
                                    Chi tiết sản phẩm
                                </label>
                                <div class="mt-1">
                                    <textarea id="desc" name="desc" rows="3" class="px-[20px] py-[10px] shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Vui lòng nhập chi tiết sản phẩm"></textarea>
                                </div>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700">
                                    Ảnh sản phẩm
                                </label>
                            <div class="mt-1 flex items-center" id="preview">
                            </div>
                            <label for="imgInp" class="cursor-pointer ml-5 mt-5 inline-block bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Chọn ảnh
                            </label>
                            <input id="imgInp" type="file" class="hidden" multiple="multiple">
                        </div>
                        <div class="px-4 py-3 text-right sm:px-6">
                            <button type="submit"  class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Thêm
                            </button>
                        </div>
                    </div>
            </form>
            </div>
        `;
    },
    afterRender() {
        // const
        imgInp.onchange = (evt) => {
            const preview = $('#preview');
            const file = [...imgInp.files];
            preview.innerHTML = file
                .map((file) => /* html */ `
                <span class="mr-2">
                <img src="${URL.createObjectURL(file)}" 
                id="preview" class="rounded-full object-cover h-12 w-12"/>
                </span>`)
                .join('');
        };
        const formAdd = $('#form-add');
        const file = document.querySelector('input[type="file"]');
        formAdd.addEventListener('submit', async(e) => {
            e.preventDefault();
            const images = [...file.files];
            const imageCollection = [];
            const pushImage = (image) => {
                const storage = getStorage();
                const storageRef = ref(storage, `images/${image.name}`);
                return new Promise((resolve) => {
                    uploadBytes(storageRef, image).then(async() => {
                        const URLImage = await getDownloadURL(
                            ref(storage, `images/${image.name}`)
                        );
                        resolve(URLImage);
                    });
                });
            };
            for (let i = 0; i < images.length; i++) {
                await pushImage(images[i]).then((url) => {
                    imageCollection.push(url);
                });
            }
            add({
                name: $('#name').value,
                price: $('#price').value,
                quantity: $('#quantity').value,
                desc: $('#desc').value,
                images: imageCollection,
                cateId:$('#cateId').value
            }).then(() => {
                window.location.href = '/admin/products';
            });
        });
    },
};
export default AddProduct;