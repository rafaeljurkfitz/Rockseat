/*
Crie uma função que receba uma string em celsius ou fahrenheit
e faça a transformação de uma unidade para outra 
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32
*/

function transformTemp(temp){
    const celsiusExists = temp.toUpperCase().includes('C')
    const fahrenheitExists = temp.toUpperCase().includes('F')

    if(!celsiusExists && !fahrenheitExists) {
        throw new Error('Grau nao identificado!')
    }

    if(fahrenheitExists){
        let tempUpdate = Number(temp.toUpperCase().replace("F", ""))
        let sinalCelsius = 'C'
        let formulaFahrenheit = (fahrenheit) => (fahrenheit - 32) * 5/9
        return formulaFahrenheit(tempUpdate) + sinalCelsius
    } 
    
    if (celsiusExists){
        let tempUpdate = Number(temp.toUpperCase().replace("C", ""))
        let sinalFahrenheit = 'F'
        let formulaCelsius = (Celsius) => Celsius * (9/5) + 32
        return formulaCelsius(tempUpdate) + sinalFahrenheit
    }
}

try {
    console.log(transformTemp('59F'))
    console.log(transformTemp('15C'))
    console.log(transformTemp('23'))
} catch (error) {
    console.log(error.message)
}


