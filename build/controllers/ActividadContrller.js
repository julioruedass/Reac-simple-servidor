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
class ActividadController {
    // Obtiene un listado de todos los registros de la tabla
    list(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //resp.json({text:'consulta swelect'});
                const contactList = yield ConexionDB_1.default.query('SELECT * FROM actividad');
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
                const contact = yield ConexionDB_1.default.query('SELECT * FROM actividad WHERE id_usu= ?', [id]);
                if (contact.length > 0) {
                    return resp.json(contact);
                    //return resp.json(contact[0]);
                }
                resp.status(404).json({ message: ' Encontrado' });
            }
            catch (error) {
                console.error(error);
                resp.status(404).json({ message: error });
            }
        });
    }
    //Crea un nuevo usuario en nuestra base de datos
    create(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield ConexionDB_1.default.query('INSERT INTO actividad set ?', [req.body]);
                resp.json({ message: ' Almacenado' });
            }
            catch (error) {
                console.error(error);
                resp.status(404).json({ message: error });
            }
        });
    }
    //actualizar
    update(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield ConexionDB_1.default.query('UPDATE actividad SET ? WHERE id = ?', [id]);
                resp.json({ message: 'Actualizado' });
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
                yield ConexionDB_1.default.query('DELETE FROM actividad WHERE id = ?', [id]);
                resp.json({ message: 'Eliminado' });
            }
            catch (error) {
                console.log(error);
                resp.status(404).json({ message: error });
            }
        });
    }
}
const actController = new ActividadController();
exports.default = actController;
