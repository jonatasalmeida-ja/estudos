import { settings } from "./handlers/settings.js"
import { tasks } from "./handlers/tasks.js"

const routes = {
    '/tasks': tasks,
    '/settings': settings
}

export { routes }