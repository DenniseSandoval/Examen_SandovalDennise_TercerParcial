import {Router} from 'express';
import {procuctController} from '../controllers/productsControlers';


class ProductRouter {
    public router: Router=Router();

    constructor(){
        this.config();

    }
    
    config(): void {
        this.router.get('/', procuctController.getAll);
        this.router.get('/:id', procuctController.getOne);
        this.router.post('/', procuctController.create);
        this.router.put('/:id', procuctController.update);
        this.router.delete('/:id', procuctController.delete);
    }
}

const productRouter= new ProductRouter();
export default productRouter.router;
