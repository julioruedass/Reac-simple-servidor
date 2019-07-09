"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ActividadContrller_1 = __importDefault(require("../controllers/ActividadContrller"));
class ActividadRouter {
    constructor() {
        this.router = express_1.Router();
        this.setConfig();
    }
    setConfig() {
        // Obtiene un listado de todos los usuarios 
        this.router.get('/', ActividadContrller_1.default.list);
        // Obtiene un solo usuario, con base en el id
        this.router.get('/:id', ActividadContrller_1.default.get);
        // Crea:inserta un nuevo usuario en la tabla
        this.router.post('/', ActividadContrller_1.default.create);
        // Actualiza la información de un usuario existente
        this.router.put('/:id', ActividadContrller_1.default.update);
        // Elimina un usuario existente
        this.router.delete('/:id', ActividadContrller_1.default.delete);
    }
}
const actividadRouter = new ActividadRouter();
exports.default = actividadRouter.router;
