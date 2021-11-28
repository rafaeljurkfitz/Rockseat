# Selectors

Conecta um elemento HTML com o CSS

## Tipos

* Global selector `*`
* Element/Type selector `h1, h2, p, div`
* ID Selector `#box, #container`
* Class Selector `.red, .m-4`
* Attribute selector, Pseudo-class, Pseudo-element, e outros

```css
/* Exemplos */
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
/*
HMTL

<div id="container" class="m-40">
  <h1>Titulo</h1>
  <h2>Subtitulo</h2>
</div>

*/
```