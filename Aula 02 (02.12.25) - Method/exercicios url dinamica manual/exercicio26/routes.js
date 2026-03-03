import { home } from "./handlers/home.js";
import { json } from "./handlers/json.js";

const routes = {
    '/': home,
    '/json': json
};

export { routes };