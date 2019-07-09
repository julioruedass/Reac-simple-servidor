import { Router } from 'express';
import actController from '../controllers/ActividadContrller';

class ActividadRouter {

    router = Router();

    constructor() { 
        this.setConfig();
    }

    setConfig(): void {

        // Obtiene un listado de todos los usuarios 
        this.router.get('/', actController.list);
        // Obtiene un solo usuario, con base en el id
        this.router.get('/:id', actController.get);

        // Crea:inserta un nuevo usuario en la tabla
        this.router.post('/', actController.create);
        // Actualiza la información de un usuario existente
        this.router.put('/:id', actController.update);
        // Elimina un usuario existente
        this.router.delete('/:id', actController.delete);



    }

}

const actividadRouter = new ActividadRouter();
export default actividadRouter.router;