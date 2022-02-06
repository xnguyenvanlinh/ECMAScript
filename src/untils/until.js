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