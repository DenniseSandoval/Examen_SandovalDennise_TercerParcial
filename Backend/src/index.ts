import express, { Application } from 'express';
import productRouter from './routes/productRoutes';

import morgan from 'morgan';
import cors from 'cors';

class Server {

    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }
    config(): void {
        this.app.set('port', process.env.PORT || 4000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }
    routes(): void {
        this.app.use('/api', productRouter);
    }

    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }

}

const server = new Server();
server.start();
//npm run build|
//npm run dev
//npm install-> ejecutar proyecto primera vez
/*
Crear Túnel
ngrok http http://localhost:4000 */
//lustar todos productos METODO GET http://localhost:4000/api/product/
//buscar producto por id  METODO GET http://localhost:4000/api/product/11
/*crear producto metodo POST http://localhost:4000/api/product
{
    "descripcion": "Lechuga",
    "categoria": "Legumbres",
    "fecha_expiracion": "2020-09-25T05:00:00.000Z",
    "precio": 0.40
}*/

/*Actualizar producto por id  METODO PUT http://localhost:4000/api/product/11
{
    "codigo": 11,
    "descripcion": "Leche",
    "categoria": "Lacteos",
    "fecha_expiracion": "2020-07-25T05:00:00.000Z",
    "precio": 1.85
}
*/