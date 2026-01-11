import { patients } from "./handlers/patients.js";
import { appointments } from "./handlers/appointments.js";

const routes = {
    '/patients': patients,
    '/appointments': appointments
};

export { routes };