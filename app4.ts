import { CarroDAO } from "./interfaces/carro_dao";
import { ClienteDAO } from "./interfaces/cliente_dao";
import { ConsecionariaDAO } from "./interfaces/concessionaria_dao";
import Carro from "./modules/carro";
import Cliente from "./modules/cliente";
import Concessionaria from "./modules/consecionaria";

let consecionaria = new Concessionaria('', [])
let dao: ConsecionariaDAO = new ConsecionariaDAO()

dao.inserir(consecionaria)

let clienteDAO: ClienteDAO = new ClienteDAO()
let cliente= new Cliente('', '', '')

clienteDAO.atualizar(cliente)

let carroDAO: CarroDAO = new CarroDAO()
let carroA = new Carro('', '', 2, 0)

carroDAO.selecionarTodos()
