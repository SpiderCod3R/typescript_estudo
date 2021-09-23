"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, telefone) {
        this.nome = nome;
        this.telefone = telefone;
    }
    Pessoa.prototype.dizerNome = function () {
        return this.nome;
    };
    Pessoa.prototype.dizerTelefone = function () {
        return this.telefone;
    };
    return Pessoa;
}());
exports.default = Pessoa;
