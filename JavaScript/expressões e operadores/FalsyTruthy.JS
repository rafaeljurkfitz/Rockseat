/*
    Type conversion (typecasting) vs Type coersion
*/

console.log(Number('9') + 5)

/*
    FALSY
    Quando um valor é considerado false em contextos que onde um booleano é obrigatório (condicionais e loops)

    0
    -0
    ""
    null
    undefined
    NaN
*/
console.log( NaN ? 'verdadeiro' : 'falso' )    

/*
    TRUTHY
    É o oposto, quando um valor é considerado verdadeiro (true) em contextos onde um booleano é obrigatório (condicionais e loops)

    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/

console.log( Infinity ? 'verdadeiro' : 'falso' )