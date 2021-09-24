export default class Veiculo {
  protected marca: string=''
  protected modelo: string=''
  protected valor: number =0
  protected velocidade: number =0

  public acelerar(): void {
    this.velocidade += 10
  }

  public parar(): void {
    this.velocidade = 0
  }

  public velocidadeAtual(): number {
    return this.velocidade
  }

  public to_string(): string {
    return this.marca + ' ' + this.modelo
  }
}