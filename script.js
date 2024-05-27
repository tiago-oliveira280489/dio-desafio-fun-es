// Desafio 02 - DIO - Funções

//Declaração de variáveis
let qtdVitorias = 30
let qtdDerrotas = 5
let nivel = ""

//Função que retorna o cálculo do saldo de Vitórias
function calcularSaldoVitorias(vitorias, derrotas){
    return vitorias - derrotas
}

//Chamada da função que calcula o saldo de vitórias
let saldoVitorias = calcularSaldoVitorias(qtdVitorias, qtdDerrotas)

//Condicional para verificar nível
if (saldoVitorias < 10){
    nivel = "Ferro"
} else if (saldoVitorias >= 10 && saldoVitorias < 20){
    nivel = "Bronze"
} else if (saldoVitorias >= 20 && saldoVitorias < 50){
    nivel = "Prata"
} else if (saldoVitorias >= 50 && saldoVitorias < 80){
    nivel = "Ouro"
} else if (saldoVitorias >= 80 && saldoVitorias < 90){
    nivel = "Diamante"
} else if (saldoVitorias >= 90 && saldoVitorias < 100){
    nivel = "Lendário"
} else {
    nivel = "Imortal"
}

//Saída
console.log("O herói tem um saldo de " + saldoVitorias + " e está no nível de " + nivel)