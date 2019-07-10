import { Router } from 'express';

import seccionController from '../controllers/SeccionController';

class SeccionRouter {

    router = Router();

    constructor() { 
        this.setConfig();
    }

    setConfig(): void {
        //obtener usuario y pasword
        this.router.get('/:usu_usu', seccionController.getusu);

    }

}

const seccionRouter = new SeccionRouter();
export default seccionRouter.router;