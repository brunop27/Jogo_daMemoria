//Armazena os emojis
const emojis = [
    "❤",
    "❤",
    "🐱‍🐉",
    "🐱‍🐉",
    "😎",
    "😎",
    "👽",
    "👽",
    "🦊",
    "🦊",
    "🍕",
    "🍕"
];

//Guarda as duas seleção
let openCards = [];

// Embaralha os emojis, cria uma ordenação de acordo com uma regra passada
let shuffleEmojis = emojis.sort(()=> (Math.random() > 0.5 ? 2: -1));

//Desenhando elementos na tela
for(let i=0; i<emojis.length; i++){
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

function handleClick(){
    //Salvando a carta clicada no array
    if(openCards.length<2){
        this.classList.add("boxOpen");
        openCards.push(this);
    }

    if(openCards.length == 2){
        setTimeout(checkMatch, 300);
    }
}

function checkMatch(){
    if(openCards[0].innerHTML === openCards[1].innerHTML){
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    }else{
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }

    openCards = [];

    if(document.querySelectorAll(".boxMatch").length==emojis.length){
        alert("Você vencer!");
    }
}