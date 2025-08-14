const nome = 'Valcicleide'
const idade = 20
const cidade = 'Morro alto de cima/MG'

//Mesclando strings com variáveis usando concatenação
let msg = 'Meu nome é ' + nome + ', tenho ' + idade + ' anos e moro em ' + cidade + '.'
console.log(msg)

//Mesclando string e variáveis usando template string
//Template strings são OBRIGATÓRIAMENTE delimitadas por ``
// (acentos graves/backticks)
const msg2 = `Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`
console.log(msg2)

//Dentro de uma template string, não estamos limitados a usar apenas variáveis
//dentro do símbolo ${}. Qualquer código JavaScript válido pode ser empregado ali.
console.log(`Em ${2025 + 7}, ${nome.toUpperCase()} TERÁ ${idade + 7} Anos.`) 

