import { events } from "./handlers/events.js";
import { contacts } from "./handlers/contacts.js";

const routes = {
    '/contacts': contacts,
    '/events': events
};

export { routes };