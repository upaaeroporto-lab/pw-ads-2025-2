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

/*********************************************************************************

let user = 'guest', MessageChannel

//Dedidindo se o usuário entrar, usando if...else
/*Quando há apenas uma linha após um if, um whife, etc., podemos omitir as chaves*/

if(user === 'adim') ms = 'Bem-vindo'
else msg = 'Acesso negado'

console.log(user, msg)

//Tomando a mesma decisão, mas usando o operador ternário
msg = user === 'adim' ? 'Bem-vindo!' : 'Acesso negado'

console.log(user, msg)
