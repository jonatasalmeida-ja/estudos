import { products } from "./handlers/products.js";
import { orders } from "./handlers/orders.js";

const routes = {
    '/products': products,
    '/orders': orders
};

export { routes };