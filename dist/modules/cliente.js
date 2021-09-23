"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var pessoa_1 = __importDefault(require("./pessoa"));
var Cliente = /** @class */ (function (_super) {
    __extends(Cliente, _super);
    function Cliente(nome, telefone, carroPreferido) {
        var _this = _super.call(this, nome, telefone) || this;
        _this.carroPreferido = carroPreferido;
        return _this;
    }
    Cliente.prototype.dizerCarroPreferido = function () {
        return this.carroPreferido;
    };
    Cliente.prototype.comprarCarro = function (carro) {
        this.carro = carro;
    };
    Cliente.prototype.dizerCarroQueTem = function () {
        return this.carro;
    };
    return Cliente;
}(pessoa_1.default));
exports.default = Cliente;
