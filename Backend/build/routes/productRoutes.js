"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productsControlers_1 = require("../controllers/productsControlers");
class ProductRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', productsControlers_1.procuctController.getAll);
        this.router.get('/:id', productsControlers_1.procuctController.getOne);
        this.router.post('/', productsControlers_1.procuctController.create);
        this.router.put('/:id', productsControlers_1.procuctController.update);
        this.router.delete('/:id', productsControlers_1.procuctController.delete);
    }
}
const productRouter = new ProductRouter();
exports.default = productRouter.router;
