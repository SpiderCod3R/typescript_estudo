"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, lista_de_carros) {
        this.endereco = endereco;
        this.listaDeCarros = lista_de_carros;
    }
    Concessionaria.prototype.fornecerHorariosDeFuncionamento = function () {
        return "De segunda à Sexta das 09:00 as 19:00 aos Sabados e Domingo de 08:00 à 13:00";
    };
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaDeCarros = function () {
        return this.listaDeCarros;
    };
    return Concessionaria;
}());
exports.default = Concessionaria;
