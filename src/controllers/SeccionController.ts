import { Request, Response } from 'express';
import cnn from '../dbconfig/ConexionDB';

class SeccionController {


    // Obtiene un contacto de la tabla por su usuario y contraseña  
    public async getusu(req: Request, resp: Response): Promise<any> {
        try {  
            const password_usu = req.body;
            const { usu_usu } = req.params;
            console.log('Req Body =',password_usu);
            console.log('Req Params =',req.params);
            console.log('Req param =',password_usu);
            //Consulta a la base de datos reciviendo de cliente de cabecera un id
            const contact = await cnn.query('SELECT usu_usu , password_usu, id FROM usuarios WHERE usu_usu = ? ', [usu_usu ]);
            //await cnn.query('UPDATE usuarios SET ? WHERE id = ?', [req.body,id]);
            if (contact.length > 0) {   
                return resp.json(contact[0]);
                console.log('Usuario  encontrado',contact[0] );
            }
            resp.status(404).json({ message: 'Usu_usu no Encontrado' });
            console.log('Usuario no encontrado'  );
        } catch (error) {
            console.error(error);
            resp.status(404).json({ message: error });
        }
    }


 }
const seccionController = new SeccionController();
export default seccionController;