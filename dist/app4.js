"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dao_1 = require("./dao");
var carro_1 = __importDefault(require("./modules/carro"));
var cliente_1 = __importDefault(require("./modules/cliente"));
var consecionaria_1 = __importDefault(require("./modules/consecionaria"));
var consecionaria = new consecionaria_1.default('', []);
var cliente = new cliente_1.default('', '', '');
var carroA = new carro_1.default('', '', 2, 0);
var dao3 = new dao_1.Dao();
var dao4 = new dao_1.Dao();
dao3.inserir(consecionaria);
dao4.remover(55);
