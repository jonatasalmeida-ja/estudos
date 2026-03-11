export function sendJson(res, statusCode, data) {
    res.statusCode = statusCode;
    res.setHeader('Content-type', 'application/json; charset=utf-8');
    res.end(JSON.stringify(data));
};