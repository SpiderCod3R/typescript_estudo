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
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco) {
        this.endereco = endereco;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaDeCarros = function () {
        return this.listaDeCarros;
    };
    return Concessionaria;
}());
var concessionaria = new Concessionaria('Rua Antunieta Fernandes, 76');
var carroA = new Carro('Nissan', 'GTR 35 Premium', 4, 769109);
console.log(concessionaria);
