"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ConexionDB_1 = __importDefault(require("../dbconfig/ConexionDB"));
//import { createPool } from 'promise-mysql';
class ComentariosController {
    // Obtiene un listado de todos los cometarios de la tabla
    listcom(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //resp.json({text:'consulta swelect'});
                const contactList = yield ConexionDB_1.default.query('SELECT * FROM comentarios');
                resp.json(contactList);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    // Obtiene un comentario de la tabla por su id
    getcom(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_usu } = req.params;
                //Consulta a la base de datos reciviendo de cliente de cabecera un id
                const contact = yield ConexionDB_1.default.query('SELECT * FROM comentarios WHERE id_usu = ?', [id_usu]);
                if (contact.length > 0) {
                    return resp.json(contact);
                }
                resp.status(404).json({ message: 'Comentarios no Encontrado' });
            }
            catch (error) {
                console.error(error);
                resp.status(404).json({ message: error });
            }
        });
    }
    //Crea un nuevo usuario en nuestra base de datos reciviendo el cuerpo de nuestro modelo tipo usario
    createcom(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield ConexionDB_1.default.query('INSERT INTO comentarios set ?', [req.body]);
                resp.json({ message: 'Usuario Almacenado' });
            }
            catch (error) {
                console.error(error);
                resp.status(404).json({ message: error });
            }
        });
    }
    //Actualizar usuarios
    updatecom(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const oldGame = req.body;
                const { id } = req.params;
                yield ConexionDB_1.default.query('UPDATE comentarios SET ? WHERE id = ?', [req.body, id]);
                resp.json({ message: 'Usuario Actualizado' });
                console.log("REQ PARAMS: ", req.params);
                console.log("REQ BODY", req.body);
            }
            catch (error) {
                console.log(error);
                resp.status(404).json({ message: error });
            }
        });
    }
    deletecom(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                //Unique 
                yield ConexionDB_1.default.query('DELETE FROM comentarios WHERE id = ?', [id]);
                resp.json({ message: 'Comentario Eliminado' });
            }
            catch (error) {
                console.log(error);
                resp.status(404).json({ message: error });
            }
        });
    }
}
const comentariosController = new ComentariosController();
exports.default = comentariosController;
