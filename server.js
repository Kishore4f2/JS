const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.delete("/:resource", (req, res) => {
    const resource = req.params.resource;
    router.db.set(resource, []).write();
    res.json({ message: "All deleted" });
});

server.use(router);

server.listen(3000, () => {
    console.log("JSON Server running on http://localhost:3000");
});


