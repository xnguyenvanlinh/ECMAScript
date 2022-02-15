export const reRender = async(component, Element) => {
    document.querySelector(Element).innerHTML = await component.render();
    if (component.afterRender) component.afterRender();
}
export const formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
});
export const $ = document.querySelector.bind(document);
export const $$ = document.querySelectorAll.bind(document);
export const setUser = (user) => {
    return localStorage.setItem('user', JSON.stringify(user))
}
export const checkUser = () => {
    if (localStorage.getItem('user')) {
        return JSON.parse(localStorage.getItem('user'))
    } else {
        return false
    }
}
export const nextImage = (image) => {
    const btnsPrevImage = $$('.arrow-left');
    const btnsNextImage = $$('.arrow-right');
    const ImageProduct = $$('.ImageProduct');
    const countImage = $$('.count-image');
    btnsNextImage.forEach((btn, indexBtn) => {
        btn.addEventListener('click', () => {
            var currentImage = Number(ImageProduct[indexBtn].dataset.index);
            const lengthImage = image[indexBtn].images.length;
            currentImage++;
            if (currentImage > lengthImage - 1) {
                currentImage = 0;
                ImageProduct[indexBtn].src = image[indexBtn].images[currentImage];
                ImageProduct[indexBtn].dataset.index = currentImage;
                countImage[indexBtn].innerHTML = `${currentImage + 1}/${lengthImage}`;
            } else {
                ImageProduct[indexBtn].src = image[indexBtn].images[currentImage];
                ImageProduct[indexBtn].dataset.index = currentImage;
                countImage[indexBtn].innerHTML = `${currentImage + 1}/${lengthImage}`;
            }
        });
    });
    btnsPrevImage.forEach((btn, indexBtn) => {
        btn.addEventListener('click', () => {
            var currentImage = Number(ImageProduct[indexBtn].dataset.index);
            const lengthImage = image[indexBtn].images.length;
            currentImage--;
            if (currentImage < 0) {
                currentImage = lengthImage - 1;
                ImageProduct[indexBtn].src = image[indexBtn].images[currentImage];
                ImageProduct[indexBtn].dataset.index = currentImage;
                countImage[indexBtn].innerHTML = `${currentImage + 1}/${lengthImage}`;
            } else {
                ImageProduct[indexBtn].src = image[indexBtn].images[currentImage];
                ImageProduct[indexBtn].dataset.index = currentImage;
                countImage[indexBtn].innerHTML = `${currentImage + 1}/${lengthImage}`;
            }
        });
    });
}