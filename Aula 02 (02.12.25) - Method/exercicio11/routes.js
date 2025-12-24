import { products } from "./handlers/products.js";
import { categories } from "./handlers/categories.js";

const routes = {
    '/products': products,
    '/categories': categories
}

export { routes }