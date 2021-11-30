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

header.setAttribute('class', 'bg header')