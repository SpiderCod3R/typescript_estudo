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
    Carro.prototype.to_string = function () {
        return this.marca + ' ' + this.modelo;
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
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, carroPreferido) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    Pessoa.prototype.dizerNome = function () {
        return this.nome;
    };
    Pessoa.prototype.dizerCarroPreferido = function () {
        return this.carroPreferido;
    };
    Pessoa.prototype.comprarCarro = function (carro) {
        this.carro = carro;
    };
    Pessoa.prototype.dizerCarroQueTem = function () {
        return this.carro;
    };
    return Pessoa;
}());
var concessionaria = new Concessionaria('Rua Antunieta Fernandes, 76');
var carroA = new Carro('Nissan', 'GTR 35 Premium', 4, 769109);
var pessoa = new Pessoa('Alexandre Sampaio', carroA.to_string());
