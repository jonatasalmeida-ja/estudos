import { users } from './handlers/users.js'
import { sessions } from './handlers/sessions.js'
import { reports } from './handlers/reports.js'

const routes = {
    '/users': users,
    '/sessions': sessions,
    '/reports': reports
}

export { routes }