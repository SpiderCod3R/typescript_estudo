import { DaoInterface } from "./dao_interface";
import Carro from "../modules/carro";

export class CarroDAO{

  nomeTabela: string = 'tb_carro'

  inserir(object: Carro): boolean {
    console.log('Logica de Inserir')
    return true
  }
  atualizar(object: Carro): boolean {
    console.log('Logica de atualizar')
    return true
  }
  remover(id: number): Carro {
    console.log('Logica de remover')
    return new Carro('', '',2, 0)
  }
  selecionar(id: number): Carro {
    console.log('Logica de selecionar')
    return new Carro('', '',2, 0)
  }
  selecionarTodos(): any[] {
    console.log('Logica de selecionar todos')
    return [ new Carro('', '',2, 0) ]
  }
}