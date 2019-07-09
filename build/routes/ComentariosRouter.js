"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ComentariosController_1 = __importDefault(require("../controllers/ComentariosController"));
class ComentariosRouter {
    constructor() {
        this.router = express_1.Router();
        this.setConfig();
    }
    setConfig() {
        // Obtiene un listado de todos los comentarios 
        this.router.get('/', ComentariosController_1.default.listcom);
        // Obtiene un solo comentario, con base en el id
        this.router.get('/:id_usu', ComentariosController_1.default.getcom);
        // Crea:inserta un nuevo usuario en la tabla
        this.router.post('/', ComentariosController_1.default.createcom);
        // Actualiza la información de un comentario existente
        this.router.put('/:id', ComentariosController_1.default.updatecom);
        // Elimina un comentario existente
        this.router.delete('/:id', ComentariosController_1.default.deletecom);
    }
}
const comentariosRouter = new ComentariosRouter();
exports.default = comentariosRouter.router;
