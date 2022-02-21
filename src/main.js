import Navigo from 'navigo';
import DetailProduct from './pages/DetailProduct';
import Addproduct from './pages/admin/product/AddProduct.js';
import EditProduct from './pages/admin/product/EditProduct';
import Products from './pages/admin/product/Products';
import Categories from './pages/category';
import HomePage from './pages/HomePage';
import Login from './pages/user/login';
import Signup from './pages/user/signup';
import Cart from './pages/cart';
import Category from './pages/admin/category';
import AddCateGory from './pages/admin/category/addCategory';
import EditCategory from './pages/admin/category/edit';
import pageProduct from './pages/products';
import Users from './pages/admin/user';
import EditUser from './pages/admin/user/edit';
import ListCart from './pages/admin/cart';
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
    '/products': () => print(pageProduct),
    '/cart': () => print(Cart),
    '/category/:id': ({ data }) => print(Categories, data.id),
    '/products/:id': ({ data }) => print(DetailProduct, data.id),
    '/information': () => console.log('information'),
    '/admin': () => print(Products),
    '/admin/users': () => print(Users),
    '/admin/users/:id/edit': ({data}) => print(EditUser,data.id),
    '/admin/category': () => print(Category),
    '/admin/category/add': () => print(AddCateGory),
    '/admin/category/:id/edit': ({ data }) => print(EditCategory, data.id),
    '/admin/products': () => print(Products),
    '/admin/products/add': () => print(Addproduct),
    '/admin/product/:id/edit': ({ data }) => print(EditProduct, data.id),
    '/admin/revenue': () => print(ListCart),

});
router.notFound(() => {});
router.resolve();