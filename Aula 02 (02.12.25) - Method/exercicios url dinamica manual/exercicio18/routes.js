import { comments } from "./handlers/comments.js";
import { posts } from "./handlers/posts.js";

const routes = {
    '/posts': posts,
    '/comments': comments
};

export { routes };