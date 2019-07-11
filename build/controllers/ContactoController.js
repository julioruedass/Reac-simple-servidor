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
class ContactoController {
    // Obtiene un listado de todos los registros de la tabla
    list(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const contactList = yield ConexionDB_1.default.query('SELECT * FROM usuarios');
                resp.json(contactList);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    // Obtiene un contacto de la tabla por su id
    get(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const contact = yield ConexionDB_1.default.query('SELECT * FROM usuarios WHERE id = ?', [id]);
                if (contact.length > 0) {
                    return resp.json(contact[0]);
                }
                resp.status(404).json({ message: 'Contacto no encontrado' });
            }
            catch (error) {
                console.error(error);
                resp.status(404).json({ message: error });
            }
        });
    }
    create(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield ConexionDB_1.default.query('INSERT INTO usuarios set ?', [req.body]);
                resp.json({ message: 'Contacto almacenado' });
            }
            catch (error) {
                console.error(error);
                resp.status(404).json({ message: error });
            }
        });
    }
    update(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield ConexionDB_1.default.query('UPDATE usuarios SET ? WHERE id = ?', [req.body, id]);
                resp.json({ message: 'Contacto actualizado' });
            }
            catch (error) {
                console.log(error);
                resp.status(404).json({ message: error });
            }
        });
    }
    delete(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield ConexionDB_1.default.query('DELETE FROM usuarios WHERE id = ?', [id]);
                resp.json({ message: 'Contacto eliminado' });
            }
            catch (error) {
                console.log(error);
                resp.status(404).json({ message: error });
            }
        });
    }
}
const contactoController = new ContactoController();
exports.default = contactoController;
