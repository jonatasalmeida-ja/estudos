import { authors } from "./handlers/authors.js";
import { books } from "./handlers/books.js";

const routes = {
    '/books': books,
    '/authors': authors
};

export { routes };