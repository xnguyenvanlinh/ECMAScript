/* eslint-disable indent */
import { checkUser } from "../../untils/until";
const Header = {
        render() {
            return /* html */ `
            <header class="bg-transparent py-3" id="header">
                <nav class="flex justify-between w-[1140px] mx-auto items-center">
                    <div>
                        <a href="/#/"><img src="../../../logo.png" class="h-[39px]" alt=""></a>
                    </div>
                    <ul class="flex px-2">
                        <li class="px-2 text-[#707070] py-[15px] ml-[15px] text-[15px] font-semibold hover:text-white cursor-pointer"><a href="/#/">Trang chủ</a></li>
                        <li class="px-2 text-[#707070] py-[15px] ml-[15px] text-[15px] font-semibold hover:text-white cursor-pointer"><a href="/#/products">Sản phẩm</a></li>
                        <li class="group relative px-2 text-[#707070] py-[15px] ml-[15px] text-[15px] font-semibold hover:text-white cursor-pointer">
                        Danh mục
                        <div class="absolute pt-16 t-0 z-50 group-hover:block hidden" style="background-image: linear-gradient(to right, rgb(1, 2, 12), rgb(2, 2, 10), rgb(15, 15, 16), rgb(6, 0, 14), rgb(14, 3, 23)) !important;">
                            <ul class="-mt-8 w-[100px]">
                                <li class="pl-2 inline-block text-[#707070] py-[15px] ml-[15px] text-[15px] font-semibold hover:text-white cursor-pointer"><a href="/#/category/1">Nam</a></li>
                                <li class="pl-2 inline-block text-[#707070] py-[15px] ml-[15px] text-[15px] font-semibold hover:text-white cursor-pointer"><a href="/#/category/2">Nữ</a></li>
                                <li class="pl-2 inline-block text-[#707070] py-[15px] ml-[15px] text-[15px] font-semibold hover:text-white cursor-pointer"><a href="/#/category/3">Cặp đôi</a></li>
                                <li class="pl-2 inline-block text-[#707070] py-[15px] ml-[15px] text-[15px] font-semibold hover:text-white cursor-pointer"><a href="/#/category/4">Trẻ em</a></li>
                            </ul>
                        </div>
                        </li>
                        <li class="px-2 text-[#707070] py-[15px] ml-[15px] text-[15px] font-semibold hover:text-white cursor-pointer"><a href="/#/cart">Giỏ hàng</a></li>
                        ${checkUser()==false?
                            /*html*/`
                                <li class="px-2 text-[#707070] py-[15px] ml-[15px] text-[15px] font-semibold hover:text-white cursor-pointer"><a href="/#/signin">Đăng nhập/ Đăng ký</a></li>
                            `
                        :/*html*/`
                        <li class="relative px-2 text-[#707070] py-[15px] group ml-[15px] text-[15px] font-semibold hover:text-white cursor-pointer">
                        ${(checkUser().email).slice(0,-10)}
                            <div class="absolute pt-16 t-0 z-50 group-hover:block hidden" style="background-image: linear-gradient(to right, rgb(1, 2, 12), rgb(2, 2, 10), rgb(15, 15, 16), rgb(6, 0, 14), rgb(14, 3, 23)) !important;">
                                <ul class="-mt-8 w-[100px]">
                                    <li class="pl-2 inline-block text-[#707070] py-[15px] ml-[15px] text-[15px] font-semibold hover:text-white cursor-pointer"><a href="/#/information">Thông tin</a></li>
                                    ${checkUser().permission=='admin'? /* html */`
                                    <li class="pl-2 inline-block text-[#707070] py-[15px] ml-[15px] text-[15px] font-semibold hover:text-white cursor-pointer"><a href="/#/admin">Quản trị</a></li>
                                    `:''
                                    }
                                    <li id="logout" class="pl-2 inline-block text-[#707070] py-[15px] ml-[15px] text-[15px] font-semibold hover:text-white cursor-pointer">
                                   Đăng xuất
                                    </li>
                                </ul>
                            </div>
                        </li>`
                        }
                    </ul>
                </nav>
            </header>
        `;
    },
    afterRender(){
        const logout = document.querySelector('#logout')
        if (logout) {
            logout.addEventListener('click',() => {
                localStorage.removeItem('user');
                location.reload()
            })
        }
    }
};
export default Header;