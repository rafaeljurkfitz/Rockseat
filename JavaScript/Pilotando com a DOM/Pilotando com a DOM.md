# Pilotando com a DOM

## DOM (Document Object Model)

* É o HTML convertido para um Objeto JavasScript;
* API que representa e interage com o HTML;
* Estrutura de dados do tipo árvore, criada pelo browser;
* Propriedades e métodos.

### Para que ?
* Javascript usa a DOM para se conectar ao HTML;
* Manipular o HTML com o Javascript;
* Você só programa pra WEB porque existe a DOM.

### Selecionando Elementos

#### getElementById()

```html 
        <h1 id="blog-title">Meu Blog</h1> 
```
```javascript
// getElementById()

const element = document.getElementById('blog-title')
console.log(element)
```

#### getElementsByClassName()

```html
        <h1 class="one">Meu Blog</h1>

        <p class="one"></p>
```
```javascript
// getElementByClassName()

const element = document.getElementsByClassName('one')
console.log(element)
```

#### getElementsByTagName()
```html
        <h1>Meu Blog</h1>
```

```javascript
// getElementsByTagName()

const element = document.getElementsByTagName('h1')
console.log(element)
```

#### querySelector
```html
    <h1 class="one">Meu Blog</h1>
```

```javascript
// querySelector()

const element = document.querySelector('.one')
console.log(element)
```

#### querySelectorAll
```html
<h1 class="one">Meu Blog</h1>
```

```javascript
// querySelectorAll()

const element = document.querySelectorAll('.one')
console.log(element)

element.forEach(el => console.log(el))
```

### Qual usar?

- getElementById(`element`)
- getElementsByClassName(`HTMLCollection`)
- getElementsByTagName(`HTMLCollection`)
- querySelector(`element`)
- querySelectorAll(`Nodelist`)

### Manipulando conteúdos

#### textContent

```javascript
const element = document.querySelector('h1')
console.log(element)

element.textContent += " Olá Devs!"

console.log(element.textContent)
```

#### innerText

```javascript
const element = document.querySelector('h1')

element.innerText = "Olá Devs!"
```

#### innerHTML

```javascript
const element = document.querySelector('h1')
console.log(element)

element.innerHTML = "Olá Devs! <small> !!! </small>"
```

#### Value
```html
<h1 class="one">Meu Blog</h1>
<input type="text" value="estou no elemento">
```
```javascript
const element = document.querySelector('input')

element.value = "Valor que eu quiser"
```

#### Manipulando atributos

```javascript
// Manipulando conteúdo
const header = document.querySelector('header')

//Adicionando atributo id
header.setAttribute('id','header')

//valor da variavel headerID => atributos que estao em sendo pegos pelo querySelector atraves do seletor #header.
const headerID = document.querySelector('#header')

//Print na tela do valor que esta no atributo id de header
console.log(headerID.getAttribute('class'))

//Remocao do atributo id e
header.removeAttribute('id')

//Adicionando class no head e um valor de 'bg header'
header.setAttribute('class', 'bg header')
```
### Manipulando estilos e classes 

#### Alterando estilos com style

