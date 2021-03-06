import Header from '../components/Header/Header';
import { formatter, nextImage } from '../untils/until';
import Footer from '../components/Footer/Footer';
import { getAll, listProductOfCate } from '../api/product';
/* eslint-disable indent */
const HomePage = {
        async render() {
            return /* html */ `
            ${Header.render()}
            <main>
                <section class="background-img relative block w-full pt-[100px] pb-[160px]">
                    <div class="flex items-center w-[1140px] mx-auto justify-between">
                        <div class="w-[540px] z-10">
                            <h1 class="text-white font-medium text-[42px] leading-[60px] mb-[25px]">
                                <span class="font-bold text-[#ed1c24]">Colorful</span> Screen, Smart interactions
                            </h1>
                            <p class="text-white font-medium text-[19px] mb-5">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                            <ul class="py-4">
                                <li class="text-center text-white inline-block text-[13px] w-[120px]">
                                    <div class="w-[55px] h-[55px] bg-white grid place-items-center rounded-[50%] mx-auto mb-3">
                                        <span class="text-[#ed1c24]">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                            </svg>
                                            </span class="text-[#ed1c24]">
                                        </div>
                                        App notifications
                                    </li>
                                    <li class="text-center text-white inline-block text-[13px] w-[120px]">
                                        <div class="w-[55px] h-[55px] bg-white grid place-items-center rounded-[50%] mx-auto mb-3">
                                            <span class="text-[#ed1c24]">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </span class="text-[#ed1c24]">
                                        </div>
                                        Alarms Clock
                                    </li>
                                    <li class="text-center text-white inline-block text-[13px] w-[120px]">
                                        <div class="w-[55px] h-[55px] bg-white grid place-items-center rounded-[50%] mx-auto mb-3">
                                            <span class="text-[#ed1c24]">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </span class="text-[#ed1c24]">
                                        </div>
                                        Location tracker
                                    </li>
                                </ul>
                            </div>
                            <div class=" z-10">
                                <div class="block">
                                    <img src="http://prolex.themetags.com/img/watch.png" style="width: 445px;height: 362px;">
                                </div>
                            </div>
                    </div>
                </section>
                <section>
                    <p class=" flex justify-center my-10">
                        <a href="">
                            <img src="https://cdn3.dhht.vn/wp-content/uploads/2019/10/icon_mat-xa-cu.png" alt="">
                        </a>
                        <a href="">
                            <img src="https://cdn3.dhht.vn/wp-content/uploads/2019/10/icon_phien-ban-gioi-han.png" alt="">
                        </a>
                        <a href="">
                            <img src="https://cdn3.dhht.vn/wp-content/uploads/2019/10/icon_sieu-mong.png" alt="">
                        </a>
                        <a href="">
                            <img src="https://cdn3.dhht.vn/wp-content/uploads/2019/10/icon_skeleton.png" alt="">
                        </a>
                        <a href="">
                            <img src="https://cdn3.dhht.vn/wp-content/uploads/2019/10/icon_vang-18k.png" alt="">
                        </a>
                        <a href="">
                            <img src="https://cdn3.dhht.vn/wp-content/uploads/2019/10/icon_vat-lieu-hiem.png" alt="">
                        </a>
                        <a href="">
                            <img src="https://cdn3.dhht.vn/wp-content/uploads/2019/10/icon_day-da-hirsch.png" alt="">
                        </a>
                        <a href="">
                            <img src="https://cdn3.dhht.vn/wp-content/uploads/2019/10/icon_kim-cuong.png" alt="">
                        </a>
                    </p>
                </section>
                <section class="w-[1140px] mx-auto">
                    <div class="flex justify-between items-center">
                        <div>
                            <a href="tin-tuc">
                                <img class="h-[382px]" src="https://cdn3.dhht.vn/wp-content/uploads/2021/05/banner-trang-chu-doxa-grandemetre.jpg" alt="">
                            </a>
                        </div>
                        <div class="ml-3 grid grid-cols-2 gap-3">
                            <a href="/#/category/1">
                                <img src="https://cdn3.dhht.vn/wp-content/uploads/2019/10/banner-dong-ho-nam.png" alt="">
                            </a>
                            <a href="/#/category/2">
                                <img src="https://cdn3.dhht.vn/wp-content/uploads/2019/10/banner-dong-ho-nu.png" alt="">
                            </a>
                            <a href="/#/category/3">
                                <img src="https://cdn3.dhht.vn/wp-content/uploads/2019/10/banner-dong-ho-doi.png" alt="">
                            </a>
                            <a href="/#/category/4">
                                <img src="https://cdn3.dhht.vn/wp-content/uploads/2019/10/banner-dong-ho-tre-em.png" alt="">
                            </a>
                        </div>
                    </div>
                    <div class="flex justify-around my-20">
                        <a href="">
                            <img src="https://cdn3.dhht.vn/wp-content/uploads/2021/06/bst-dong-ho-nam-hot.jpg" alt="">
                        </a>
                        <a href="">
                            <img src="https://cdn3.dhht.vn/wp-content/uploads/2021/06/hang-moi-ve-1.jpg" alt="">
                        </a>
                        <a href="">
                            <img src="https://cdn3.dhht.vn/wp-content/uploads/2021/06/bst-dong-ho-nu-hot.jpg" alt="">
                        </a>
                    </div>
                    <h2 class="relative text-white font-normal title-cate my-5 text-center ">
                        <span class="px-16 bg-white">
                        <span class="bg-[#ff6600] px-4 py-1">?????NG H??? NAM B??N CH???Y</span>
                        </span>
                    </h2>
                    <div class="products flex flex-wrap justify-between">
                    ${((await listProductOfCate(1)).data).map((product) => /* html */ `
                        <div class="product text-center pb-4 mb-[30px]">
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
                                <img class="ImageProduct" 
                                src="${product.images[0]}" data-index="0" alt="">
                            </a>
                            <div class="absolute" style="top:65%;left:0px;">
                                <p class="text-[11px] count-image bg-white px-2 py-1">
                                    1/${product.images.length}
                                </p>
                            </div>
                            <a href="/products/${product.id}" class="hover:text-[#990000] cursor-pointer hover:underline">
                                <p class="text-[14px] px-2">
                                    ${product.name}
                                </p>
                            </a>
                            <span class="text-[14px]">
                            ${formatter.format(product.price)}
                            </span>
                        </div>`).join('')};
                    </div>
                    <h2 class="relative text-white font-normal title-cate my-5 text-center ">
                        <span class="px-16 bg-white">
                        <span class="bg-[#ff6600] px-4 py-1">?????NG H??? N??? B??N CH???Y</span>
                        </span>
                    </h2>
                    <div class="products flex flex-wrap justify-between">
                    ${((await listProductOfCate(2)).data).map((product) => /* html */ `
                        <div class="product text-center pb-4 mb-[30px]">
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
                                <img class="ImageProduct" 
                                src="${product.images[0]}" data-index="0" alt="">
                            </a>
                            <div class="absolute" style="top:65%;left:0px;">
                                <p class="text-[11px] count-image bg-white px-2 py-1">
                                    1/${product.images.length}
                                </p>
                            </div>
                            <a href="/products/${product.id}" class="hover:text-[#990000] cursor-pointer hover:underline">
                                <p class="text-[14px] px-2">
                                    ${product.name}
                                </p>
                            </a>
                            <span class="text-[14px]">
                            ${formatter.format(product.price)}
                            </span>
                        </div>`).join('')};
                    </div>
                    <h2 class="relative text-white font-normal title-cate my-5 text-center ">
                        <span class="px-16 bg-white">
                        <span class="bg-[#ff6600] px-4 py-1">?????NG H??? C???P ????I B??N CH???Y</span>
                        </span>
                    </h2>
                    <div class="products flex flex-wrap justify-between">
                    ${((await listProductOfCate(3)).data).map((product) => /* html */ `
                        <div class="product text-center pb-4 mb-[30px]">
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
                                <img class="ImageProduct" 
                                src="${product.images[0]}" data-index="0" alt="">
                            </a>
                            <div class="absolute" style="top:65%;left:0px;">
                                <p class="text-[11px] count-image bg-white px-2 py-1">
                                    1/${product.images.length}
                                </p>
                            </div>
                            <a href="/products/${product.id}" class="hover:text-[#990000] cursor-pointer hover:underline">
                                <p class="text-[14px] px-2">
                                    ${product.name}
                                </p>
                            </a>
                            <span class="text-[14px]">
                            ${formatter.format(product.price)}
                            </span>
                        </div>`).join('')};
                    </div>
                </section>
                <div>
                    <a href="#"><img src="./ld.jpg" alt=""></a>
                </div>
                <section class="w-[1140px] mx-auto">
                    <h2 class="relative font-normal title-cate my-5 text-center ">
                        <span class="px-16 bg-white">
                            <span class="px-4 py-1">TH????NG HI???U N???I TI???NG</span>
                        </span>
                    </h2>
                    <div class="brand flex justify-between flex-wrap">
                        <p class="mb-5">
                            <a href="">
                                <img width="170" height="102" src="https://cdn3.dhht.vn/wp-content/uploads/2015/09/Casio.png" alt="">
                            </a>
                        </p>
                        <p class="mb-5">
                            <a href="">
                                <img width="170" height="102" src="https://cdn3.dhht.vn/wp-content/uploads/2015/09/Gshock.png" alt="">
                            </a>
                        </p>
                        <p class="mb-5">
                            <a href="">
                                <img width="170" height="102" src="https://cdn3.dhht.vn/wp-content/uploads/2015/09/Citizen.png" alt="">
                            </a>
                        </p>
                        <p class="mb-5">
                            <a href="">
                                <img width="170" height="102" src="https://cdn3.dhht.vn/wp-content/uploads/2015/09/OP.png" alt="">
                            </a>
                        </p>
                        <p class="mb-5">
                            <a href="">
                                <img width="170" height="102" src="https://cdn3.dhht.vn/wp-content/uploads/2015/09/Orient.png" alt="">
                            </a>
                        </p>
                        <p class="mb-5">
                            <a href="">
                                <img width="170" height="102" src="https://cdn3.dhht.vn/wp-content/uploads/2015/09/Seiko.png" alt="">
                            </a>
                        </p>
                        <p class="mb-5">
                            <a href="">
                                <img width="170" height="102" src="https://cdn3.dhht.vn/wp-content/uploads/2015/09/Skagen.png" alt="">
                            </a>
                        </p>
                        <p class="mb-5">
                            <a href="">
                                <img width="170" height="102" src="https://cdn3.dhht.vn/wp-content/uploads/2015/09/Fossil.png" alt="">
                            </a>
                        </p>
                        <p class="mb-5">
                            <a href="">
                                <img width="170" height="102" src="https://cdn3.dhht.vn/wp-content/uploads/2015/09/MichaelKors.png" alt="">
                            </a>
                        </p>
                        <p class="mb-5">
                            <a href="">
                                <img width="170" height="102" src="https://cdn3.dhht.vn/wp-content/uploads/2015/11/Daniel-Willington.png" alt="">
                            </a>
                        </p>
                        <p class="mb-5">
                            <a href="">
                                <img width="170" height="102" src="https://cdn3.dhht.vn/wp-content/uploads/2015/09/Candino.png" alt="">
                            </a>
                        </p>
                        <p class="mb-5">
                            <a href="">
                                <img width="170" height="102" src="https://cdn3.dhht.vn/wp-content/uploads/2021/11/Logo-sokolov.png" alt="">
                            </a>
                        </p>
                    </div>
                    <h2 class="relative font-normal title-cate my-5 text-center ">
                        <span class="px-16 bg-white">
                            <span class="px-4 py-1">TH????NG HI???U TH???Y S???</span>
                        </span>
                    </h2>
                    <div class="brand flex justify-between flex-wrap">
                        <p class="mb-5">
                            <a href="">
                                <img width="170" height="102" src="https://cdn3.dhht.vn/wp-content/uploads/2014/05/doxa-logo-haitrieu.png" alt="">
                            </a>
                        </p>
                        <p class="mb-5">
                            <a href="">
                                <img width="170" height="102" src="https://cdn3.dhht.vn/wp-content/uploads/2015/09/Longines1.png" alt="">
                            </a>
                        </p>
                        <p class="mb-5">
                            <a href="">
                                <img width="170" height="102" src="https://cdn3.dhht.vn/wp-content/uploads/2015/09/Tissot1.png" alt="">
                            </a>
                        </p>
                        <p class="mb-5">
                            <a href="">
                                <img width="170" height="102" src="https://cdn3.dhht.vn/wp-content/uploads/2015/09/Movado1.png" alt="">
                            </a>
                        </p>
                        <p class="mb-5">
                            <a href="">
                                <img width="170" height="102" src="https://cdn3.dhht.vn/wp-content/uploads/2015/09/Bulova.png" alt="">
                            </a>
                        </p>
                        <p class="mb-5">
                            <a href="">
                                <img width="170" height="102" src="https://cdn3.dhht.vn/wp-content/uploads/2015/09/CK.png" alt="">
                            </a>
                        </p>
                        <p class="mb-5">
                            <a href="">
                                <img width="170" height="102" src="https://cdn3.dhht.vn/wp-content/uploads/2015/09/Claude-Bernard.png" alt="">
                            </a>
                        </p>
                        <p class="mb-5">
                            <a href="">
                                <img width="170" height="102" src="https://cdn3.dhht.vn/wp-content/uploads/2015/09/Rotary.png" alt="">
                            </a>
                        </p>
                        <p class="mb-5">
                            <a href="">
                                <img width="170" height="102" src="https://cdn3.dhht.vn/wp-content/uploads/2016/02/logo-ogival-big.png" alt="">
                            </a>
                        </p>
                        <p class="mb-5">
                            <a href="">
                                <img width="170" height="102" src="https://cdn3.dhht.vn/wp-content/uploads/2014/05/logo-frederique-constant-big.png" alt="">
                            </a>
                        </p>
                        <p class="mb-5">
                            <a href="">
                                <img width="170" height="102" src="https://cdn3.dhht.vn/wp-content/uploads/2021/10/logo-rado-1.png" alt="">
                            </a>
                        </p>
                        <p class="mb-5">
                            <a href="">
                                <img width="170" height="102" src="https://cdn3.dhht.vn/wp-content/uploads/2021/10/Logo-mido.png" alt="">
                            </a>
                        </p>
                    </div>
                    <h2 class="relative text-white font-normal title-cate my-5 text-center ">
                        <span class="px-16 bg-white">
                            <span class="bg-[#ff6600] px-4 py-1">NEW WATCHES</span>
                        </span>
                    </h2>
                    <hr width="100%" class="mb-5">
                    <h3 class="relative font-normal title-cate my-5 text-center">
                        <span class="px-16 bg-white">
                            <span class="px-4 py-1">B??I VI???T HAY</span>
                        </span>
                        <span class="px-16 bg-white float-right mr-8">
                            <span class="px-4 py-1">C?? TH??? B???N S??? TH??CH</span>
                        </span>
                    </h3>
                    <div class="grid grid-cols-3 gap-6">
                        <div>
                            <img width="341" height="205" src="https://cdn3.dhht.vn/wp-content/uploads/2016/07/dong-ho-moon-phase-la-gi-giai-thich-va-cach-dung-thumbnail.jpg" alt="">
                        </div>
                        <div class="text-[14px]">
                            <a href="#" class="hover:text-[#990000] hover:underline">
                                <h3>
                                    ?????NG H??? MOONPHASE L?? G??? GI???I TH??CH V?? H?????NG D???N S??? D???NG
                                </h3>
                            </a>
                            <p class="py-2">
                                Posted on 22/01/2022 at 4:29 chi???u by <a href="" class="hover:text-[#990000] hover:underline">?????ng H??? Poly</a>
                            </p>
                            <p>
                                Th??? gi???i ?????ng h??? ??eo tay ng??y c??ng c?? nhi???u h??n nh???ng phong c??ch thi???t k??? m???i, nh???m t??ng tr???i nghi???m ng?????i d??ng. H??ng lo???t c??c t??nh n??ng ???????c s??? d???ng ????? ph?? b??? gi???i h???n truy???n th???ng nh?? Chronograph, Tachymeter, l???ch th??? ng??y???V?? ?????ng h??? Moonphase ???????c
                                ra m???t v???i kh??? n??ng cho ph??p b???n theo d??i h??nh ???nh m???t tr??ng trong n??m. M???C???
                            </p>
                            <a href="" class="block px-3 hover:text-[#990000] hover:border-[#990000] border border-[#ebebeb] w-fit my-4 py-2">
                                ?????C TH??M
                            </a>
                        </div>
                        <div>
                            <ul class=" bg-[#f4f4f4] post-news box-content border-dashed border border-[#777777] rounded-2xl">
                                <li class="list-[square] text-[11px] hover:text-[#990000] hover:underline">
                                    <a href="">?????ng h??? Moonphase l?? g??? Gi???i th??ch v?? h?????ng d???n s??? d???ng</a>
                                </li>
                                <li class="list-[square] text-[11px] hover:text-[#990000] hover:underline">
                                    <a href="">40 ki???u nhu???m t??c m??u than ch?? ?????p, h???p nhi???u g????ng m???t</a>
                                </li>
                                <li class="list-[square] text-[11px] hover:text-[#990000] hover:underline">
                                    <a href="">1 l?????ng v??ng bao nhi??u ti???n? bao nhi??u ch???? bao nhi??u gam?</a>
                                </li>
                                <li class="list-[square] text-[11px] hover:text-[#990000] hover:underline">
                                    <a href="">Tu???i B??nh Tu???t sinh n??m 2006 m???nh g??, h???p m??u g??, h?????ng n??o t???t?</a>
                                </li>
                                <li class="list-[square] text-[11px] hover:text-[#990000] hover:underline">
                                    <a href="">Tu???i K??? M??i sinh n??m 1979 m???nh g??, h???p m??u g??, h?????ng n??o t???t?</a>
                                </li>
                                <li class="list-[square] text-[11px] hover:text-[#990000] hover:underline">
                                    <a href="">C??ch th??o khuy??n tai ch???t tr??n, ch???t v???n, ch???t bi kh??ng ??au</a>
                                </li>
                                <li class="list-[square] text-[11px] hover:text-[#990000] hover:underline">
                                    <a href="">Da ??en / ng??m ??en ??eo ?????ng h??? m??u g??? TOP 5 h??ng b??n ch???y nh???t</a>
                                </li>
                                <li class="list-[square] text-[11px] hover:text-[#990000] hover:underline">
                                    <a href="">Tay nh??? ??eo ?????ng h??? n??o ?????p? TOP 30 m???u b??n ch???y nh???t</a>
                                </li>
                                <li class="list-[square] text-[11px] hover:text-[#990000] hover:underline">
                                    <a href="">15 chi???c nh???n c?????i kim c????ng ?????p nh???t th??? gi???i v?? gi?? b??n</a>
                                </li>
                                <li class="list-[square] text-[11px] hover:text-[#990000] hover:underline">
                                    <a href="">Tu???i M???u Ng??? sinh n??m 1978 m???nh g??, h???p m??u g??, h?????ng n??o t???t?</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <h2 class="relative font-normal title-cate my-5 text-center ">
                        <span class="px-16 bg-white">
                            <span class="px-4 py-1">KH??CH H??NG C???A CH??NG T??I</span>
                        </span>
                    </h2>
                    <p class="flex justify-between my-6">
                        <img src="https://cdn3.dhht.vn/wp-content/uploads/2018/12/UNILEVER-1.jpg" alt="">
                        <img src="https://cdn3.dhht.vn/wp-content/uploads/2018/12/NESTLE-1.jpg" alt="">
                        <img src="https://cdn3.dhht.vn/wp-content/uploads/2018/12/NUMBER-1-1.jpg" alt="">
                        <img src="https://cdn3.dhht.vn/wp-content/uploads/2018/12/PETRO-1.jpg" alt="">
                        <img src="https://cdn3.dhht.vn/wp-content/uploads/2018/12/LAVIE-1.jpg" alt="">
                        <img src="https://cdn3.dhht.vn/wp-content/uploads/2018/12/EVN-1.jpg" alt="">
                        <img src="https://cdn3.dhht.vn/wp-content/uploads/2018/12/Bosch_logo-1.jpg" alt="">
                        <img src="https://cdn3.dhht.vn/wp-content/uploads/2018/12/POCA-1.jpg" alt="">
                    </p>
                    <h2 class="info border-dotted border border-[#ebebeb] py-3 border-y border-x-0 mb-6">
                        SOCIAL PAGE:
                    </h2>
                </section>
            </main>
            ${Footer.render()}
            `;
    },
    async afterRender() {
        nextImage((await getAll()).data)
        Footer.afterRender()
        Header.afterRender()
    },
};
export default HomePage;