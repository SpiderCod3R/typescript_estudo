import Veiculo from "./veiculo"


class Moto extends Veiculo{

  constructor(marca:string, modelo: string, numero_de_portas: number, valor: number) {
    super()
    this.marca= marca
    this.modelo= modelo
    this.valor= valor
  }
  
}

export default Moto