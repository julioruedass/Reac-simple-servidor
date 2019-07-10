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
class SeccionController {
    // Obtiene un contacto de la tabla por su usuario y contraseña  
    getusu(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const password_usu = req.body;
                const { usu_usu } = req.params;
                console.log('Req Body =', password_usu);
                console.log('Req Params =', req.params);
                console.log('Req param =', password_usu);
                //Consulta a la base de datos reciviendo de cliente de cabecera un id
                const contact = yield ConexionDB_1.default.query('SELECT usu_usu , password_usu, id FROM usuarios WHERE usu_usu = ? ', [usu_usu]);
                //await cnn.query('UPDATE usuarios SET ? WHERE id = ?', [req.body,id]);
                if (contact.length > 0) {
                    return resp.json(contact[0]);
                    console.log('Usuario  encontrado', contact[0]);
                }
                resp.status(404).json({ message: 'Usu_usu no Encontrado' });
                console.log('Usuario no encontrado');
            }
            catch (error) {
                console.error(error);
                resp.status(404).json({ message: error });
            }
        });
    }
}
const seccionController = new SeccionController();
exports.default = seccionController;
