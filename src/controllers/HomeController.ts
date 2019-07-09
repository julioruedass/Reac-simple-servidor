// Importar Request y Response de express,
// para atender las peticiones http
import { Request, Response } from 'express';

class IndexController {


    public goIndex(req: Request, resp: Response): void {

        resp.json({ text: 'We are on Index' });

    }
}

const indexController = new IndexController();
export default indexController;