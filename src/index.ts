import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRouter from './routes/IndexRouter';
import contactoRouter from './routes/ContactoRouter';
class Server {

    app: Application;
    port: any;

    constructor() {
        this.app = express();
        this.setConfig();
        this.setRouters();

    }

    setConfig(): void {

        this.port = process.env.PORT || 3000;
        this.app.set('port', this.port);

        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
    }

    setRouters(): void {

        this.app.use('/', indexRouter);
        this.app.use('/api/usuarios', contactoRouter);

    }

    start(): void {

        this.app.listen(this.port, () => {
            console.log('Server running at port:', this.port);
        });

    }

}

const server = new Server();
server.start();