const notas = [7.7, 6.5, 8.9, 3.6, 7.1, 9.0]

// Sem CallBack
let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

let notasAltas = []
for (let i in notas) {
    if (notas[i] > 7){
        notasAltas.push(notas[i])
    }

}

console.log(notasBaixas)
console.log(notasAltas)

//Com CallBack
notasBaixas = notas.filter(function (nota) {
    return nota < 7
})

notasAltas = notas.filter(function (nota){
    return nota > 7 
})

console.log(notasBaixas)
console.log(notasAltas)
console.log(notas)