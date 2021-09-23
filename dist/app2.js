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
    function Concessionaria(endereco, lista_de_carros) {
        this.endereco = endereco;
        this.listaDeCarros = lista_de_carros;
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
//--- SPECS  ---//
//***Objetos do tipo Carros */
var carroA = new Carro('Nissan', 'GTR 35 Premium', 4, 769109);
var carroB = new Carro('Chevrolet', 'Camaro', 4, 85109);
var carroC = new Carro('Porche', 'Cayman', 2, 91109);
var carroD = new Carro('Dodge', 'Charge', 2, 115109);
var carroE = new Carro('Lamborguini', 'Diablo SV', 2, 225109);
var listaDeCarros = [carroA, carroB, carroC, carroD, carroE];
var concessionaria = new Concessionaria('Av. Paulista', listaDeCarros);
//***Comprar o Carros
var cliente = new Pessoa('Alexandre Sampaio', 'GTR 35 Premium');
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        // Compra o Carro
        cliente.comprarCarro(carro);
    }
});
console.log(cliente);
