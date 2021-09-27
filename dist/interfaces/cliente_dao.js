"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteDAO = void 0;
var cliente_1 = __importDefault(require("../modules/cliente"));
var ClienteDAO = /** @class */ (function () {
    function ClienteDAO() {
        this.nomeTabela = 'tb_cliente';
    }
    ClienteDAO.prototype.inserir = function (object) {
        console.log('Logica de Inserir');
        return true;
    };
    ClienteDAO.prototype.atualizar = function (object) {
        console.log('Logica de atualizar');
        return true;
    };
    ClienteDAO.prototype.remover = function (id) {
        console.log('Logica de remover');
        return new cliente_1.default('', '', '');
    };
    ClienteDAO.prototype.selecionar = function (id) {
        console.log('Logica de selecionar');
        return new cliente_1.default('', '', '');
    };
    ClienteDAO.prototype.selecionarTodos = function () {
        console.log('Logica de selecionar todos');
        return [new cliente_1.default('', '', '')];
    };
    return ClienteDAO;
}());
exports.ClienteDAO = ClienteDAO;
