import Carro from "./modules/carro";
import Concessionaria from "./modules/consecionaria";
import Moto from "./modules/moto";

let carro = new Carro('Porche', 'Verona', 2, 91_109)
carro.acelerar()
carro.acelerar()
carro.acelerar()

let moto = new Moto()
moto.acelerar()
moto.acelerar()
moto.acelerar()
moto.acelerar()
moto.acelerar()

console.log(carro)
console.log(moto)

let concessionaria = new Concessionaria('', [])
console.log(concessionaria.fornecerHorariosDeFuncionamento())
