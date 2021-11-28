/*
*/

//throw

function sayMyName(name = '') {
    if(name === '') {
        throw 'Nome eh obrigatorio'
    }
    console.log('Depois do erro')
}

//try...catch
try {
    sayMyName()
} catch(e) {
    console.log(e)
}

console.log('Apos ao try/catch')