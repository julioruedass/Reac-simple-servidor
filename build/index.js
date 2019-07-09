"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const IndexRouter_1 = __importDefault(require("./routes/IndexRouter"));
const ContactoRouter_1 = __importDefault(require("./routes/ContactoRouter"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.setConfig();
        this.setRouters();
    }
    setConfig() {
        this.port = process.env.PORT || 3000;
        this.app.set('port', this.port);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
    }
    setRouters() {
        this.app.use('/', IndexRouter_1.default);
        this.app.use('/api/usuarios', ContactoRouter_1.default);
    }
    start() {
        this.app.listen(this.port, () => {
            console.log('Server running at port:', this.port);
        });
    }
}
const server = new Server();
server.start();
