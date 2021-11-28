## border ( e outline )

As bordas da caixa

- value: `<border-style>` | `<border-widht>` | `<border-color>`
    - style: solid | dotted | dashed | double | groove | ridge | inset | outset
    - width: `<length>` 
    - color: `<color>` 

```css
div {
    /* shorthand */
    border-top : solid 2px; /* top | right | bottom | left */

    /* style */
    border: solid;

    /* widht <lenght> | style */
    border: 2px dotted;

    /* style | color */
    border: outset #f33;

    /* widht | style | color */
    border: medium dashed green;
}    
```

### E outline?

- Difere em 4 sentidos:
    - Nao modifica o tamanho da caixa, pois nao e parte do box model
    - Podera ser diferente de retangular
    - Nao permite ajuste individuais
    - Mais usado pelo user agent para acessibilidade




https://developer.mozilla.org/en-US/docs/Web/CSS/border