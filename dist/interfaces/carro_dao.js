"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarroDAO = void 0;
var carro_1 = __importDefault(require("../modules/carro"));
var CarroDAO = /** @class */ (function () {
    function CarroDAO() {
        this.nomeTabela = 'tb_carro';
    }
    CarroDAO.prototype.inserir = function (object) {
        console.log('Logica de Inserir');
        return true;
    };
    CarroDAO.prototype.atualizar = function (object) {
        console.log('Logica de atualizar');
        return true;
    };
    CarroDAO.prototype.remover = function (id) {
        console.log('Logica de remover');
        return new carro_1.default('', '', 2, 0);
    };
    CarroDAO.prototype.selecionar = function (id) {
        console.log('Logica de selecionar');
        return new carro_1.default('', '', 2, 0);
    };
    CarroDAO.prototype.selecionarTodos = function () {
        console.log('Logica de selecionar todos');
        return [new carro_1.default('', '', 2, 0)];
    };
    return CarroDAO;
}());
exports.CarroDAO = CarroDAO;
