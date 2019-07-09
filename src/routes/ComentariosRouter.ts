import { Router } from 'express';
import comentariosController from '../controllers/ComentariosController';

class ComentariosRouter {

    router = Router();

    constructor() { 
        this.setConfig();
    }

    setConfig(): void {
       
        // Obtiene un listado de todos los comentarios 
        this.router.get('/', comentariosController.listcom);
        // Obtiene un solo comentario, con base en el id
        this.router.get('/:id_usu', comentariosController.getcom);
        // Crea:inserta un nuevo usuario en la tabla
        this.router.post('/', comentariosController.createcom);
        // Actualiza la información de un comentario existente
        this.router.put('/:id', comentariosController.updatecom);
        // Elimina un comentario existente
        this.router.delete('/:id', comentariosController.deletecom);



    }

}

const comentariosRouter = new ComentariosRouter();
export default comentariosRouter.router;