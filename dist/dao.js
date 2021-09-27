"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dao = void 0;
var Dao = /** @class */ (function () {
    function Dao() {
        this.nomeTabela = '';
    }
    Dao.prototype.inserir = function (object) {
        console.log('Logica de Inserir');
        return true;
    };
    Dao.prototype.atualizar = function (object) {
        console.log('Logica de atualizar');
        return true;
    };
    Dao.prototype.remover = function (id) {
        console.log('Logica de remover');
        return Object();
    };
    Dao.prototype.selecionar = function (id) {
        console.log('Logica de selecionar');
        return Object();
    };
    Dao.prototype.selecionarTodos = function () {
        console.log('Logica de selecionar todos');
        return [Object()];
    };
    return Dao;
}());
exports.Dao = Dao;
