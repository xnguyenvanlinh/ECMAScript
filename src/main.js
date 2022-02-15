import Navigo from 'navigo';
import DetailProduct from './pages/DetailProduct';
import Addproduct from './pages/admin/AddProduct.js';
import EditProduct from './pages/admin/EditProduct';
import Products from './pages/admin/Products';
import Categories from './pages/category';
import HomePage from './pages/HomePage';
import Login from './pages/user/login';
import Signup from './pages/user/signup';
import Cart from './pages/cart';
const router = new Navigo('/', { hash: true, linksSelector: 'a' });
const $ = document.querySelector.bind(document);
const print = async(content, id) => {
    $('#root').innerHTML = await content.render(id);
    if (content.afterRender) {
        content.afterRender(id);
    }
};
router.on('/admin/*/', () => {
    console.log('truy cap duong dan admin/*')
}, {
    before(done, match) {
        if (localStorage.getItem('user')) {
            if (JSON.parse(localStorage.getItem('user')).id == 1) {
                done();
            } else {
                document.location.href = "/"
            }
        } else {
            document.location.href = "/"
        }

    },
});
router.on({
    '/': () => print(HomePage),
    '/signup': () => print(Signup),
    '/signin': () => print(Login),
    '/cart': () => print(Cart),
    '/category/:id': ({ data }) => print(Categories, data.id),
    '/products/:id': ({ data }) => print(DetailProduct, data.id),
    '/information': () => print(console.log('information')),
    '/admin': () => print(Products),
    '/admin/products': () => print(Products),
    '/admin/products/add': () => print(Addproduct),
    '/admin/product/:id/edit': ({ data }) => print(EditProduct, data.id),

});
router.notFound(() => {});
router.resolve();