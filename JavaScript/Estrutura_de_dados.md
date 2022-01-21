# Estrutura de dados

## O que é Estrutura de dados?

Uma maneira de organizar e ordenar informações. Podem ser textos, números, booleanos e etc. E serão registrados na memória do computador.

- Organizar dados (informações);
    - Textos, números, booleanos ...
- Como estão registrados na memória.

```jsx
//Array
[1, 2, 3] // elementos 1, 2, 3

//Object
{ name: 'Fulano', idade: 20 } //elemntos name: 'Fulano', idade: 20
```

## Gerenciando dados

Estrutura de dados tem a ver com a gestão das informações da aplicação.

Para esse gerenciamento, podemos dividir em 3 etapas:

1. Modelar a estrutura;
2. Dar vida à estrutura (instanciar essa estrutura);
3. Criar as funcionalidades dessa estrutura.
    - Exemplo: inserir, excluir, buscar, exibir, contar ...

## Arrays

Array, vetor ou arranjo, é uma estrutura amplamente utilizada e implementada em quase todas as linguagens de programação.

Uma das estruturas mais básicas, simples de criar e utilizar.

```jsx
['a', 10, 'd', true] // total de 4 elementos
//0   1    2    3
```

### Características

- Acesso pelo index;
- Respeita a ordem de inserção dos elementos;
- Aceita valores duplicados;
- Dependendo do tamanho do Arrays, para encontrar e/ou deletar um elemento, será necessário um uso maior de performance.

### Arrays no JavaScript

- São dinâmicos;
- Você poderá ter dados de diferentes tipos misturados dentro de um Array. String, numbers, booleans, objetos, funções e até outros arrays.
- Existem muitos métodos já implementados;
    - `push(), pop(), find(), filter()` entre outros.

### Array no código

```jsx
const pilotos = ['Senna','Prost','Schumacher','Hamilton']

// a indexação (index) começa pelo número 0
console.log(pilotos[0])// Senna
console.log(pilotos[3])// Hamilton

// acessar o tamanho do array
console.log(pilotos.length)

//iterável
for (let piloto of pilotos) {
	console.log(piloto)
}

// adicionar elemento
pilotos.push('Alonso')
console.log(pilotos)

// encontrar um elemento
const senna = pilotos.find(piloto => piloto === 'Senna')
console.log(senna)

// deletar um elemento
pilotos.splice(1, 1)

console.log(pilotos)
```

## Matriz

- Matriz ou Vetor multidimensional;
- Significa que é um Array, dentro de outro array;
- Poderemos ter muitos níveis.

```jsx
const students = [['Joseph', 23, 'MG'], 
['Briana', 22, 'SP'], ['Priscila', 23, 'PR']]

console.log(students[0][1])
```

## Stack

Tradução de Stack é pilha;

Como uma pilha de livros.

- Linear, um após o outro;
- O ultimo a entrar na pilha é o primeiro a sair.

### Conceitos

- LIFO: Last In First Out
    - O ultimo elemento a entrar na pilha, aquele elemento do topo da pilha, é o primeiro a sair.

### Stack no código

***Métodos fundamentais***

- `push()`: adicionar um elemento à pilha;
- `pop()`: remover o elemento do topo da pilha;
- `peek()`: obter o elemento do topo da pilha.

Outros métodos poderão ser implementados como `size()` para mostrar o tamanho da pilha.

```jsx
//passo 1: Modelando
class Stack {
	constructor() {
		this.data = []
		this.top = -1
	}

	push(value) {
		this.top++
		this.data[this.top] = value
		return this.data
	}
	
	pop() {
		if (this.top < 0) return undefined
		const poppedTop = this.data[this.top]
		delete this.data[this.top]
		this.top--
		return poppedTop
	}

	peek() {
		return this.top >= 0 ? this.data[this.top] : undefined
	}
}

// Passo 2: Utilizando
const stack = new Stack()

// adicionar dados
stack.push('learning')
stack.push('data')
console.log(stack.push('structures'))

console.log(stack.peek())

//remover
stack.pop()
console.log(stack.pop())
```

## Queue

Tradução de Queue é fila.

Como uma fila em uma loja ou restaurante.

- Linear;
- O primeiro a entrar na fila é o primeiro a sair.

### Conceitos

- FIFO: First in First Out;
    - O primeiro elemento a entrar na fila, é o primeiro a sair dela.
- Front (frente) é a referencia do primeiro elemento a entrar na fila;
- Back (fundo) é a referencia do último elemento a entrar na fila.

### Queue no código

***Métodos fundamentais***

- enqueue(): adicionar um elemento ao final da fila;
- dequeue(): remover o primeiro elemento a entrar na fila.

Outros métodos poderão ser implementados como `size()` para mostrar o tamanho da fila ou `front()` para pegar o primeiro elemento da fila, dentro tantos outros.

```jsx
// Passo 1: Modelando
class Queue {
	constructor() {
		this.data = []
	}
	
	enqueue(item) {
		this.data.push(item)
		console.log('${item} chegou na fila!')
	}

	dequeue() {
		const item = this.data.shift()
		console.log('${item} saiu da fila!')
	}
}

//Passo 2: Utilizando
const fila = new Queue()

fila.enqueue('Mariana')
fila.enqueue('João')
fila.enqueue('Ariel')
fila.dequeue()
fila.dequeue()
fila.dequeue()
```