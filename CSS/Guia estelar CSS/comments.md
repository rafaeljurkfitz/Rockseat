# Comentarios

* Nao ira afetar o seu codigo
* Ajuda a lembrar blocos de codigos
* Deixa dicas para leitura
* Ajuda outros a entenderem
* Nunca esqueca de fechar um comentario

Comentarios comecam com `/*` e terminam com `*/`.

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

* Voce podera usar para desabilitar partes do seu codigo

```css

/*.special {
    color: red;
}*/

p {
    color: blue;
}
```