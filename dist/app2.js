"use strict";
// Forma de importar Default e non Default parameters
// import Carro, { qualquer_coisa as x  } from './modules/carro'
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var carro_1 = __importDefault(require("./modules/carro"));
// import Pessoa from './modules/pessoa'
var consecionaria_1 = __importDefault(require("./modules/consecionaria"));
var cliente_1 = __importDefault(require("./modules/cliente"));
//--- SPECS  ---//
//***Objetos do tipo Carros */
var carroA = new carro_1.default('Nissan', 'GTR 35 Premium', 4, 769109);
var carroB = new carro_1.default('Chevrolet', 'Camaro', 4, 85109);
var carroC = new carro_1.default('Porche', 'Cayman', 2, 91109);
var carroD = new carro_1.default('Dodge', 'Charge', 2, 115109);
var carroE = new carro_1.default('Lamborguini', 'Diablo SV', 2, 225109);
var listaDeCarros = [carroA, carroB, carroC, carroD, carroE];
var concessionaria = new consecionaria_1.default('Av. Paulista', listaDeCarros);
//***Comprar o Carros
var cliente = new cliente_1.default('Alexandre Sampaio', '9999999999999', 'GTR 35 Premium');
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        // Compra o Carro
        cliente.comprarCarro(carro);
    }
});
console.log(cliente);
