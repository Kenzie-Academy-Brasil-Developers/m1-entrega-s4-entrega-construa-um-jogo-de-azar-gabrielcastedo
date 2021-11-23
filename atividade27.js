const elementos = ['Pedra', 'Papel', 'Tesoura']
const resultadoFinal = ['Você venceu!', 'Você perdeu!', 'Você empatou! Tente novamente!']

const botao1 = document.getElementById('pedra')
const botao2 = document.getElementById('papel')
const botao3 = document.getElementById('tesoura')

let escolhafinal = []
let resultadoPC = []

function escolhaPC(){
    let numero = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    resultadoPC.push(elementos[numero])

    return resultadoPC
}

let placar = []

let name = window.prompt('Qual o seu Nome?');
alert("seja bem vindo(a) " + name + '!');

function validation(){
    if(escolhafinal[0] === resultadoPC[0]){
        placar.push(resultadoFinal[2]) 
    } else if (escolhafinal[0] === elementos[0] && resultadoPC[0] === elementos[1]){
        placar.push(resultadoFinal[1])
    } else if (escolhafinal[0] === elementos[0] && resultadoPC[0] === elementos[2]){
        placar.push(resultadoFinal[0])
    } else if (escolhafinal[0] === elementos[1] && resultadoPC[0] === elementos[0]){
        placar.push(resultadoFinal[0])
    } else if (escolhafinal[0] === elementos[1] && resultadoPC[0] === elementos[2]){
        placar.push(resultadoFinal[1])
    } else if (escolhafinal[0] === elementos[2] && resultadoPC[0] === elementos[0]){
        placar.push(resultadoFinal[1])
    } else if (escolhafinal[0] === elementos[2] && resultadoPC[0] === elementos[1]){
        placar.push(resultadoFinal[0])
    }       
    return placar
}

function resetButton(){
    escolhafinal = [];
    resultadoPC = [];
}

botao1.addEventListener('click', (e)=>{
<<<<<<< HEAD
    placar = []
=======
    
>>>>>>> origin
    escolhafinal.push(elementos[0])
    console.log(escolhafinal)
    escolhaPC()
    console.log(resultadoPC)
    validation()
    console.log(placar)
    document.write(escolhafinal + " vs " + resultadoPC + " = " + name + " " + placar)
    resetButton()
})

botao2.addEventListener('click', (e)=>{
    placar = []
    escolhafinal.push(elementos[1])
    console.log(escolhafinal)
    escolhaPC()
    console.log(resultadoPC)
    validation()
    console.log(placar)
    document.write(escolhafinal + " vs " + resultadoPC + " = "+ name + " " + placar)
    resetButton()
})

botao3.addEventListener('click', (e)=>{
    placar = []
    escolhafinal.push(elementos[2])
    console.log(escolhafinal)
    escolhaPC()
    console.log(resultadoPC)
    validation()
    console.log(placar)
    document.write(escolhafinal + " vs " + resultadoPC + " = " + name + " " + placar)
    resetButton()
})





