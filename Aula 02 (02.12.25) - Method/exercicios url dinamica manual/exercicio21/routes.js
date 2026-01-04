import { tickets } from "./handlers/tickets.js";
import { agents } from "./handlers/agents.js";

const routes = {
    '/tickets': tickets,
    '/agents': agents
};

export { routes };