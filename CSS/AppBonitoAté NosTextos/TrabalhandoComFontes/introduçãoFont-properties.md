# App bonito, até nos textos

## Trabalhando com fontes

Tipografia transmite mensagem.

    - Negrito;
    - Tamanho;
    - Estilo.

### Exemplo
Código em HTML: 
```html
<p>
    O rato roeu a roupa do rei de Roma.
</p> 
```
Código em CSS:
```css
p {
    font-family: "Times New Roman", Times,sans-serif;
    font-weight: bold;
    font-style: italic;
    font-size: 18px;
}
``` 

### Basic Font Properties

* `font-family`;
* `font-weight`;
* `font-style`;
* `font-size`.

### Font Family

* Tipo de fonte de um elemento;
* Lista de fontes e ordem de prioridade;
* inclui *fallback* font.

```css
p {
    font-family: "Times New Roman", Times, serif;
}
```
- serif;
- sans.

### Font Weight

* Peso da fonte. 

```css
p {
    font-weight: bold;
}
```

### Font Style

* O estilo da fonte.

```css
span {
    font-style: italic;
}
```

### Font Size

* O tamanho da fonte.

```css
p {
    font-size: 18px;
}
```

### Web Fonts

- Fontes do sistema x fontes da web.
- Como usr fontes para web?

    * `@font-face`
    * `@import`
    * `link`

### Referencias

https://www.w3.org/TR/css-fonts-3/
https://css-tricks.com/snippets/css/using-font-face/
https://fonts.google.com