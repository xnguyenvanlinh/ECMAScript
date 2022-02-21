import { formatter } from "../../untils/until";
const search = {
        render(products) {
            return `
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
                    <img class="ImageProduct" src="${product.images[0]}" alt="loading..." data-index="0" alt="">
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
            ).join('')}
        `
    }
}
export default search;