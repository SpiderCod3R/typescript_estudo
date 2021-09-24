"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Veiculo = /** @class */ (function () {
    function Veiculo() {
        this.marca = '';
        this.modelo = '';
        this.valor = 0;
        this.velocidade = 0;
    }
    Veiculo.prototype.acelerar = function () {
        this.velocidade += 10;
    };
    Veiculo.prototype.parar = function () {
        this.velocidade = 0;
    };
    Veiculo.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    Veiculo.prototype.to_string = function () {
        return this.marca + ' ' + this.modelo;
    };
    return Veiculo;
}());
exports.default = Veiculo;
