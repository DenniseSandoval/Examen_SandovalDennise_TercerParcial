"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 4000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/api/product', productRoutes_1.default);
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
