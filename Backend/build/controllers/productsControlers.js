"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.procuctController = void 0;
const database_1 = __importDefault(require("../database"));
class ProductController {
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const workers = yield database_1.default.query('SELECT * FROM subcategoria');
            res.json(workers);
        });
    }
    getAllCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const workers = yield database_1.default.query('SELECT * FROM categoria');
            res.json(workers);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const product = yield database_1.default.query('SELECT * FROM subcategoria WHERE COD_CATEGORIA = ?', [id]);
            if (product.length > 0) {
                return res.json(product);
            }
            res.status(404).json({ text: "Producto no registrado" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('INSERT INTO subcategoria set ?', [req.body]);
            res.json(result);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const product = req.body;
            const result = yield database_1.default.query('UPDATE subcategoria set ? WHERE codigo = ?', [product, id]);
            res.json(result);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const result = yield database_1.default.query('DELETE FROM subcategoria  WHERE COD_SUB_CATEGORIA = ?', [id]);
            res.json(result);
        });
    }
}
exports.procuctController = new ProductController;
