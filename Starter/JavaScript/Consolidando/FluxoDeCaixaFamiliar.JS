/*
Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.
*/

const family = {
    income: [2800, 4500],
    expense: [150,200,400,1200],
}

function sum(array){
    let total = 0;
    
    for(let value of array){
        total += value
    }

    return total
}

function calculateBalance() {
    const incomeTotal = sum(family.income)
    const expenseTotal = sum(family.expense)
    const total = incomeTotal - expenseTotal
    let balance = total >= 0
    let balanceText = "negativo"

    if(balance){
        balanceText = "positivo"
    }
    console.log(`Seu salado é ${balanceText}: ${total.toFixed(2)} R$ Reais`)
}

calculateBalance(family)