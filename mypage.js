document.getElementById('playAudio').addEventListener('click', function() {
    var theAudio = document.getElementById('theAudio');
    if (theAudio.paused){
    theAudio.play().catch(error => {
        console.error("Erro ao reproduzir o áudio:", error);
    });
    } else {
        theAudio.pause();
    }
});

var dataLocal = new Date().toLocaleDateString();
console.log("Data local:", dataLocal);

var horaLocal = new Date().toLocaleTimeString();
console.log("Horário local:", horaLocal);

//horas
var dataAtual = new Date();

//pegar o valor numerico da hora pro if/else
var horaAtual = dataAtual.getHours();
console.log("Hora atual:", horaAtual);

//outra forma de pegar valor numerico
var horaNumerica = Number(horaAtual);
console.log("Valor numérico da hora:", horaNumerica);


//funcao pra colocar texto
function exibirTextoNaTela(id, texto){
    let campo = document.getElementById(id);
    campo.innerHTML = texto;
}

//funçao pra mudar o audio
function mudarAudio(meuAudio){
    var theAudio = document.getElementById('theAudio');
    if(theAudio){
        var sourceUrl = "audio/" + meuAudio;
        theAudio.src = sourceUrl;
        theAudio.load();
        theAudio.play().catch(error => {
            console.error("Erro ao reproduzir o áudio:", error);
        });
    } else {
        console.error("Elemento de áudio nao encontrado com o ID")
    }
    
}

//função pra mudar a cor das palavras
function aCorQueQuero(id, cor){
    var elemento = document.getElementById(id);
    elemento.style.color = cor;
    elemento.classList.add("text-border2");
}

//função pra mudar cor do botão
function mudarCorDoBotao(backCor, cor){
    var elemento = document.getElementById("playAudio");
    elemento.style.backgroundColor = backCor;
    elemento.style.color = cor;
}

//script pras mudanças de acordo com horário
if ((horaAtual >= 9) && (horaAtual <= 15)){
    document.body.style.backgroundImage = "url('imagem_rainworld/CycleDay.png')";
    mudarAudio("Threat_-_Heavy_Industrial.mp3");
    aCorQueQuero("cabeça", "black");
    aCorQueQuero("paragrafo", "black");
    aCorQueQuero("notinha", "black");
    mudarCorDoBotao("darkgreen", "white");
} else if (((horaAtual >= 5) && (horaAtual < 9)) || ((horaAtual > 15) && (horaAtual <= 19))){
    document.body.style.backgroundImage = "url('imagem_rainworld/CycleSunset2.png')";
    mudarAudio("Kayava.mp3");
    mudarCorDoBotao("orange", "brown");
} else {
    document.body.style.backgroundImage = "url('imagem_rainworld/CycleNight.png')";
    mudarAudio("ELSE_IV.mp3");
    aCorQueQuero("cabeça", "#000080");
    aCorQueQuero("paragrafo", "#000080");
    aCorQueQuero("notinha", "#000080");
    aCorQueQuero("api", "#000080");
    mudarCorDoBotao("midnightblue", "white");
}
