import Navigo from 'navigo';
import DetailProduct from './pages/DetailProduct';
import Addproduct from './pages/admin/AddProduct';
import EditProduct from './pages/admin/EditProduct';
import NavAdmin from './pages/admin/NavAdmin';
import Products from './pages/admin/Products';
import Categories from './pages/Category';
import HomePage from './pages/HomePage';
const router = new Navigo('/', { hash: true, linksSelector: 'a' });
const $ = document.querySelector.bind(document);
const print = async(content, id) => {
    $('#root').innerHTML = await content.render(id);
    if (content.afterRender) {
        content.afterRender(id);
    }
};
router.on({
    '/': () => print(HomePage),
    '/category/:id': ({ data }) => print(Categories, data.id),
    '/products/:id': ({ data }) => print(DetailProduct, data.id),
    '/admin': () => print(NavAdmin),
    '/admin/products': () => print(Products),
    '/admin/products/add': () => print(Addproduct),
    '/admin/product/:id/edit': ({ data }) => print(EditProduct, data.id),
});
router.notFound(() => {});
router.resolve();