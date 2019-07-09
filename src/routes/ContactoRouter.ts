import { Router } from 'express';
import contactoController from '../controllers/ContactoController';

class ContactoRouter {

    router = Router();

    constructor() { 
        this.setConfig();
    }

    setConfig(): void {

        // Obtiene un listado de todos los contactos
        this.router.get('/', contactoController.list);
        // Obtiene un solo contacto, con base en el id
        this.router.get('/:id', contactoController.get);

        // Crea:inserta un nuevo contacto en la tabla
        this.router.post('/', contactoController.create);
        // Actualiza la información de un contacto existente
        this.router.put('/:id', contactoController.update);
        // Elimina un contacto existente
        this.router.delete('/:id', contactoController.delete);



    }

}

const contactoRouter = new ContactoRouter();
export default contactoRouter.router;