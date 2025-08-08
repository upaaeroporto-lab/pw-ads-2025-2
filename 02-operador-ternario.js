let media = 7.6, situacao

if(media >= 6){
    situacao = 'APROVADO'
}
else {
    situacao = 'Reprovado'
}

console.log('Situação do aluno com média ', media, 'é', situacao)

/*outra forma de fazer:
if (media >= 6) situacao = 'APROVADO'
else situacao = 'Reprovado' */


/*USANDO O OPERADO TERNARIO*/
media = 5.1
situacao = media >= 6? 'APROVADO' : 'Reprovado'

console.log('Situação do aluno com média ', media, 'é', situacao)

