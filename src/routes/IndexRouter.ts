import { Router } from 'express';
import indexController from '../controllers/HomeController';



class IndexRouter{

    public router = Router();

    constructor(){
        this.setConfig();
    }

    setConfig():void{


        this.router.get('/', indexController.goIndex);

    }


}


const indexRouter = new IndexRouter();
export default indexRouter.router;