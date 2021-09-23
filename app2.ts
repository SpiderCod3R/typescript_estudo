class Carro {
  private modelo: string
  private numeroDePortas: number
  private velocidade: number =0
  private marca: string
  private valor: number =0

  constructor(marca: string, modelo: string, numero_de_portas: number, valor: number) {
    this.marca = marca
    this.modelo = modelo
    this.numeroDePortas= numero_de_portas
    this.valor= valor
  }

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

class Concessionaria {
  private endereco: string
  private listaDeCarros: Array<Carro>
  
  constructor(endereco: string, lista_de_carros: Array<Carro>) {
    this.endereco = endereco
    this.listaDeCarros= lista_de_carros
  }
  
  public fornecerEndereco(): string {
    return this.endereco
  }

  public mostrarListaDeCarros(): Array<Carro> {
    return this.listaDeCarros
  }
}

class Pessoa {
  private nome: string
  private carro: Carro
  private carroPreferido: string

  constructor(nome: string, carroPreferido: string) {
    this.nome=nome
    this.carroPreferido=carroPreferido
  }

  public dizerNome(): string {
    return this.nome
  }

  public dizerCarroPreferido(): string {
    return this.carroPreferido
  }

  public comprarCarro(carro: Carro): void {
    this.carro = carro
  }

  public dizerCarroQueTem(): Carro {
    return this.carro
  }
}

//--- SPECS  ---//

//***Objetos do tipo Carros */
let carroA = new Carro('Nissan', 'GTR 35 Premium', 4, 769_109)
let carroB = new Carro('Chevrolet', 'Camaro', 4, 85_109)
let carroC = new Carro('Porche', 'Cayman', 2, 91_109)
let carroD = new Carro('Dodge', 'Charge', 2, 115_109)
let carroE = new Carro('Lamborguini', 'Diablo SV', 2, 225_109)

let listaDeCarros: Carro[] = [carroA, carroB, carroC, carroD, carroE]

let concessionaria = new Concessionaria('Av. Paulista', listaDeCarros)

//***Comprar o Carros
let cliente = new Pessoa('Alexandre Sampaio', 'GTR 35 Premium')

concessionaria.mostrarListaDeCarros().map((carro: Carro)=> {
  if (carro['modelo'] == cliente.dizerCarroPreferido()) {
    // Compra o Carro
    cliente.comprarCarro(carro)
  }
})

console.log(cliente)