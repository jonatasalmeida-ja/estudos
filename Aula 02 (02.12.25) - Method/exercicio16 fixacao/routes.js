import { comments } from "./handlers/comments.js";
import { profiles } from "./handlers/profiles.js";

const routes = {
    '/comments': comments,
    '/profiles': profiles
};

export { routes };