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
    
>>>>>>> 912cf7353f17a1aaebc1c57eb1544c3292708013
    escolhafinal.push(elementos[0])
    console.log(escolhafinal)
    escolhaPC()
    console.log(resultadoPC)
    validation()
    console.log(placar)
    alert(placar)
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
    alert(placar)
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
    alert(placar)
    resetButton()
})

//const click = starting.addEventListener('click', function(e));
//const reset = document.getElementById('reset').reset();

const reset = document.getElementById('reset');
reset.addEventListener('click', (e)=>{
    escolhafinal = [];
    resultadoPC = [];
    placar = []
})


