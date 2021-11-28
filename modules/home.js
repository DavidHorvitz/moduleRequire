
const httpServer = require(`http`).Server;

class MyServer extends httpServer {
    constructor() {
        super();
        this.listen(3000);
        this.on(`request`, this.requestHandler);
    }
    requestHandler(req, res) {
        res.end(`david horvitz`);

    }
}
const myServer = new MyServer();

module.exports.myServer = myServer;