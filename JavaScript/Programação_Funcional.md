# Programação Funcional

Date: January 19, 2022 → January 21, 2022
Post: Yes
Tags: JavaScript

## O que é programação funcional?

- É uma maneira de resolver problemas através de funções;
- Essa funções vão possuir pequenas tarefas dentro si. As funções serão pequenas e terão como objetivo de execução tarefas bem especificas;
- Um dado(ou mais) entra dentro da função e um novo dado sai dessa função;
- Não se altera dados;
- Não se guarda estado (`stateless`).

## Imperativa vs Declarativa

### Função que eleva número ao quadrado

- Imperativo: `Faça da seguinte forma`;
    
    ```jsx
    let number = 2
    
    function square() {
    	return number * number
    }
    
    number = square();
    ```
    
- Declarativa: `O que fazer, não como fazer`.
    
    ```jsx
    const square = n => n * n
    ```
    
- Programação funcional é um paradigma declarativo.

## Imutabilidade

- Uma variável não ira variar;
- Se precisar `mudar`, não se muda o valor da variável, `se cria uma nova`.

```jsx
const cart = {
	quantity: 2,
	total: 200
}

// bad 👎
cart.quantity = 3

// good 👍
const newCart = {...cart, quantity: 3}
```

## Stateless

Não guarda `estado` ;

A função só guarda dados entregues a ela;

A resposta não pode variar;

```jsx
let number = 2;

//statefull function 
function square() {
	return number * number
}

number = square()

//stateless function
const square() = n => n * n;
```

## Funções Independentes

- Deverá ter ao menos 1 argumento;
- Deverá retornar algo;
- Nada que acontece lá dentro afeta o mundo externo;
    - dados imutáveis;
    - não guarda estado.
- Não faremos usos de loops ( `for, while` ), mas se houver necessidade de tal, usaremos recursão(a função chama ela mesma).

```jsx
const random = (number, Math) =>
	Math.floor(Math.random() * number);

//recursive 
//Find the factorial of a number 
const factorial = x => {
	//if number is 0
	if (x === 0) {
		return 1;
	}
	
	return x * factorial(x - 1); 
}
```

## Funções Puras

- Não deverá depender de nenhum dado externo a não ser o que foi passado como argumento;
- Não deverá sofrer nenhuma interferência do mundo externo a ela;
- Se o argumento é o mesmo, o retorno não poderá ser diferente quando a função for chamada novamente;
- Não terá nenhum efeito colateral no seu código;
    - Não irá modificar nenhum dado;
    - Não irá guardar nenhum estado.

```jsx
// Função impura

// Exemplo 1: está dependendo de dado externo
// que não foi passado como parâmetro
function calculateCircumference(radius) {
	return Math.PI * (radius + radius)
}

// Exemplo 2: está alterando um dado externo
let person = {
	name: 'Rafael Camarada',
	age: 'jovem'
}

function changeName(name) {
	person.name = name
}
```

## First-class Function

- Podem estar em qualquer lugar, inclusive, como parâmetro de outras funções;
- A função poderá ser entendida como uma variável.

```jsx
const sayMyName = () => console.log('Rafael')
const runFunction = fn => fn()

runFunction(sayMyName)
runFunction(() => console.log('discover'))

console.log(runFunction(Math.random))
```

## Higher-orden Function

- Funções que recebem funções como argumentos;
- Funções que poderão retornar outras funções.

```jsx
//Exemplo com .map() JS
const numbers = [2,4,8,16]

const square = n => n * *

const squareNumber = numbers.map(square)

//Exemplo de um retorno de função
//(currying ou aplicação parcial de função)
const pause = wait => fn => setTimeout(fn, wait)

pause(600)( () => console.log('waiting 600ms') )

const wait200 = pause(200)
const wait1000 = pause(1000)

wait200(() => console.log('waiting 200ms')
wait1000(() => console.log('waiting 1s')
```

## Composição de funções

- Um encadeamento de funções;
- Uma função que retorna um dado e vai pra outra função, que retorna um dado e vai pra outra função, que retorna...

```jsx
const people = ['Rafa', 'Diego', 'Dani', 'Rod']
const upperCasePeopleThatStartWithD = people
																			.filter(person => person.startsWith('D'))
																			.map(dperson => dperson.toUpperCase())
```