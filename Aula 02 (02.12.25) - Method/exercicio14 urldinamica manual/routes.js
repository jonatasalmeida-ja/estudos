import { post } from './handlers/post.js';
import { users } from './handlers/users.js';

const routes = {
    '/users': users,
    '/posts': post
}

export { routes }