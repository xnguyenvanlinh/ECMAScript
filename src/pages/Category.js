import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { formatter, $$ } from '../untils/until';
import { getCate } from '../api/category';
import { getAll } from '../api/product';

/* eslint-disable indent */
const Categories = {
        async render(id) {
            const category = (await getCate(id)).data;
            console.log(typeof id)
            const products = (await getAll()).data
            return /* html */ `
            ${Header.render()}
            <main>
                <section>
                    <div class="w-fit mx-auto my-8">
                        <h2 class="uppercase">
                            ${category.name}
                        </h2>
                        <p class="text-[#6f6f6f] text-[11px] mt-2">
                            Trang Chủ / <span class="capitalize">${
															category.name
														}</span>
                        </p>
                    </div>
                    <div class="w-[1200px] mx-auto flex justify-between">
                        <div class="w-[270px]">
                            <h4 class="border-y border-slate-300 py-5 mb-4 mt-3">
                                THƯƠNG HIỆU
                            </h4>
                            <div class="max-h-44 overflow-y-scroll block text-left">
                                <label for="" class="block mb-1">
                                    <input type="checkbox" name="" id="">
                                    <span class="text-[14px]">Baby-G <span class="inline-block p-[2px] border-slate-400 text-slate-400 text-[9px] border-[1px]">55</span></span>
                                </label>
                                <label for="" class="block mb-1">
                                    <input type="checkbox" name="" id="">
                                    <span class="text-[14px]">Bulova <span class="inline-block p-[2px] border-slate-400 text-slate-400 text-[9px] border-[1px]">323</span></span>
                                </label>
                                <label for="" class="block mb-1">
                                    <input type="checkbox" name="" id="">
                                    <span class="text-[14px]">Calvin Klein (CK) <span class="inline-block p-[2px] border-slate-400 text-slate-400 text-[9px] border-[1px]">399</span></span>
                                </label>
                                <label for="" class="block mb-1">
                                    <input type="checkbox" name="" id="">
                                    <span class="text-[14px]">Candino <span class="inline-block p-[2px] border-slate-400 text-slate-400 text-[9px] border-[1px]">279</span></span>
                                </label>
                                <label for="" class="block mb-1">
                                    <input type="checkbox" name="" id="">
                                    <span class="text-[14px]">Casio <span class="inline-block p-[2px] border-slate-400 text-slate-400 text-[9px] border-[1px]">2585</span></span>
                                </label>
                                <label for="" class="block mb-1">
                                    <input type="checkbox" name="" id="">
                                    <span class="text-[14px]">Citizen <span class="inline-block p-[2px] border-slate-400 text-slate-400 text-[9px] border-[1px]">1494</span></span>
                                </label>
                                <label for="" class="block mb-1">
                                    <input type="checkbox" name="" id="">
                                    <span class="text-[14px]">Daniel Wellington (DW) <span class="inline-block p-[2px] border-slate-400 text-slate-400 text-[9px] border-[1px]">343</span></span>
                                </label>
                                <label for="" class="block mb-1">
                                    <input type="checkbox" name="" id="">
                                    <span class="text-[14px]">Dây Da HIRSCH <span class="inline-block p-[2px] border-slate-400 text-slate-400 text-[9px] border-[1px]">41</span></span>
                                </label>
                                <label for="" class="block mb-1">
                                    <input type="checkbox" name="" id="">
                                    <span class="text-[14px]">Dây Da MASAMU <span class="inline-block p-[2px] border-slate-400 text-slate-400 text-[9px] border-[1px]">14</span></span>
                                </label>
                                <label for="" class="block mb-1">
                                    <input type="checkbox" name="" id="">
                                    <span class="text-[14px]">Dây Da ZRC <span class="inline-block p-[2px] border-slate-400 text-slate-400 text-[9px] border-[1px]">35</span></span>
                                </label>
                                <label for="" class="block mb-1">
                                    <input type="checkbox" name="" id="">
                                    <span class="text-[14px]">Doxa <span class="inline-block p-[2px] border-slate-400 text-slate-400 text-[9px] border-[1px]">254</span></span>
                                </label>
                                <label for="" class="block mb-1">
                                    <input type="checkbox" name="" id="">
                                    <span class="text-[14px]">Fossil <span class="inline-block p-[2px] border-slate-400 text-slate-400 text-[9px] border-[1px]">545</span></span>
                                </label>
                            </div>
                            <h4 class="border-y border-slate-300 py-5 mb-4 mt-3">
                                CHẤT LIỆU DÂY
                            </h4>
                            <div class="max-h-44 overflow-y-scroll block text-left">
                                <label for="" class="block mb-1">
                                    <input type="checkbox" name="" id="">
                                    <span class="text-[14px]">Dây Da <span class="inline-block p-[2px] border-slate-400 text-slate-400 text-[9px] border-[1px]">129</span></span>
                                </label>
                                <label for="" class="block mb-1">
                                    <input type="checkbox" name="" id="">
                                    <span class="text-[14px]">Dây Kim Loại <span class="inline-block p-[2px] border-slate-400 text-slate-400 text-[9px] border-[1px]">317</span></span>
                                </label>
                                <label for="" class="block mb-1">
                                    <input type="checkbox" name="" id="">
                                    <span class="text-[14px]">Dây Lưới <span class="inline-block p-[2px] border-slate-400 text-slate-400 text-[9px] border-[1px]">16</span></span>
                                </label>
                                <label for="" class="block mb-1">
                                    <input type="checkbox" name="" id="">
                                    <span class="text-[14px]">Dây Vải <span class="inline-block p-[2px] border-slate-400 text-slate-400 text-[9px] border-[1px]">5</span></span>
                                </label>
                                <label for="" class="block mb-1">
                                    <input type="checkbox" name="" id="">
                                    <span class="text-[14px]">Dây Da Cá Sấu <span class="inline-block p-[2px] border-slate-400 text-slate-400 text-[9px] border-[1px]">2</span></span>
                                </label>
                                <label for="" class="block mb-1">
                                    <input type="checkbox" name="" id="">
                                    <span class="text-[14px]">Dây Nhựa / Cao Su <span class="inline-block p-[2px] border-slate-400 text-slate-400 text-[9px] border-[1px]">84</span></span>
                                </label>
                                <label for="" class="block mb-1">
                                    <input type="checkbox" name="" id="">
                                    <span class="text-[14px]">Dây Đá / Khoáng <span class="inline-block p-[2px] border-slate-400 text-slate-400 text-[9px] border-[1px]">1</span></span>
                                </label>
                            </div>
                            <h4 class="border-y border-slate-300 py-5 mb-4 mt-3 ">
                                CHẤT LIỆU MẶT KÍNH
                            </h4>
                            <div class="max-h-44 overflow-y-scroll block text-left hidden-scroll">
                                <label for="" class="block mb-1">
                                    <input type="checkbox" name="" id="">
                                    <span class="text-[14px]">Kính Cứng <span class="inline-block p-[2px] border-slate-400 text-slate-400 text-[9px] border-[1px]">374</span></span>
                                </label>
                                <label for="" class="block mb-1">
                                    <input type="checkbox" name="" id="">
                                    <span class="text-[14px]">Kính Sapphire <span class="inline-block p-[2px] border-slate-400 text-slate-400 text-[9px] border-[1px]">149</span></span>
                                </label>
                                <label for="" class="block mb-1">
                                    <input type="checkbox" name="" id="">
                                    <span class="text-[14px]">Kính Nhựa <span class="inline-block p-[2px] border-slate-400 text-slate-400 text-[9px] border-[1px]">13</span></span>
                                </label>
                            </div>
                            <h4 class="border-y border-slate-300 py-5 mb-4 mt-3 ">
                                MÀU MẶT SỐ
                            </h4>
                            <div class="max-h-44 overflow-y-scroll block text-left">
                                <label for="" class="block mb-1">
                                    <input type="checkbox" name="" id="">
                                    <span class="text-[14px]">Trắng <span class="inline-block p-[2px] border-slate-400 text-slate-400 text-[9px] border-[1px]">374</span></span>
                                </label>
                                <label for="" class="block mb-1">
                                    <input type="checkbox" name="" id="">
                                    <span class="text-[14px]">Đen <span class="inline-block p-[2px] border-slate-400 text-slate-400 text-[9px] border-[1px]">149</span></span>
                                </label>
                                <label for="" class="block mb-1">
                                    <input type="checkbox" name="" id="">
                                    <span class="text-[14px]">Vàng <span class="inline-block p-[2px] border-slate-400 text-slate-400 text-[9px] border-[1px]">13</span></span>
                                </label>
                                <label for="" class="block mb-1">
                                    <input type="checkbox" name="" id="">
                                    <span class="text-[14px]">Xanh <span class="inline-block p-[2px] border-slate-400 text-slate-400 text-[9px] border-[1px]">13</span></span>
                                </label>
                                <label for="" class="block mb-1">
                                    <input type="checkbox" name="" id="">
                                    <span class="text-[14px]">Xám nâu <span class="inline-block p-[2px] border-slate-400 text-slate-400 text-[9px] border-[1px]">13</span></span>
                                </label>
                                <label for="" class="block mb-1">
                                    <input type="checkbox" name="" id="">
                                    <span class="text-[14px]">Xà cừ <span class="inline-block p-[2px] border-slate-400 text-slate-400 text-[9px] border-[1px]">13</span></span>
                                </label>
                                <label for="" class="block mb-1">
                                    <input type="checkbox" name="" id="">
                                    <span class="text-[14px]">Đính Đá <span class="inline-block p-[2px] border-slate-400 text-slate-400 text-[9px] border-[1px]">13</span></span>
                                </label>
                            </div>
                            <h4 class="border-y border-slate-300 py-5 mb-4 mt-3 ">
                                HÌNH DẠNG MẶT SỐ
                            </h4>
                            <div class="max-h-44 overflow-y-scroll block text-left hidden-scroll">
                                <label for="" class="block mb-1">
                                    <input type="checkbox" name="" id="">
                                    <span class="text-[14px]">Tròn <span class="inline-block p-[2px] border-slate-400 text-slate-400 text-[9px] border-[1px]">496</span></span>
                                </label>
                                <label for="" class="block mb-1">
                                    <input type="checkbox" name="" id="">
                                    <span class="text-[14px]">Vuông <span class="inline-block p-[2px] border-slate-400 text-slate-400 text-[9px] border-[1px]">16</span></span>
                                </label>
                                <label for="" class="block mb-1">
                                    <input type="checkbox" name="" id="">
                                    <span class="text-[14px]">Đặc Biệt <span class="inline-block p-[2px] border-slate-400 text-slate-400 text-[9px] border-[1px]">22</span></span>
                                </label>
                                <label for="" class="block mb-1">
                                    <input type="checkbox" name="" id="">
                                    <span class="text-[14px]">Chữ Nhật <span class="inline-block p-[2px] border-slate-400 text-slate-400 text-[9px] border-[1px]">2</span></span>
                                </label>
                            </div>
                            <h4 class="border-y border-slate-300 py-5 mb-4 mt-3 ">
                                MỨC CHỐNG NƯỚC
                            </h4>
                            <div class="max-h-44 overflow-y-scroll block text-left hidden-scroll">
                                <label for="" class="block mb-1">
                                    <input type="checkbox" name="" id="">
                                    <span class="text-[14px]">Đi Mưa Nhỏ (3 ATM)</span>
                                </label>
                                <label for="" class="block mb-1">
                                    <input type="checkbox" name="" id="">
                                    <span class="text-[14px]">Đi Tắm (5 ATM)</span>
                                </label>
                                <label for="" class="block mb-1">
                                    <input type="checkbox" name="" id="">
                                    <span class="text-[14px]">Đi Bơi (10 ATM)</span>
                                </label>
                                <label for="" class="block mb-1">
                                    <input type="checkbox" name="" id="">
                                    <span class="text-[14px]">Chữ Nhật </span>
                                </label>
                            </div>
                            <div class="clear-filter">
                                <label class="my-6 text-white cursor-pointer px-5 py-3 hover:bg-red-500 bg-slate-400 flex justify-center items-center">
                                    <input type="checkbox" name="" id="" class="hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
                                    </svg> Clear Filter
                                </label>
                            </div>
                        </div>
                        <div class="w-[870px]">
                            <img src="${category.image}" alt="">
                            <blockquote class="text-[13px] italic my-5">
                            ${category.introduce}
                            </blockquote>
                            <div class="flex items-center">
                                <span class="my-5 text-[13px]">Hiển thị 1–36 của 318 kết quả</span>
                                <select name="" id="" class="ml-3 text-[13px] border-none outline-none">
                                    <option value="Thứ tự theo điểm đánh giá">Thứ tự theo điểm đánh giá</option>
                                    <option value="Thứ tự theo mức độ phổ biến">Thứ tự theo mức độ phổ biến</option>
                                    <option value="">Mới nhất</option>
                                    <option value="">Cũ nhất</option>
                                    <option value="">Giá từ thấp đến cao</option>
                                </select>
                                <input type="radio" class="hidden" name="view" id="view-grid" value="grid" checked>
                                <label for="view-grid" class="ml-3 view-grid">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer h-4 w-4 text-[#6f6f6f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                    </svg>
                                </label>
                                <input type="radio" class="hidden" name="view" id="view-list-item" value="item">
                                <label for="view-list-item" class="ml-3 view-list-item">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer h-4 w-4 text-[#6f6f6f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                    </svg>
                                </label>
                            </div>
                            <div class="flex justify-between flex-wrap" id="product-cate">
                            ${products.map((product) => /* html */ `
                                <div class="product-cate text-center pb-4 mb-[30px]">
                                    <button class="arrow-left">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>
                                    <button class="arrow-right">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                    <a href="/products/${product.id}">
                                        <img class="ImageProduct" src="${product.images[0]}" data-index="0" alt="">
                                    </a>
                                    <div class="absolute" style="top:65%;left:0px;">
                                        <p class="text-[11px] count-image bg-white px-2 py-1">
                                            1/${product.images.length}
                                        </p>
                                    </div>
                                    <a 
                                    href="/products/${product.id}"
                                    class="hover:text-[#990000] cursor-pointer hover:underline">
                                        <p class="text-[14px] px-2">
                                        ${product.name}
                                        </p>
                                    </a>
                                    <span class="text-[14px]">
                                    ${formatter.format(product.price)}</span>
                                </div>`
								)};
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            ${Footer.render()}
            `;
	},
	async afterRender() {
		Footer.afterRender();
		const products = (await getAll()).data;
		const btnsPrevImage = $$('.arrow-left');
		const btnsNextImage = $$('.arrow-right');
		const ImageProduct = $$('.ImageProduct');
		const countImage = $$('.count-image');
		btnsNextImage.forEach((btn, indexBtn) => {
			btn.addEventListener('click', () => {
				var currentImage = Number(ImageProduct[indexBtn].dataset.index);
				const lengthImage = products[indexBtn].images.length;
				currentImage++;
				if (currentImage > lengthImage - 1) {
					currentImage = 0;
					ImageProduct[indexBtn].src = products[indexBtn].images[currentImage];
					ImageProduct[indexBtn].dataset.index = currentImage;
					countImage[indexBtn].innerHTML = `${currentImage + 1}/${lengthImage}`;
				} else {
					ImageProduct[indexBtn].src = products[indexBtn].images[currentImage];
					ImageProduct[indexBtn].dataset.index = currentImage;
					countImage[indexBtn].innerHTML = `${currentImage + 1}/${lengthImage}`;
				}
			});
		});
		btnsPrevImage.forEach((btn, indexBtn) => {
			btn.addEventListener('click', () => {
				var currentImage = Number(ImageProduct[indexBtn].dataset.index);
				const lengthImage = products[indexBtn].images.length;
				currentImage--;
				if (currentImage < 0) {
					currentImage = lengthImage - 1;
					ImageProduct[indexBtn].src = products[indexBtn].images[currentImage];
					ImageProduct[indexBtn].dataset.index = currentImage;
					countImage[indexBtn].innerHTML = `${currentImage + 1}/${lengthImage}`;
				} else {
					ImageProduct[indexBtn].src = products[indexBtn].images[currentImage];
					ImageProduct[indexBtn].dataset.index = currentImage;
					countImage[indexBtn].innerHTML = `${currentImage + 1}/${lengthImage}`;
				}
			});
		});
	},
};
export default Categories;