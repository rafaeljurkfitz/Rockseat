# Introducão

## O que significa CSS ?

* Cascading Style Sheet;
* Codigo para criar estilos no HTML;
* HTML é a estrutura, e o CSS é a beleza;
* Não é uma linguagem de programação;
* É uma linguagem style sheet.

### Exemplo
Código em HTML:
```html
    <h1>Título da página</h1>

```
Código em CSS:
```css 
    h1 {
        color:blue; 
    }
```

## Comentários

* Nao irá afetar o seu código;
* Ajuda a lembrar blocos de códigos;
* Deixa dicas para leitura;
* Ajuda outros a entenderem;
* Nunca esqueca de fechar um comentário.

Comentários começam com `/*` e terminam com `*/`.

### Exemplo
```css

/* Basico */
/*----------------------*/
body {
    font: 1em/150% Helvetica, Arial, sans-serif;
    padding: 1em;
    margin: 0 auto;
    max-width: 33em;
}

@media (min-width: 70em) {
    /* Let's special case the global font size On large screen or window,
    we increase the font size for better readability */
    body{
        font-size: 130%;
    }
}

h1 {font-size: 1.5em;}

/* Elementos especificos */
/*----------------------*/
div p, #id:first-line {
    background-color: red;
    border-radius: 3px;
}

div p {
    margin: 0;
    padding: 1em;
}
```

* Voce poderá usar para desabilitar partes do seu código.

```css

/*.special {
    color: red;
}*/

p {
    color: blue;
}
```

## Anatomia

```css
h1 {
    color: blue;
    font-size: 60px;
    background: gray;
}
```

* Selector;
* Declaration;
* Properties;
* Property Value.

## Selectors

Conecta um elemento HTML com o CSS.

### Tipos

* Global selector `*`;
* Element/Type selector `h1, h2, p, div`;
* ID Selector `#box, #container`;
* Class Selector `.red, .m-4`
* Attribute selector, Pseudo-class, Pseudo-element, e outros.

### Exemplo
Código em HTML:
```html
<div id="container" class="m-40">
  <h1>Titulo</h1>
  <h2>Subtitulo</h2>
</div>
```
Código em CSS:
```css
* {
  margin: 0;
}

#container {
  width: 200px;
}

.m-40 {
  margin: 40;
}

h1, h2 {
    color: red;
    font-size: 60px;
    background: gray;
}
```

## Box Model 
### Exemplo
Código em HTML:
```html
<h1>Evolua Rápido</h1>
<p>Descrição</p>
<button>Embarcar</button>
```
Código em CSS:
```css
h1 {
  border: 1px solid red;
  margin: 20px;
  padding: 60px;
}
```

## Adicionando CSS

### Inline
* Atributo `style`:
```html
    <h1 style="color: blue">
        Titulo
        <strong style="color: red">alo</strong>
    </h1>
```
### <style>
* Tag html que irá conter o CSS:
```html
<style>
        h1 {
            color: blue;
        }
        strong {
            color: red;
        }
</style>
```
### <link> 

* Arquivo CSS externo.

### @import

* Arquivo CSS externo.

## A Cascata (cascading)

A escolha do browser de qual regra aplicar, caso haja muitas regras para o mesmo elemento.

* Seu estilo é lido de cima para baixo.

É levado em consideração 3 fatores:

1. Origem do estilo
2. Especialidade
3. Importância

### Origem do estilo

inline > tag stylle > tag link

### Especialidade

É um cálculo matemático, onde, cada tipo de seletor e origem do estilo, possuem valores a serem considerados.

0. Universal selector, combinators e nagation pseudo-class (:not())
1. Element type selector e pseudo-elements (::before, ::after)
10. Classes e attribute selectors ([type="radio"])
100. ID selector
1000. Inline

### A regra de importância

* Cuidado, evite o uso;
* Não é considerado uma boa prática;
* Quebra o fluxo natural de cascata.

## At-rules

* Está relacionado ao comportamento do CSS;
* Começa com o sinal de `@` seguido do identificador e valor.

### Exemplos comuns

- @import           /* incluir um CSS externo */

- @media            /* regras condicionais para dispositivos */

- @font-face        /* fontes externas */

- @keyframes        /* Animation */

```css
@import "http://local.com/style.css";

@media (min-width: 500px) {
    /* rules here */
}

@font-face {
    /* rules here */
}

@keyframes nameofanimation {
    /* rules here */
}

```

## Shorthand

* Junção de propriedades;
* Resumido;
* Legivel.

```css
{
    /* background properties */
    background-color: #000;
    background-image: url(images/bg.gif);
    background-repeat: no-repeat;
    background-position: left top;

    /* background shorthand */
    background: #000 url(images/bg.gif) no-repeat left top;

    /* font properties */
    font-style: italic;
    font-weight: bold;
    font-size: .8em;
    line-height: 1.2;
    font-family: Arial, sans-serif;

    /* font shorthand */
    font: italic bold .8em/1.2 Arial, sans-serif;
}

```

### Detalhes

* Não irá considerar propriedades anteriores;
* Valores não especificados irão assumir o valor padrão;
* Geralmente a ordem descrita não importa, mas se houver muitas propriedades com valores semelhantes, poderemos encontrar problemas.

### Propriedades que aceitam shorthand

animation, backgorund, border, border-bottom, border-color, border-left, border-radius, border-right, border-style, border-top, border-width, column-rule, columns, flex, flew-flow, font, grid, grid-area, grid-column, grid-row, grid-template, list-style, margin, offset, outline, overflow, padding, place-content, place-items, place-self, text-decoration, transition

**https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties**

## Funções

* Nome seguido de abre e fecha parentesis;
* Recebe argumentos.

### Exemplos

```css
@import url("http://urlaqui.com/style.css");

{
    color: rgb(255, 0, 100);
    width: calc(100% - 10px);
}

```

## Vendor Prefixes

Permite que browsers adicionem `features` a fim de colocar em uso alguma novidade que vemos no CSS.

### Exemplo

```css
p {
    -webkit-background-clip: text;  /* Chrome, Safari, iOS e Android */
    -moz-background-clip: text;     /* Mozilla (Firefox) */
    -ms-background-clip: text;      /* Internet Explorer */
    -o-background-clip: text;       /* Opera */
}
```

# Consultas

.[http://ireade.github.io/which-vendor-prefix/].
.[http://camoise.com].
