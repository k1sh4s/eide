var dataLocal = new Date().toLocaleDateString();
console.log("Data local:", dataLocal);

var horaLocal = new Date().toLocaleTimeString();
console.log("Horário local:", horaLocal);

function exibirTextoNaTela(id, texto){
    let campo = document.getElementById(id);
    campo.innerHTML = texto;
}

function mudarAudio(meuAudio){
    var theAudio = document.getElementById('theAudio');
    if(theAudio){
        var sourceUrl = 'audio/' + meuAudio;
        theAudio.src = sourceUrl;
        theAudio.load();
    } else {
        console.error("Elemento de áudio nao encontrado com o ID")
    }
    
}

function aCorQueQuero(id, cor){
    var elemento = document.getElementById(id);
    elemento.style.color = cor;
    elemento.classList.add("text-border2");
}

var horarioLocal = new Date().getHours();

if ((horarioLocal >= 9) && (horarioLocal <= 15)){
    document.body.style.backgroundImage = "url('imagens_rainWorld/CycleDay.png')";
    mudarAudio("Threat_-_Heavy_Industrial.mp3");
    aCorQueQuero("cabeça", "black");
    aCorQueQuero("paragrafo", "black");
    aCorQueQuero("notinha", "black");
} else if (((horarioLocal >= 5) && (horarioLocal < 9)) || ((horarioLocal > 15) && (horarioLocal <= 19))){
    document.body.style.backgroundImage = "url('imagens_rainWorld/CycleSunset2.png')";
    mudarAudio("Kayava.mp3");
} else {
    document.body.style.backgroundImage = "url('imagens_rainWorld/CycleNight.png')";
    mudarAudio("ELSE_IV.mp3");
    aCorQueQuero("cabeça", "#000080");
    aCorQueQuero("paragrafo", "#000080");
    aCorQueQuero("notinha", "#000080");
    aCorQueQuero("api", "#000080");
}
