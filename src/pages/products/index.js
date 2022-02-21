import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { getAll, paginate, rangeProduct, Search, sortIdProduct, sortProduct } from '../../api/product.js';
import { $, $$, formatter, nextImage } from '../../untils/until';
import search from './search';
const pageProduct = {
        async render() {
            const products = (await getAll()).data;
            return /* html */ `
           ${Header.render()}
           <main>
                <section>
                    <div class="w-fit mx-auto my-8">
                        <h2 class="uppercase">
                           SẢN PHẨM
                        </h2>
                        <p class="text-[#6f6f6f] text-[11px] mt-2">
                            Trang Chủ / <span class="capitalize">Sản phẩm</span>
                        </p>
                    </div>
                    <div class="w-[1200px] mx-auto flex justify-between">
                        <div class="w-[270px]">
                            <h4 class="border-y border-slate-300 py-5 mb-4 mt-3">
                                LỌC THEO GIÁ
                            </h4>
                            <div class="max-h-44 overflow-y-scroll block text-left my-10 mb-20">
                                <div class="rangeslider">
                                    <input class="min" data-type="min" name="range_1" type="range" min="0" max="10000000" value="0" />
                                    <input class="max" data-type="max" name="range_1" type="range" min="0" max="50000000" value="50000000" />
                                    <span class="range_min light left">0₫</span>
                                    <span class="range_max light right">50.000.000 ₫</span>
                                </div>
                            </div>
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
                            <div class="flex justify-between items-center">
                                <div class="flex items-center">
                                    <span class="my-5 text-[13px]">Hiển thị 1–36 của 318 kết quả</span>
                                    <select name="" id="filter-product" class="ml-3 text-[13px] border-none outline-none">
                                        <option value="new">Mới nhất</option>
                                        <option value="old">Cũ nhất</option>
                                        <option value="asc">Giá từ thấp đến cao</option>
                                        <option value="desc">Giá từ cao đến thấp</option>
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
                                <div>
                                    <input type="search" name="" placeholder="Tìm kiếm" id="" class="outline-none py-2 border-[#979797] border-b">
                                </div>
                            </div>
                            <div class="flex justify-between flex-wrap" id="product-cate">
                            ${products
															.map(
																(product) => /* html */ `
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
                                        <img class="ImageProduct" src="${
																					product.images[0]
																				}" alt="loading..." data-index="0" alt="">
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
															)
															.join('')};
                            </div>
                            <div id="pagination" class="mx-auto w-fit mb-4 flex">
                            </div>
                        </div>
                    </div>
                </section>
            </main>
           ${Footer.render()}
        `;
	},
	async afterRender() {
		nextImage((await getAll()).data);
        const min = $(".min")
        const max = $(".max")
        const ranges = $$('input[type="range"]');
        ranges.forEach(range => {
            range.addEventListener('change',async() => {
                const type = range.dataset.type;
                if (type == 'max') {
                    const {data} = await rangeProduct(min.value,range.value)
                    $('.range_max').innerHTML = formatter.format(range.value)
                    $('#product-cate').innerHTML = search.render(data)
                    nextImage(data)
                    $('#pagination').innerHTML=''
                }
                else{
                    const {data} = await rangeProduct(range.value,max.value)
                    $('.range_min').innerHTML = formatter.format(range.value)
                    $('#product-cate').innerHTML = search.render(data)
                    nextImage(data)
                    $('#pagination').innerHTML=''
                }
            })
        });
		const limitProduct = Math.ceil((await getAll()).data.length / 9);
		for (let i = 1; i <= limitProduct; i++) {
			$('#pagination').innerHTML += /* html */ `
                ${i == 1? /* html */ `
                    <div class="mr-1">
                        <input type="radio" name="pagi" id="page${i}" value=${i} checked class="paginate hidden">
                        <label for="page${i}" class="pt">${i}</label>
                    </div>`: /* html */ `
                    <div class="mr-1">
                        <input type="radio" name="pagi" id="page${i}" value=${i} class="paginate hidden">
                        <label for="page${i}" class="pt">${i}</label>
                    </div>
                    `}
            `;
		}
		const filterproduct = $('#filter-product');
		filterproduct.addEventListener('change', async () => {
			if (filterproduct.value == 'old') {
				const { data } = await sortIdProduct('asc')
				$('#product-cate').innerHTML = search.render(data);
                nextImage(data);
			} else if (filterproduct.value == 'new') {
				const { data } = await sortIdProduct('desc');
				$('#product-cate').innerHTML = search.render(data);
                nextImage(data);
			} else if (filterproduct.value == 'asc') {
				const { data } = await sortProduct('asc');
				$('#product-cate').innerHTML = search.render(data);
                nextImage(data);
			} else {
				const { data } = await sortProduct('desc');
				$('#product-cate').innerHTML = search.render(data);
                nextImage(data);
			}
		});
		const pages = $$('.paginate');
		pages.forEach((page) => {
			page.addEventListener('click', async () => {
				$('#product-cate').innerHTML = search.render(
					(await paginate(page.value)).data
				);
				document.documentElement.scrollTop = 0;
			});
		});
		const keyword = $('input[type="search"]');
		keyword.addEventListener('keyup', async () => {
			const data = (await Search(keyword.value)).data;
			if (data.length == 0) {
				$('#product-cate').innerHTML =
					'<span class="text-red-500">Không tìm thấy sản phẩm</span>';
                $('#pagination').innerHTML=''
			} else {
				$('#product-cate').innerHTML = search.render(data);
                $('#pagination').innerHTML=''
			}
			nextImage(data);
		});
		Footer.afterRender();
	},
};
export default pageProduct;