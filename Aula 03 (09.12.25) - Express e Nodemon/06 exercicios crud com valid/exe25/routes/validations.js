export function checkInformations (key, type) {
    if (key !== undefined && typeof key !== type) {
        res.status(400).send(`${key} inválido`);
        return;
    }
};

export function updateInformations (key, info) {
    if (key !== undefined) {
        info.key = key;
    }
};