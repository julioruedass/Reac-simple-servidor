"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ContactoController_1 = __importDefault(require("../controllers/ContactoController"));
class ContactoRouter {
    constructor() {
        this.router = express_1.Router();
        this.setConfig();
    }
    setConfig() {
        // Obtiene un listado de todos los contactos
        this.router.get('/', ContactoController_1.default.list);
        // Obtiene un solo contacto, con base en el id
        this.router.get('/:id', ContactoController_1.default.get);
        // Crea:inserta un nuevo contacto en la tabla
        this.router.post('/', ContactoController_1.default.create);
        // Actualiza la información de un contacto existente
        this.router.put('/:id', ContactoController_1.default.update);
        // Elimina un contacto existente
        this.router.delete('/:id', ContactoController_1.default.delete);
    }
}
const contactoRouter = new ContactoRouter();
exports.default = contactoRouter.router;
