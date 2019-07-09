"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const HomeController_1 = __importDefault(require("../controllers/HomeController"));
class IndexRouter {
    constructor() {
        this.router = express_1.Router();
        this.setConfig();
    }
    setConfig() {
        this.router.get('/', HomeController_1.default.goIndex);
    }
}
const indexRouter = new IndexRouter();
exports.default = indexRouter.router;
