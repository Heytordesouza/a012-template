/*let bool1 = false
let bool2 = true

if(bool1){
    alert("Eu sou True")
}else{
    alert("Eu sou False")
}

let bool3 = true

if(bool1===bool2){
    alert("Bool1 e Bool2 são iguais")
}else if (bool2===bool3){
    alert("Bool2 e Bool3 são iguais")
}else if (bool1===bool3){
    alert("bool1 e bool3 são iguais")
}else {
    alert("Não existem valores iguais")
}

let idade = Number(prompt("Qual é a sua idade?"))

if(idade>=18 && idade<60){
    alert("Você pode emitir o Título de Eleitor")
}else if((idade < 18 && idade >= 16) || idade>=60) {
    alert("Você é facultativo em tirar o Título")
}else if (idade < 16){
    alert("Você não pode votar")
}

exercicio 3*/

const media = Number(prompt("Sua nota?"))

if(media>=5){
    alert("Aprovado")
}else if (media>=3){
    alert("Recuperação")
}else if (media<3){
    alert("Reprovado")
}else {
    alert("Dado inválido")
}
