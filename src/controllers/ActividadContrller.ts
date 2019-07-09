import { Request, Response } from 'express';
import cnn from '../dbconfig/ConexionDB';


class ActividadController {

    // Obtiene un listado de todos los registros de la tabla
    public async list(req: Request, resp: Response) {
        try {
            //resp.json({text:'consulta swelect'});
            const contactList = await cnn.query('SELECT * FROM actividad');
            resp.json(contactList);
        } catch (error) {
            console.error(error);
        }
    }




    // Obtiene un contacto de la tabla por su id
    public async get(req: Request, resp: Response): Promise<any> {

        try {

            const { id } = req.params;
            
            const contact = await cnn.query('SELECT * FROM actividad WHERE id_usu= ?', [id]);

            
            if (contact.length > 0) {
              return  resp.json(contact);
                //return resp.json(contact[0]);
            }
            resp.status(404).json({ message: ' Encontrado' });

        } catch (error) {
            console.error(error);
            resp.status(404).json({ message: error });
        }
    }
//Crea un nuevo usuario en nuestra base de datos
    public async create(req: Request, resp: Response): Promise<void> {
        
        try {
            
            await cnn.query('INSERT INTO actividad set ?', [req.body]);

            resp.json({ message: ' Almacenado' });

        } catch (error) {
            console.error(error);
            resp.status(404).json({ message: error });
        }
    }

//actualizar
    public async update(req: Request, resp: Response): Promise<void> {
        try {
            const { id } = req.params;
            await cnn.query('UPDATE actividad SET ? WHERE id = ?', [id]);

            resp.json({ message: 'Actualizado' });

        } catch (error) {
            console.log(error);
            resp.status(404).json({ message: error });
        }
    }

    public async delete(req: Request, resp: Response): Promise<void> {
        try {

            const { id } = req.params;
            await cnn.query('DELETE FROM actividad WHERE id = ?', [id]);

            resp.json({ message: 'Eliminado' });

        } catch (error) {
            console.log(error);
            resp.status(404).json({ message: error });
        }
    }

    



}

const actController = new ActividadController();
export default actController;