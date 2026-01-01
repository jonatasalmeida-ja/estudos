import { books } from "./handlers/books.js";
import { loans } from "./handlers/loans.js";

const routes = {
    '/books': books,
    '/loans': loans
};

export { routes };