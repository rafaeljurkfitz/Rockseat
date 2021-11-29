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