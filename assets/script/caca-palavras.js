const arrSports = ['FUTEBOL', 'VOLEI', 'TENIS', "FUTSAL", "NATACAO", "HANDBALL", 'BASQUETE', 'CICLISMO', 'BOXE', 'JUDO', 'VELA', 'GOLFE', 'BOCHA', 'SKATE', 'XADREZ', 'HIPISMO', 'CORRIDA', 'ATLETISMO', 'RUGBY', 'SURF'];
const letrasTabela = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

let randomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomWord1 = ''
let randomWord2 = ''
let randomWord3 = ''

function escolhaPalavra() {
    randomWord1 = arrSports[randomNumber(0, 19)];
    randomWord2 = arrSports[randomNumber(0, 19)];
    randomWord3 = arrSports[randomNumber(0, 19)];

    for (let i = 0; i < 3; i++) {
        if (randomWord1 === randomWord2) {
            randomWord2 = arrSports[randomNumber(0, 19)];
        }
        if (randomWord3 === randomWord1 || randomWord3 === randomWord2) {
            randomWord3 = arrSports[randomNumber(0, 19)];
        }
    }
}

// GRADE VAZIA

let arrTable = [];
let cell = 1;

function criarTabela() {
    for (let row = 0; row < 10; row++) {
        let arrColumn = []
        for (let column = 0; column < 10; column++) {
            arrColumn.push(letrasTabela[randomNumber(0, 25)]);
        }
        arrTable.push(arrColumn);
    }
}

// LOOPS PARA ADICIONAR LETRAS NA GRADE

let controleLinhaColuna = []
let controleLinhaColuna2 = []
let controleLinhaColuna3 = []


function criarTabelaComPalavra() {
    let randomNumberRow1 = randomNumber(0, 9);
    let randomNumberRow2 = randomNumber(0, 9);
    let randomNumberRow3 = randomNumber(0, 9);

    for (let i = 0; i < 5; i++) {
        if (randomNumberRow2 === randomNumberRow1) {
            randomNumberRow2 = randomNumber(0, 9);
        }
    }

    for (let i = 0; i < 10; i++) {
        if (randomNumberRow3 === randomNumberRow1 || randomNumberRow3 === randomNumberRow2) {
            randomNumberRow3 = randomNumber(0, 9);
        }
    }

    // VARIÁVEL QUE INDICA INÍCIO DA PALAVRA NA COLUNA

    let randomNumberColumn1 = randomNumber(0, (9 - (randomWord1.length - 1)));
    let randomNumberColumn2 = randomNumber(0, (9 - (randomWord2.length - 1)));
    let randomNumberColumn3 = randomNumber(0, (9 - (randomWord3.length - 1)));

    // LOOPS PARA ADICIONAR PALAVRAS NA GRADE

    for (let i = 0; i < randomWord1.length; i++) {
        arrTable[randomNumberRow1][randomNumberColumn1] = randomWord1[i];
        randomNumberColumn1++
        controleLinhaColuna.push(((randomNumberRow1 * 10) + randomNumberColumn1))
        console.log(controleLinhaColuna)
    }
    controleLinhaColuna = controleLinhaColuna.join(', ')
    console.log(controleLinhaColuna)

    for (let i = 0; i < randomWord2.length; i++) {
        arrTable[randomNumberRow2][randomNumberColumn2] = randomWord2[i];
        randomNumberColumn2++
        controleLinhaColuna2.push(((randomNumberRow2 * 10) + randomNumberColumn2))
        console.log(controleLinhaColuna2)
    }
    controleLinhaColuna2 = controleLinhaColuna2.join(', ')

    for (let i = 0; i < randomWord3.length; i++) {
        arrTable[randomNumberRow3][randomNumberColumn3] = randomWord3[i];
        randomNumberColumn3++
        controleLinhaColuna3.push(((randomNumberRow3 * 10) + randomNumberColumn3))
        console.log(controleLinhaColuna3)
    }
    controleLinhaColuna3 = controleLinhaColuna3.join(', ')
}


/* ----------------------DOM TABELA------------------------------ */


let tabela = document.createElement('table')
let tbody = document.createElement('tbody')

let valorIdTarget = []

function criandoHTML() {

    const palavra1 = document.getElementById('palavra1')
    const palavra2 = document.getElementById('palavra2')
    const palavra3 = document.getElementById('palavra3')

    escolhaPalavra()

    palavra1.innerHTML = randomWord1
    palavra2.innerHTML = randomWord2
    palavra3.innerHTML = randomWord3

    criarTabela()
    criarTabelaComPalavra()

    const divTabelaPai = document.getElementById('divTabelaPai')
    let cellId = 1;
    divTabelaPai.appendChild(tabela)
    tabela.appendChild(tbody)

    for (let indice = 0; indice < 10; indice++) {
        const linha = document.createElement('tr');

        linha.addEventListener('click', function () {

        })

        for (let z = 0; z < 10; z++) {
            let conteudoTabela = document.createElement('td')
            conteudoTabela.id = cellId;
            conteudoTabela.innerHTML = arrTable[indice][z]
            linha.appendChild(conteudoTabela)
            conteudoTabela.addEventListener('click', function (event) {
                conteudoTabela.classList.add('selected')
                console.log(event.target.parentElement)
                valorIdTarget.push(+event.target.id)
                valorIdTarget.sort(function (a, b) {
                    return a - b
                })
                validate(valorIdTarget)
            })
            cellId++
        }
        tbody.appendChild(linha)
    }
    tabela.classList.add('tabela')
}

criandoHTML()

function validate(value) {

    console.log(value)
    console.log(typeof value)
    console.log(typeof controleLinhaColuna)
    value = value.join(', ')

    let count = 0
    if (value.includes(controleLinhaColuna)) {
        window.alert('PARABÉNS VOCÊ ENCONTROU A PRIMEIRA PALAVRA!')
        count++
        console.log(count)
        return controleLinhaColuna = 101
    }
    if (value.includes(controleLinhaColuna2)) {
        window.alert('PARABENS VOCÊ ENCONTROU A SEGUNDA PALAVRA!')
        count++
        console.log(count)
        return controleLinhaColuna2 = 101
    }
    if (value.includes(controleLinhaColuna3)) {
        window.alert('PARABÉNS VOCÊ ENCONTROU A TERCEIRA PALAVRA!')
        count++
        console.log(count)
        return controleLinhaColuna3 = 101
    }

    console.log(controleLinhaColuna)
}

const botaoReset = document.getElementById('RESET')
botaoReset.addEventListener('click', () => {
    document.location.reload(true);
})