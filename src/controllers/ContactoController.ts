import { Request, Response } from 'express';
import cnn from '../dbconfig/ConexionDB';


class ContactoController {

    // Obtiene un listado de todos los registros de la tabla
    public async list(req: Request, resp: Response) {

        try {
            const contactList = await cnn.query('SELECT * FROM usuarios');
            resp.json(contactList);
        } catch (error) {
            console.error(error);
        }

    }

    // Obtiene un contacto de la tabla por su id
    public async get(req: Request, resp: Response): Promise<any> {

        try {

            const { id } = req.params;
            
            const contact = await cnn.query('SELECT * FROM contacto WHERE id = ?', [id]);

            
            if (contact.length > 0) {
                
                return resp.json(contact[0]);
            }
            resp.status(404).json({ message: 'Contacto no encontrado' });

        } catch (error) {
            console.error(error);
            resp.status(404).json({ message: error });
        }
    }

    public async create(req: Request, resp: Response): Promise<void> {
        try {

            await cnn.query('INSERT INTO contacto set ?', [req.body]);

            resp.json({ message: 'Contacto almacenado' });

        } catch (error) {
            console.error(error);
            resp.status(404).json({ message: error });
        }
    }


    public async update(req: Request, resp: Response): Promise<void> {
        try {

            const { id } = req.params;
            await cnn.query('UPDATE contacto SET ? WHERE id = ?', [req.body, id]);

            resp.json({ message: 'Contacto actualizado' });

        } catch (error) {
            console.log(error);
            resp.status(404).json({ message: error });
        }
    }

    public async delete(req: Request, resp: Response): Promise<void> {
        try {

            const { id } = req.params;
            await cnn.query('DELETE FROM contacto WHERE id = ?', [id]);

            resp.json({ message: 'Contacto eliminado' });

        } catch (error) {
            console.log(error);
            resp.status(404).json({ message: error });
        }
    }

}

const contactoController = new ContactoController();
export default contactoController;