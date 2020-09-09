import { Request, Response } from 'express';
import pool from '../database';
class ProductController {


    public async getAll(req: Request, res: Response): Promise<void> {
        const workers = await pool.query('SELECT * FROM subcategoria');
        res.json(workers);
    }
    public async getAllCategory(req: Request, res: Response): Promise<void> {
        const workers = await pool.query('SELECT * FROM categoria');
        res.json(workers);
    }
    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const product = await pool.query('SELECT * FROM subcategoria WHERE COD_CATEGORIA = ?', [id]);
        if (product.length > 0) {
            return res.json(product);
        }
        res.status(404).json({ text: "Producto no registrado" });
    }
    public async create(req: Request, res: Response): Promise<any> {
        const result = await pool.query('INSERT INTO subcategoria set ?', [req.body]);
        res.json(result);

    }
    public async update(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const product = req.body;
        const result = await pool.query('UPDATE subcategoria set ? WHERE codigo = ?', [product, id]);
        res.json(result);
    }

    public async delete(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const result = await pool.query('DELETE FROM subcategoria  WHERE COD_SUB_CATEGORIA = ?', [id]);
        res.json(result);
    }
}

export const procuctController = new ProductController;