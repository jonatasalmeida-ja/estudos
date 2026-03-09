import { products } from "./handlers/products.js";
import { movies } from "./handlers/movies.js"
import { orders } from "./handlers/orders.js";

const routes = {
    '/products': products,
    '/movies': movies,
    '/orders': orders
};

export { routes };