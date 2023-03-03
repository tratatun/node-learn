module.exports = baseUrl => (req, res) => {
    const url = new URL(req.url, baseUrl||(req.client.localAddress + req.url));
    const params = {};
    url.searchParams.forEach((val,key) => {
        params[key] = val;
    });
    req.pathname = url.pathname;
    req.params = params;
};