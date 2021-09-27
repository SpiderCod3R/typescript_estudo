import { DaoInterface } from "./dao_interface";
import Concessionaria from "../modules/consecionaria";

export class ConsecionariaDAO{
  nomeTabela: string = 'tb_concessionaria'

  inserir(object: Concessionaria): boolean {
    console.log('Logica de Inserir')
    return true
  }
  atualizar(object: Concessionaria): boolean {
    console.log('Logica de atualizar')
    return true
  }
  remover(id: number): Concessionaria {
    console.log('Logica de remover')
    return new Concessionaria('', [])
  }
  selecionar(id: number): Concessionaria {
    console.log('Logica de selecionar')
    return new Concessionaria('', [])
  }
  selecionarTodos(): any[] {
    console.log('Logica de selecionar todos')
    return [ new Concessionaria('', []) ]
  }
}