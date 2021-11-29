# Nem só de classes ou IDs

## Seletores

Conecta um elemento HTML com o CSS a fim de alterar o elemento.

### Tipos

* Element selector
  - Todos os elementos HTML.
* ID Selector
  - Um elemento que tenha um atributo `id`.
  - Cada id deverá ser único.
* Class Selector
  - Os elementos que contenha um atributo `class`.
  - Podemos ter uma ou mais classes.
* Attribute selector
  - Um elemento que tenha um atributo específico.
* Pseudo-class selector
  - Elementos em um estado específico.

#### Exemplo

```html
<h1 id="title" class="red big">Título da página</h1>
<p id="content" class="red" title="Conteudo da pagina">Conteúdo da minha página</p>
```
```css
.red {
    color: red;
}

.big {
    font-size: 3em;
}

[title] {
    color: blue;
}

p:hover, h1:hover {
    color: green;
}
```

### Múltiplos

- Você poderá selecionar múltiplos elementos e aplicar alguma regra css para todos eles.

- Usamos uma separação por vírgulas para isso.

```css
h1, p, a {
    color: red;
}
```

## Combinators

- Combinadores, pois eles trabalham para buscar e combinar seletores a fim de aplicar uma estilização.

### Descendant combinator

* Identificado por um espaço entre os seletores;
* Busca um elemento dentro de outro.

```css
body article h2
```

#### Exemplo

```html
<article>
    <h2>Um título</h2>
</article>
    
<article>
    <h2>Outro título</h2>
</article>
    
<div>
    <article>
        <p>
            <h2>Mais um título</h2>
        </p>
    </article>
</div>
```
```css
body article h2 {
    color: red;
}
```

### Child combinator

* Identificado pelo sinal ` > ` entre dois seletores;
* Seleciona somente o elemento que é filho direto do pai;
* Elementos depois do filho direto serão desconsiderados.

```css
body > ul > li
```

#### Exemplo
```html
<ul>
    <li>Item 1</li>
    <ul>
        <li>Item 2</li>
    </ul>
</ul>
```
```css
body > ul > li {
    color: red;
}

ul > ul > li {
    color: blue;
}
```

### Adjacent sibling combinator

* Identificado pelo sinal ` + ` entre dois seletores;
* Seleciona somente o elemento do lado direito que é irmão direto na hierarquia.

```css
h1 + p
```

### General sibling combinator

* Identificado pelo sinal ` ~ ` entre dois seletores;
* Selecione todos os elementos irmãos.

```css
h1 ~ p
```

#### Exemplo
```html
<h1>Título</h1>
<p>Esse é um parágrafo.</p>
<p>Mais um parágrafo.</p>

<button>Um botão</button>
<button>Outro click</button>

<p>Mais um parágrafo.</p>
```
```css
h1 + p {
    color: red;
}

h1 ~ p {
    font-size: large;
    text-decoration: underline orange;
}

button + button {
    margin-left: 32px;
}
```

### Utilizando combinadores

```css
ul > li[class="red"]
```
#### Exemplo
```html
<ul>
    <li>Alooo</li>
    <li class="red">Heyy</li>
</ul>

<p class="red">Aqui tem um texto.</p>
```
```css
ul > li[class="red"] {
    color: red;
}

.red {
    color: blue
}
```

### Dica

* Seletores muito específicos tendem a causar dificuldades no reuso das regras de estilização dos elementos;
* Muitas vezes, um simples uso de classes, torna o trabalho muito mais eficiente.

## Pseudo-classes

- É um tipo de seletor que irá selecionar um elemento que estiver em um estado específico.

Exemplo: é o primeiro elemento dentro de uma caixa, ou, o elemento está com o ponteiro do mouse em cima dele.

- Pseudo-classes começam com 2 pontos seguido do nome da pseudo class `:pseudo-class-name`.

Código de HTML para testes:
```html
<ul>
    <li>Gratidão</li>
    <li>Esperança</li>
    <li>Fé</li>
    <li>Liberdade</li>
</ul>
```
Código de HTML para testes:
```html
<article>
    <h3>Título</h3>
    <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt quae doloremque aliquid rerum magnam eligendi facere qui provident nobis veniam earum numquam, neque voluptate blanditiis, repellat est officiis accusamus dolorem!
    </p>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id neque doloribus quisquam debitis consectetur, ipsum, laudantium commodi nemo, reiciendis ipsam dolor et minima ducimus excepturi aliquid dolores fugiat officia in.
    </p>
    <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis natus, totam at reprehenderit officiis ex dignissimos quo quas ut pariatur, libero doloribus dolor maxime sapiente. Id sint nisi laborum quia!
    </p>
</article>
```

### Selecionando elementos com pseudo-classes

#### :first-child
```css
ul li:first-child {
    font-weight: bold;
    color: red;
}
```

#### :nth-of-type()
```css
article p:nth-of-type(2) {
    font-weight: bold;
    color: red;
}
```

#### :nth-child()
```css
article p:nth-child(4) {
    font-weight: bold;
    color: red;
}
```

#### :nth-child(even) pares
```css
ul li:nth-child(even) {
    font-weight: bold;
    color: red;
}
```

#### :nth-child(odd) ímpares
```css
ul li:nth-child(odd) {
    font-weight: bold;
    background: #eee;
}
```

### Ações do usuário

#### :hover
```css
li:hover {
    font-weight: bold;
    color: red;
}
```

#### :focus
```css
input:focus {
    border-color: red;
    outline: none;
}
```

### Atributos

#### :disabled
#### :required

### Referência

https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes

## Pseudo-elements

- Com pseudo-elements nós podemos adicionar elementos HTML pelo próprio CSS.

`::pseudo-element-name`

### Exemplos

Código em HTML para exemplo:
```html
<ul>
    <li>Gratidão</li>
    <li>Esperança</li>
    <li>Fé</li>
    <li>Liberdade</li>
</ul>

<p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate maiores aliquid ea minus deserunt optio quis pariatur. Quam quis, quia reprehenderit amet cumque, hic minus sequi itaque quos autem nisi.
</p>
<p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, reiciendis inventore commodi nobis blanditiis tempore nesciunt voluptates illum, magni explicabo placeat nostrum dolor dolores et, libero architecto eaque reprehenderit quia!
</p>
<p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ut. Ipsa tempore illum consequatur nulla at sint qui eius, velit eligendi unde repellendus esse nam, modi nemo porro, voluptatum quidem?
</p>
```

#### ::before
Código em CSS:
```css
li::before {
    content: "<"
}
```

#### ::after
Código em CSS:
```css
li::after {
    content: ">"
}
```
#### ::first-line
Código em CSS:
```css
p:nth-of-type(2)::first-line {
    font-weight: bold;
}
```

### Referência

https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements