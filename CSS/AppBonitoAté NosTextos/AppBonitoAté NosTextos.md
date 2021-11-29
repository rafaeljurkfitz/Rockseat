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

## Atribuindo mais estilos às fontes

* Variacões na apresentacão fonte

```css
p {
    font-variant: small-caps;
}
```

https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals

### Font-stretch 

* Alargamento ou encolhimento da fonte;
* Aceita palavra-chaves como: `expanded`, `condensed`, `normal`;
* Aceita porcentagens de `50%` a `200%`.

```css
p {
    font-stretch: expanded;
}
```

https://developer.mozilla.org/en-US/docs/Web/CSS/font-stretch

### Letter-spacing

* Espaços entre caracteres.

```css
p {
    letter-spacing: 4px;
}
```

https://developer.mozilla.org/en-US/docs/Web/CSS/Letter-spacing

### Word-spacing

* Espaços entre palavras.

```css
p {
    word-spacing: 4px;
}
```

https://developer.mozilla.org/en-US/docs/Web/CSS/Word-spacing

### Line-height

* Espaços entre linhas;
* Pode ser com unidades ou sem unidades de medida;
* Comuns: 1.5 ou 2.

```css
p {
    line-height: 1.6;
}
```

https://developer.mozilla.org/en-US/docs/Web/CSS/Line-height

## Text-transform

* Transformação do texto.

```css
p {
    text-transform: uppercase; /* capitalize | lowercase | none */
}
```

https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform

### Text-decoration

* Aparência decorativa de um texto;
* line: `underline` | `overline` | `line-through`;
    * Podemos aplicar mais de 1 valor.
* style: `wavy` | `dotted` | `double` | `dashed` | `solid`;
* color: `<color>` values.

```css
p {
    text-transform: uppercase; /* capitalize | lowercase | none */
}
```

https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration

### Text-align

* Alinhamento do texto.

```css
p {
    text-align: center; /* left | right | center | justify */
}
```

https://developer.mozilla.org/en-US/docs/Web/CSS/text-align

### Text-shadow

* Sombra aplicada a um texto;
* Permite multiplos valores.

```css
p {
    text-shadow: 1px 1px 1px red,
    2px 2px 1px green; /* offset-x | offset-y | blur-radius | color */
}
```

https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow

### Shorthand

* font-style, font-variant, font-weight, font-stretch, font-size, line-height e font-family.

```css
p {
    /* -style, -variant, -weight, -stretch, -size, -line-height, e -family */
    font: italic normal bold normal 3em/1.5 Helvetica, Arial, sans-serif;
}
```
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
    font-family: "Times New Roman", sans-serif;
    font-weight: normal;
    
    font-family: 'Lato', sans-serif;
    font-variant:  small-caps;
    font-stretch: expanded;
    word-spacing: 4px;
    line-height: 1.6;
    text-transform: lowercase;
    text-decoration: underline orange;
    text-align: center;
    text-shadow: 1px 1px 8px blue,
    2px 2px 1px orange;

    font: italic normal bold normal 3em/1.5 Helvetica, Arial, sans-serif;
}    
```