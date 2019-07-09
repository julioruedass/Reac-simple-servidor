"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    goIndex(req, resp) {
        resp.json({ text: 'We are on Index' });
    }
}
const indexController = new IndexController();
exports.default = indexController;
