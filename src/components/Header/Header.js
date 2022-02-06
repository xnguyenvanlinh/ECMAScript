/* eslint-disable indent */
const Header = {
    render() {
        return /* html */ `
            <header class="bg-transparent py-3" id="header">
                <nav class="flex justify-between w-[1140px] mx-auto items-center">
                    <div>
                        <a href="/"><img src="../../../logo.png" class="h-[39px]" alt=""></a>
                    </div>
                    <ul class="flex px-2 ">
                        <li class="px-2 text-[#707070] py-[15px] ml-[15px] text-[15px] font-semibold hover:text-white cursor-pointer"><a href="/">Trang chủ</a></li>
                        <li class="px-2 text-[#707070] py-[15px] ml-[15px] text-[15px] font-semibold hover:text-white cursor-pointer"><a href="/category/1">Nam</a></li>
                        <li class="px-2 text-[#707070] py-[15px] ml-[15px] text-[15px] font-semibold hover:text-white cursor-pointer"><a href="/category/2">Nữ</a></li>
                        <li class="px-2 text-[#707070] py-[15px] ml-[15px] text-[15px] font-semibold hover:text-white cursor-pointer"><a href="/category/3">Cặp đôi</a></li>
                        <li class="px-2 text-[#707070] py-[15px] ml-[15px] text-[15px] font-semibold hover:text-white cursor-pointer"><a href="/category/4">Trẻ em</a></li>
                        <li class="px-2 text-[#707070] py-[15px] ml-[15px] text-[15px] font-semibold hover:text-white cursor-pointer"><a href="">Liên hệ</a></li>
                    </ul>
                </nav>
            </header>
        `;
    },
};
export default Header;