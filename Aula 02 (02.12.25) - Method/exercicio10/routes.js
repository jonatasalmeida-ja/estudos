import { users } from "./handlers/users.js";
import { auth } from "./handlers/auth.js";

const routes = {
    '/users': users,
    '/auth': auth
}

export { routes }