import { Request, Response } from 'express';
import cnn from '../dbconfig/ConexionDB';

//import { createPool } from 'promise-mysql';


class ComentariosController {


  

    // Obtiene un listado de todos los cometarios de la tabla
    public async listcom(req: Request, resp: Response) {
        try {
            //resp.json({text:'consulta swelect'});
            const contactList = await cnn.query('SELECT * FROM comentarios');
            resp.json(contactList);
        } catch (error) {
            console.error(error);
        }
    }
    // Obtiene un comentario de la tabla por su id
    public async getcom(req: Request, resp: Response): Promise<any> {
        try {  
            const { id_usu } = req.params;
            //Consulta a la base de datos reciviendo de cliente de cabecera un id
            const contact = await cnn.query('SELECT * FROM comentarios WHERE id_usu = ?', [id_usu]);
            if (contact.length > 0) {   
                return resp.json(contact);
            }
            resp.status(404).json({ message: 'Comentarios no Encontrado' });
        } catch (error) {
            console.error(error);
            resp.status(404).json({ message: error });
        }
    }
//Crea un nuevo usuario en nuestra base de datos reciviendo el cuerpo de nuestro modelo tipo usario
    public async createcom(req: Request, resp: Response): Promise<void> {
        try {
            await cnn.query('INSERT INTO comentarios set ?', [req.body]);
            resp.json({ message: 'Usuario Almacenado' });
        } catch (error) {
            console.error(error);
            resp.status(404).json({ message: error });
        }
    }
//Actualizar usuarios
    public async updatecom(req: Request, resp: Response): Promise<void> {
        try {  
            const oldGame = req.body;
            const { id } = req.params;
            await cnn.query('UPDATE comentarios SET ? WHERE id = ?', [req.body,id]);
            resp.json({ message: 'Usuario Actualizado' });
            console.log("REQ PARAMS: ",req.params);
            console.log("REQ BODY",req.body);

           
        } catch (error) {
            console.log(error);
            resp.status(404).json({ message: error });
        }
        
    }

    public async deletecom(req: Request, resp: Response): Promise<void> {
        try {
            const { id } = req.params;
            //Unique 
            await cnn.query('DELETE FROM comentarios WHERE id = ?', [id]);
            resp.json({ message: 'Comentario Eliminado' });
        } catch (error) {
            console.log(error);
            resp.status(404).json({ message: error });
        }
    }
}

const comentariosController = new ComentariosController();
export default comentariosController;