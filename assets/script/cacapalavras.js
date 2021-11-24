const arrSports = ['futebol', 'volei', 'tenis', "futsal", "nataçao", "handball", 'basquete', 'ciclismo', 'boxe', 'judo', 'vela', 'golfe', 'bocha', 'skate', 'xadrez', 'hipismo', 'corrida', 'atletismo', 'rugby', 'surf'];
const letrasTabela = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let randomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomWord1 = 0
let randomWord2 = 0
let randomWord3 = 0

function escolhaPalavra(){
    randomWord1 = arrSports[randomNumber(0, 19)];
    randomWord2 = arrSports[randomNumber(0, 19)];
    randomWord3 = arrSports[randomNumber(0, 19)];

    console.log(randomWord1)
    console.log(randomWord2)
    console.log(randomWord3)

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

function criarTabela(){
    for (let row = 0; row < 10; row++) {
        let arrColumn = []
        for (let column = 0; column < 10; column++) {
            arrColumn.push(letrasTabela[randomNumber(0,25)]);
        }
        arrTable.push(arrColumn);
    }
}

    // LOOPS PARA ADICIONAR LETRAS NA GRADE

function criarTabelaComPalavra(){
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
    }

    for (let i = 0; i < randomWord2.length; i++) {
        arrTable[randomNumberRow2][randomNumberColumn2] = randomWord2[i];
        randomNumberColumn2++
    }

    for (let i = 0; i < randomWord3.length; i++) {
        arrTable[randomNumberRow3][randomNumberColumn3] = randomWord3[i];
        randomNumberColumn3++
    }
}
console.table(arrTable)


/* ----------------------DOM TABELA------------------------------ */

let tabela = document.createElement('table')
let tbody = document.createElement('tbody')

function criandoHTML(){

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
    divTabelaPai.appendChild(tabela)
    tabela.appendChild(tbody)

    for( let indice = 0; indice < 10; indice++){
        const linha = document.createElement('tr')
            for (let z = 0; z <10; z++){
            let conteudoTabela = document.createElement('td')

            conteudoTabela.innerHTML = arrTable[indice][z]        
            linha.appendChild(conteudoTabela)
        }
        tbody.appendChild(linha)
        console.log(linha)
    }
    tabela.classList.add('tabela')
}
criandoHTML()

    for (let indice = 0; indice < 10; indice++) {
        const linha = document.createElement('tr')
        for (let z = 0; z < 10; z++) {
            const conteudoTabela = document.createElement('td')

            conteudoTabela.innerText = arrTable[indice][z]
            linha.appendChild(conteudoTabela)
        }
        tbody.appendChild(linha)
    }

const botaoReset = document.getElementById('RESET')
botaoReset.addEventListener('click', () => {
    tabela.innerHTML = ''
    tbody.innerHTML = ''
    criandoHTML()
})


/* 1. TABLE
    2. TABLE CABEÇALHO
    3. TBODY 
        3.1 - TR - LINHAS
            3.2 - TD  - COLUNAS (ESSAS SÃO AS QUE RECEBEM CONTEUDO)
*/
