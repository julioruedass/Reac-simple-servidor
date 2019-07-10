"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SeccionController_1 = __importDefault(require("../controllers/SeccionController"));
class SeccionRouter {
    constructor() {
        this.router = express_1.Router();
        this.setConfig();
    }
    setConfig() {
        //obtener usuario y pasword
        this.router.get('/:usu_usu', SeccionController_1.default.getusu);
    }
}
const seccionRouter = new SeccionRouter();
exports.default = seccionRouter.router;
