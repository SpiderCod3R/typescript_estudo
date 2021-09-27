"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsecionariaDAO = void 0;
var consecionaria_1 = __importDefault(require("../modules/consecionaria"));
var ConsecionariaDAO = /** @class */ (function () {
    function ConsecionariaDAO() {
        this.nomeTabela = 'tb_concessionaria';
    }
    ConsecionariaDAO.prototype.inserir = function (object) {
        console.log('Logica de Inserir');
        return true;
    };
    ConsecionariaDAO.prototype.atualizar = function (object) {
        console.log('Logica de atualizar');
        return true;
    };
    ConsecionariaDAO.prototype.remover = function (id) {
        console.log('Logica de remover');
        return new consecionaria_1.default('', []);
    };
    ConsecionariaDAO.prototype.selecionar = function (id) {
        console.log('Logica de selecionar');
        return new consecionaria_1.default('', []);
    };
    ConsecionariaDAO.prototype.selecionarTodos = function () {
        console.log('Logica de selecionar todos');
        return [new consecionaria_1.default('', [])];
    };
    return ConsecionariaDAO;
}());
exports.ConsecionariaDAO = ConsecionariaDAO;
