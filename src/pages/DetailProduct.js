import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { formatter, $ } from '../untils/until';
import {get } from '../api/product';
import { addToCart } from '../untils/addtocart';
/* eslint-disable indent */
const DetailProduct = {
    async render(id) {
        const product = (await get(id)).data;
        return /* html */ `
            ${Header.render()}
            <main>
                <section>
                    <div class="w-fit mx-auto my-8">
                        <h2 class="font-semibold">
                            ${product.name}
                        </h2>
                        <p class="text-[#6f6f6f] text-[11px] mt-2 ">
                            Trang Chủ / Đồng Hồ Nam / ${product.name}
                        </p>
                    </div>
                </section>
                <section class="details w-[1200px] mx-auto grid grid-cols-[470px,370px,270px] gap-[30px]">
                    <div class="w-[470px] h-[470px]">
                        <img src="${product.images[0]}" alt="">
                    </div>
                    <div>
                        <h2 class="mb-3 font-semibold">THÔNG TIN SẢN PHẨM</h2>
                        <p>Mã Số Sản Phẩm: <span class="text-[#6f6f6f]">AE-1200WHD-1AVDF</span></p>
                        <p class="w-fit mx-auto text-4xl my-4 text-[#6f6f6f]">
                        ${formatter.format(product.price)}
                        </p>
                        <span class="text-[14px] leading-[21px] my-[10px] inline-block">
                            ${product.desc}
                            </span>
                        <div class="flex">
                            <a href="">
                                <img src="https://donghohaitrieu.com/wp-content/uploads/hai-trieu/icon/reviews.gif" alt="">
                            </a>
                            <a href="">
                                <img src="https://donghohaitrieu.com/wp-content/uploads/hai-trieu/icon/broll.gif" alt="">
                            </a>
                            <a href="">
                                <img src="https://donghohaitrieu.com/wp-content/uploads/hai-trieu/icon/hdsd.gif" alt="">
                            </a>
                        </div>
                        <div>
                            <form class="flex items-center my-3">
                                <label for="">Số lượng</label>
                                <div class="cursor-pointer value-button mx-5 py-1 px-3 bg-[#fb3200] text-white font-bold" id="decrease" value="Decrease Value">-</div>
                                <input type="number" id="number" value="1" class="border-none outline-none w-[40px]" />
                                <div class="cursor-pointer value-button mr-5 py-1 px-3 bg-[#00aefd] text-white font-bold" id="increase" value="Increase Value">+</div>
                            </form>
                        </div>
                        <button id="addToCart" class="px-8 py-4 mt-4 w-full bg-[#990000] text-white font-semibold hover:underline">THÊM VÀO GIỎ</button>
                    </div>
                    <div>
                        <div class="border-2 border-double">
                            <h2 class="pt-4 pb-3 w-fit mx-auto">THƯƠNG HIỆU</h2>
                            <img src="https://cdn3.dhht.vn/wp-content/uploads/2015/09/Casio-Logo.png" alt="">
                        </div>
                        <p class="py-5 border-y border-[#ebebeb] mt-4">TẠI SAO NÊN CHỌN CHÚNG TÔI ?</p>
                        <p class="my-3">
                            <img class="float-left mt-1" src="https://cdn3.dhht.vn/wp-content/uploads/2015/09/chung-nhan1.png" alt="">
                            <span class="text-[12px]">Hoàn Lại Tiền Gấp 10 Lần Nếu Phát Hiện Hàng Giả - Hàng Nhái.</span>
                        </p>
                        <p class="my-3">
                            <img class="float-left mt-1" src="https://cdn3.dhht.vn/wp-content/uploads/2015/09/bao-hanh-5-nam1.png" alt="">
                            <span class="text-[12px]">Tăng Thêm Thời Gian Bảo Hành Lên Đến 5 Năm - <a href="#" class="hover:underline hover:text-[#990000]">Xem Thêm</a></span>
                        </p>
                        <p class="my-3">
                            <img class="float-left mt-1" src="https://cdn3.dhht.vn/wp-content/uploads/2021/12/bao-hanh-quoc-te.png" alt="">
                            <span class="text-[12px]">Trung Tâm Bảo Hành Đạt Tiêu Chuẩn Quốc Tế - <a href="#" class="hover:underline hover:text-[#990000]">Xem Thêm</a></span>
                        </p>
                        <p class="my-3">
                            <img class="float-left mt-1" src="https://cdn3.dhht.vn/wp-content/uploads/2015/09/1-doi-12.png" alt="">
                            <span class="text-[12px]">Sai Kích Cỡ? Không Ưng Ý? Đổi Hàng Trong 7 Ngày - <a href="#" class="hover:underline hover:text-[#990000]">Xem Thêm</a></span>
                        </p>
                        <p class="my-3">
                            <img class="float-left mt-1" src="https://cdn3.dhht.vn/wp-content/uploads/2015/09/thay-pin-mien-phi1.png" alt="">
                            <span class="text-[12px]">Thay Pin Miễn Phí Suốt Đời - Không Còn Lo Hết Pin Nữa.</span>
                        </p>
                        <p class="my-3">
                            <img class="float-left mt-1" src="https://cdn3.dhht.vn/wp-content/uploads/2021/01/giao-hang-2h.png" alt="">
                            <span class="text-[12px]">Giao Hàng SIÊU TỐC Trong 2h - SHIP COD Miễn Phí</span>
                        </p>
                    </div>
                </section>
                <section class="w-[1200px] mx-auto">
                    <h2 class="w-fit mx-auto border-2 border-b-transparent border-[#ebebeb] text-center px-8 py-3">CHẾ ĐỘ BẢO HÀNH & HẬU MÃI</h2>
                    <div class="pl-5 p-3 border-2 border-[#ebebeb] mb-5">
                        <div class="ml-5">
                            <p>CHẾ ĐỘ BẢO HÀNH </p>
                            <p class="font-bold">Tất cả các đồng hồ khi bán ra đều kèm theo 2 phiếu bảo hành:</p>
                            <ul class="list-disc">
                                <li class="list-[square]">1 Phiếu Bảo Hành (hoặc Thẻ Bảo Hành/Sổ Bảo Hành) của hãng có giá trị bảo hành Quốc tế (Thời gian bảo hành tùy theo quy định của từng hãng).</li>
                                <li class="list-[square]">1 Phiếu Bảo Hành của Hải Triều (Sử dụng để được thay pin miễn phí vĩnh viễn & Hưởng chế độ bảo hành tăng thêm từ 1-4 năm của Hải Triều).</li>
                            </ul>
                            <strong>Ví dụ:</strong> Đồng Hồ Citizen có chế độ bảo hành chính hãng: máy = 12 tháng, Pin = 12 tháng. Khi mua tại Hải Triều, Khách hàng sẽ được tặng thêm thời gian bảo hành từ 4 năm về máy. Pin = Vĩnh Viễn. Tổng cộng: Khi mua
                            tại Hải Triều, đồng hồ Citizen sẽ được bảo hành máy = 05 năm, Pin = Vĩnh Viễn. Lưu ý:
                            <ul class="list-disc">
                                <li class="list-[square]">Đối với sản phẩm còn trong thời gian bảo hành Quốc Tế: Quý khách có thể đem tới Hải Triều hoặc bất kỳ nhà trung tâm bảo hành nào của hãng được ghi trên phiếu để yêu cầu được kiểm tra đồng hồ.</li>
                                <li class="list-[square]">Đối với sản phẩm hết thời gian bảo hành Quốc Tế nhưng vẫn trong thời gian bảo hành tại Hải Triều: Quý khách đem đồng hồ kèm Phiếu Bảo Hành của Hải Triều tới bất kỳ chi nhánh nào của Hải Triều để được hướng dẫn và kiểm tra đồng
                                    hồ.
                                </li class="list-[square]">
                            </ul>
                            <p class="font-bold mt-4">Điều Kiện Được Bảo Hành</p>
                            <ul class="list-disc">
                                <li class="list-[square]">Bảo hành chỉ có giá trị khi đồng hồ có Phiếu bảo hành của hãng & Phiếu bảo hành của Hải Triều đi kèm, điền chính xác, đầy đủ các thông tin.</li>
                                <li class="list-[square]">Phiếu bảo hành phải còn nguyên vẹn, không rách, chấp vá, hoen ố, mờ nhạt.</li>
                                <li class="list-[square]">Còn trong thời gian bảo hành. Thời gian bảo hành được tính từ ngày mua có ghi trên Phiếu Bảo Hành.</li>
                                <li class="list-[square]">Chỉ bảo hành thay thế mới cho những linh kiện, phụ tùng bị hỏng – không thay thế bằng một chiếc đồng hồ khác.</li>
                            </ul>
                            <p class="font-bold mt-4">Điều Kiện Không Được Bảo Hành</p>
                            <ul class="list-disc">
                                <li class="list-[square]">Đồng hồ không có Phiếu bảo hành của hãng và Phiếu bảo hành của Hải Triều đi kèm.</li>
                                <li class="list-[square]">Các loại dây đeo, khoá, vỏ, màu xi, mặt số, mặt kiếng bị hỏng hóc, vỡ do sử dụng không đúng, tai nạn, lão hóa tự nhiên, va đập, … trong quá trình sử dụng.</li>
                                <li class="list-[square]">Hỏng hóc do hậu quả gián tiếp của việc sử dụng sai hướng dẫn của hãng có kèm theo đồng hồ.</li>
                                <li class="list-[square]">Trầy xước về dây hoặc mặt kiếng bị trầy xước, vỡ do va chạm trong quá trình sử dụng.</li>
                                <li class="list-[square]">Tự ý thay đổi máy móc bên trong, mở ra can thiệp sửa chữa trong thời gian còn bảo hành – Tại những nơi không phải là trung tâm của hãng</li>
                            </ul>
                            <p class="font-bold mt-4">Chế Độ Bảo Hành RED GUARANTEE</p>
                            <ul class="list-disc">
                                <li class="list-[square]">Tăng thêm 1-2 năm bảo hành tại Hải Triều ngoài chế độ bảo hành Quốc Tế của hãng để có tổng thời gian là 4 năm.</li>
                                <li class="list-[square]">Ưu tiên bảo hành – Đồng hồ sẽ được xếp vào danh sách ưu tiên bảo hành để nhanh chóng quay lại với Quý khách.</li>
                                <li class="list-[square]">Giao nhận đồng hồ bảo hành ngay tại nhà Quý khách.</li>
                                <li class="list-[square]">Cập nhật tình trạng đồng hồ qua điện thoại tới Quý khách. Quý khách được tư vấn, cập nhật tình trạng đồng hồ trong quá trình đồng hồ được bảo hành.</li>
                                <li class="list-[square]">4 năm đánh bóng đồng hồ miễn phí.</li>
                            </ul>
                            <p class="font-bold mt-4">CHÍNH SÁCH ĐỔI HÀNG</p> Trong vòng 7 ngày kể từ ngày mua hàng từ Đồng Hồ Hải Triều, Quý khách có thể yêu cầu đổi hàng hoàn toàn miễn phí. Thời hạn 7 ngày được tính theo dấu bưu điện khi Quý khách gửi sản phẩm về cho chúng tôi
                            hoặc thời gian chúng tôi tiếp nhận yêu cầu trực tiếp (tại cửa hàng) của Quý khách.
                            <ul>
                                <li class="list-[square]">Yêu cầu đổi hàng cần được thực hiện trong vòng 7 ngày kể từ ngày Quý khách nhận được hàng.</li>
                                <li class="list-[square]">Sản phẩm không có dấu hiệu đã qua sử dụng (còn đầy đủ keo dán bảo vệ chống trầy xước mặt đồng hồ, nắp đáy, dây..)</li>
                                <li class="list-[square]">Sản phẩm không bị dây bẩn, trầy xước, hư hỏng, dính hoá chất hoặc có dấu hiệu cạy mở.</li>
                                <li class="list-[square]">Các bộ phận, linh kiện, phụ kiện, tài liệu hướng dẫn sử dụng, tài liệu kỹ thuật, quà tặng kèm theo (nếu có), …</li>
                                <li class="list-[square]">Hộp đựng, bao bì đóng gói sản phẩm còn nguyên vẹn, không bị móp, rách, ố vàng, …</li>
                                <li class="list-[square]">Chỉ chấp nhận đổi 1 lần duy nhất tính từ ngày mua sản phẩm.</li>
                            </ul>
                            <p class="font-bold mt-4">HƯỚNG DẪN MUA HÀNG</p> Do đặc thù mặt hàng đồng hồ cao cấp nên chúng tôi khuyến khích Quý khách tới tham quan và mua sắm tại hệ thống đại lý cửa hàng của Đồng Hồ Hải Triều.
                            <li class="text-[#2476f1] font-bold c">Hệ Thống Chi Nhánh </li>
                            Trường hợp quý khách ở xa (khu vực không có hệ thống cửa hàng của Hải Triều), không có thời gian tới cửa hàng, hay theo yêu cầu của quý khách - Để đảm bảo sự thuận tiện nhất cho quá trình mua hàng của Quý khách, Đồng Hồ Hải Triều sẽ áp dụng hình thức
                            giao hàng và thu tiền tận nhà (COD) (Quý khách chỉ phải trả tiền khi nhận được hàng)
                            <li class="list-[square]"><b>Gọi Ngay: </b><a href="tell:+84369053052" class="text-[#00aefd]">0369.053.052</a></li>
                        </div>
                    </div>
                </section>
            </main>
            ${Footer.render()}
        `;
    },
    afterRender(id) {
        Footer.afterRender();
        $("#addToCart").addEventListener('click', async() => {
            const { data } = await get(id)
            addToCart({...data, quantity: $("#number").value })
        })
        const increase = $("#increase")
        const decrease = $("#decrease")
        increase.addEventListener('click', () => {
            var value = parseInt($('#number').value, 10);
            value = isNaN(value) ? 0 : value;
            value++;
            $('#number').value = value;
        })
        decrease.addEventListener('click', () => {
            var value = parseInt($('#number').value, 10);
            value = isNaN(value) ? 0 : value;
            value < 1 ? value = 1 : '';
            value--;
            $('#number').value = value;
        })
    },
};
export default DetailProduct;