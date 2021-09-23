import Veiculo from "./veiculo"

export default class Carro extends Veiculo{
  private numeroDePortas: number

  constructor(marca:string, modelo: string, numero_de_portas: number, valor: number) {
    super()
    this.marca= marca
    this.modelo= modelo
    this.numeroDePortas= numero_de_portas
    this.valor= valor
  }
}

export const qualquer_coisa: string = "APENAS UM TESTE"