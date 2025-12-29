import { users } from "./handlers/users.js";
import { profiles } from "./handlers/profiles.js";

const routes = {
    '/users': users,
    '/profiles': profiles
};

export { routes };