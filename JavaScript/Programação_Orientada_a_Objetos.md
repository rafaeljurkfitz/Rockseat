# Programação Orientada a Objetos

## O que é programação orientada a objetos?

- Um paradigma de desenvolvimento;
- É usada para se ter um melhor entendimento do código, pensando nele como Objetos;
- É utilizada por analista de sistemas, e não apenas por programadores;
    - Na fase de levantamento de requisitos do sistema;
    - Via gráficos, desenhos e textos.
- Organizar o código;
- Boa para fazer reuso do código;
- Classificar as rotinas e trechos do código.

## Objetos

Todo objeto possui:

- Propriedades e Funcionalidades
- Estado e Comportamentos;
- Atributos e Métodos.

## Abstratos vs Mundo Real

Trazemos a representação de algo do mundo real para Objetos

- Pessoa;
- Aluno;
- Produto;
- Carrinho de compras;

Porém, alguns objetos na programação não são fáceis de identificar, pois são abstratos como, por exemplo:

- Autenticação;
- Autorização.

> 💡 Nem todo objeto do mundo real fará parte do seu sistema.
> 

## Classes

As classes na orientação a objeto funcionam como um molde para os objetos. Os objetos são criados a partir de uma classe e muitos deles podem ser feitos da mesma classe.

- Exemplo: Máquina de biscoito;
    - Instâncias.

## Classes em JavaScript

- Syntactical sugar;
- Prototype.

No JavaScript quando se cria uma classe e seus objetos, se herda outra classe através de uma herança prototipal. E essa classe possui muitas outras propriedades além das 3 criadas anteriormente. 

## Encapsulamento

- Colocar numa cápsula;
- Agrupamento de funções e variáveis que estavam espalhados no código em uma `classe`.
- Escondendo detalhes de implementação
    
    `Dirigir um carro vs conhecer o motor do carro.`
    
- Camada de segurança para os atributos e métodos.

```jsx
//Estrutural

let altura = 50
let largura = 60

function calcularArea() {
	return altura * largura
}

let area = calcularArea()
```

```jsx
//Orientado a objetos
class Poligono {
	constructor(altura, largura) {
		this.altura = altura
		this.largura = largura
	}

	get area() {
		return this.#calcularArea()
	}

	#calcularArea() {
		return this.altura * this.largura
	}

}

//criar o objeto
let poligono = new Poligono(50, 60)
console.log(poligono)
```

## Confusão e Solução

***Programação Estruturada x Orientação a Objetos***

### Programação Estruturada

- Processa a entrada e manipulação dos dados, até a saída;
- Uso de sequências, estruturas de repetições e condições;
- Uso de uma rotina maior, ou sub-rotinas.
- Não existem restrições às variáveis.

### Programação Orientada a Objetos

- Surge para trazer um cuidado ao uso estruturado.
    - Não elimina por completo o uso estruturado.
- Conceitos como Objetos e Classes;
- Cuidados com variáveis e rotinas(Encapsulamento)
- Melhor reuso de código(Herança)

```jsx
//estruturado
var valorHora = 50
var tempoEstimado = 20
var desconto = valorHora * tempoEstimado * (10 / 100)
var custoEstimado = valorHora * tempoEstimado - desconto
console.log(custoEstimado)

//POO
const job = new Job()
job.valorHora = 50
job.tempoEstimado = 20
job.desconto = 10
const custoEstimado = job.calcularEstimativa()
console.log(custoEstimado)
```

## Herança

- Pais e filhos;
- Objetos podem herdar, ou estender, características bases;
- Uma cópia de atributos e métodos de outra classe.

```jsx
class Veiculo {
	rodas = 4;
	
	mover(direcao){}
	virar(direcao){}
}

class Moto extends Veiculo {
	constructor() {
		super() //puxar atributos e métodos do pai
		this.rodas = 2;
	}
}
```

- Um objeto pode estender de outro objeto que pode estender de outro objeto...
- Fácil reutilização de código.

## Polimorfismo

- Quando um objeto estende de outro(`Herança`) talvez haja necessidade de reescrever uma ou mais características (`atributos e métodos`) nesse novo objeto.
- Recriaremos então um método (ou mais) da classe herdada.
- Polimorfismo significa `muitas formas`.

```jsx
class Atleta {
	peso;
	categoria;
	
	constructor(peso) {
		this.peso = peso
	}

	definirCategoria() {
		if (this.peso <= 50) {
			this.categoria = 'infantil'
		}
		else if (this.peso <= 65) {
			this.categoria = 'juvenil'
		}
		else {
			this.categoria = 'adulto'
		}
	}
}
```

```jsx
class Lutador extends Atleta {
	constructor(peso) {
		super(peso)
	}

	definirCategoria() {
		if (this.peso <= 54) {
			this.categoria = 'pluma'
		}
		else if (this.peso <= 60) {
			this.categoria = 'leve'
		}
		else if (this.peso <= 75) {
			this.categoria = 'meio-leve'
		}
		else {
			this.categoria = 'pesado'
		}
	}
}
```

## Abstração

***Template ou Identidade de uma classe que será construída no futuro.***

- Atributos e métodos podem ser criados na classe Abstração  (Superclasse) MAS
- A implementação dos métodos e atributos, só poderá ser feita na classe que irá herdar essa Abstração.

```jsx
class Parafuso {
	constructor() {
		if (this.constructor === Parafuso)
			throw new Error('Classe abstrata não pode ser instânciada.')	
	}
	get tipo() {
		throw new Error('Método "get tipo()" precisa ser implementado.')
	}
}

class Fenda extends Parafuso {
	constructor() { super() }
	
	get tipo() {
		return 'fenda'
	}
}

class Philips extends Parafuso {
	constructor() { super() }
	
	get tipo() {
		return 'philips'
	}
}

class Allen extends Parafuso {}

//criar e usar
//new Parafuso // 'Classe abstrata não pode ser instânciada'
let fenda = new Fenda()
let philips = new Philips()
let allen = new Allen()

console.log(fenda.tipo, philips.tipo)
console.log(allen.tipo) // 'Método "get tipo()" precisa ser implementado'
```