import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRouter from './routes/IndexRouter';
import contactoRouter from './routes/ContactoRouter';
import actividadRouter from './routes/ActividadRouter';
import comentariosRouter from './routes/ComentariosRouter';
import seccionRouter from './routes/SeccionRouter';
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
        this.app.use('/api/usuarios/actividad', actividadRouter);
        this.app.use('/api/usuarios', contactoRouter);
        this.app.use('/api/seccion', seccionRouter);
        this.app.use('/api/comentarios', comentariosRouter);
  

    }

    start(): void {

        this.app.listen(this.port, () => {
            console.log('Servidor Trabaja En:', this.port);
        });

    }

}

const server = new Server();
server.start();