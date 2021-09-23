"use strict";
var Carro = /** @class */ (function () {
    function Carro(marca, modelo, numero_de_portas, valor) {
        this.velocidade = 0;
        this.valor = 0;
        this.marca = marca;
        this.modelo = modelo;
        this.numeroDePortas = numero_de_portas;
        this.valor = valor;
    }
    Carro.prototype.acelerar = function () {
        this.velocidade += 10;
    };
    Carro.prototype.parar = function () {
        this.velocidade = 0;
    };
    Carro.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Carro;
}());
var carroA = new Carro('Nissan', 'GTR 35 Premium', 4, 769109);
console.log(carroA);
carroA.acelerar();
carroA.acelerar();
carroA.acelerar();
carroA.acelerar();
carroA.acelerar();
console.log(carroA);
