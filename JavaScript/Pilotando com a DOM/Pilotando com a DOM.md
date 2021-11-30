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

#### GetElementById()

```html 
<h1 id="blog-title">Meu Blog</h1> 
```
```javascript
const element = document.getElementById('blog-title')
console.log(element)
```

#### GetElementsByClassName()

```html
<h1 class="one">Meu Blog</h1>
<p class="one"></p>
```
```javascript
const element = document.getElementsByClassName('one')
console.log(element)
```

#### GetElementsByTagName()
```html
<h1>Meu Blog</h1>
```

```javascript
const element = document.getElementsByTagName('h1')
console.log(element)
```

#### QuerySelector
```html
<h1 class="one">Meu Blog</h1>
```

```javascript
const element = document.querySelector('.one')
console.log(element)
```

#### QuerySelectorAll
```html
<h1 class="one">Meu Blog</h1>
```

```javascript
const element = document.querySelectorAll('.one')
console.log(element)
element.forEach(el => console.log(el))
```

### Qual usar?

* GetElementById                - `element`
* GetElementsByClassName        - `HTMLCollection`
* GetElementsByTagName          - `HTMLCollection`
* QuerySelector                 - `element`
* QuerySelectorAll              - `Nodelist`

### Manipulando conteúdos

#### TextContent

```javascript
const element = document.querySelector('h1')
console.log(element)
element.textContent += " Olá Devs!"
console.log(element.textContent)
```

#### InnerText

```javascript
const element = document.querySelector('h1')
element.innerText = "Olá Devs!"
```

#### InnerHTML

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

//Valor da variável headerID => atributos que estao em sendo pegos pelo querySelector através do seletor #header.
const headerID = document.querySelector('#header')

//Print na tela do valor que está no atributo id
console.log(headerID.getAttribute('id'))

//Remocao do atributo id
header.removeAttribute('id')

//Adicionando class no head e um valor de 'bg header'
header.setAttribute('class', 'bg header')
```
### Manipulando estilos e classes 

#### Alterando estilos com style

