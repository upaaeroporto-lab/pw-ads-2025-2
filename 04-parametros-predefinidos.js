/*
calcArea() é uma função que calcula a área de uma figura
geométrica plana, dados a base, a altura e o tipo de forma
*/

function calcArea(base, altura, tipo = 'R'){
    switch(tipo){
        case'R': //Retângulo
            return base * altura
        case 'T': //Triângulo
            return base * altura / 2
        case 'E': //Elipse/círculo
            return (base / 2) *  Math.PI
        default: //Formas inválidas/desconhecidas
        return undefined
    }
}

console.log(`Área triângulo 10 x 30: ${calcArea (10, 30, 'T')}`)
console.log(`Area elips (círculo) 7,5 x 7,5: ${calcArea(7.5, 7.5, "E")}`)
console.log(`Área retângulo 12,8 x 15,5: ${calcArea(12.8, 12.5, 'R')}`)
console.log(`Área forma inválida 8 x 17: ${calcArea(8, 17, 'H')}`)

//Chamando a função com apenas dois parâmentro
console.log(`Área retângulo 20 x 10: ${calcArea(20, 40)}`)

/*
REGRAS PARA USO DE PARAMETROS PRE DEFINIDOS
1) O parâmetro preefinido deve vir sempre POR ÚLTIMO
2) Pode haves mais de um parâmetro predefinido, mas eles devem ser SEMPRE OS ÚLTIMOS
*/