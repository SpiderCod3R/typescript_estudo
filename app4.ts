import { Dao } from "./dao";
import Carro from "./modules/carro";
import Cliente from "./modules/cliente";
import Concessionaria from "./modules/consecionaria";

let consecionaria = new Concessionaria('', [])

let cliente= new Cliente('', '', '')

let carroA = new Carro('', '', 2, 0)

let dao3: Dao<Concessionaria> = new Dao<Concessionaria>()
let dao4: Dao<Cliente> = new Dao<Cliente>()

dao3.inserir(consecionaria)
dao4.remover(55)