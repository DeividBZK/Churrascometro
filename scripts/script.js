// carne 400gr por pessoa + de 6 horas -650
//cervja 1200 ml por pessoa +6 horas 2000 ml
//refrigerante/agua - 1000 ml por pessoa +6 1500 ml



//esses 4 lets são usados pra chamar cada elemento 
//do html pra assim ficar mais facil de manipular
let InputAdultos = document.getElementById("Adultos")
let InputCriancas = document.getElementById("Criancas")
let InputDuracao = document.getElementById("Duracao")
let resultado = document.getElementById("resultado")

//essa é função pricipal ela faiz quase tudo
function calc(){
    console.log("calculando")
//aqui ela pega cada valor puchado do html e da nomes pra eles pra facilitar
    let adultos = InputAdultos.value;
    let criancas = InputCriancas.value;
    let duracao = InputDuracao.value
//aqui é feio a parte dos cauculos com os valores setados nas funções la em baixo
    let qtdTotalCarne = carnePP(duracao)*adultos + (carnePP(duracao)/2 * criancas)
    let qtdTotalcerveja = cervejaPP(duracao*adultos)
    let qtdTotalrefrigerante = refrigerantePP(duracao)*adultos + (refrigerantePP(duracao)/2 * criancas)
//aqui é a parte que ele imprime na tela os resutados em forma de pragrafo concatenando o valor mais texto
    resultado.innerHTML=`<p>Sera nescessario:</p>`
    resultado.innerHTML+=`<p> ${qtdTotalCarne / 1000}Kg de carne</p>`
    resultado.innerHTML+=`<p> ${Math.ceil(qtdTotalcerveja /355)} latas de cerveja</p>`
    resultado.innerHTML+=`<p> ${Math.ceil(qtdTotalrefrigerante /2000)}L de refrigetante</p>`



}

//aqui temos as funções de valores setados para cada objeto usado 
function carnePP(duracao){
 
    if(duracao >= 12){
        return 1300;
    }else if(duracao >= 6){
        return 650;}
        else{
        return 400;
    }
    
}
//nesses if e else poderiamos fazer infitos valores considerando varias horas


function cervejaPP(duracao){
 
    if(duracao >= 12){
        return 4000;
    }else if(duracao >= 6){
        return 2000;}
        else{
        return 1200;
    }
    
}

function refrigerantePP(duracao){
 
    if(duracao >= 12){
        return 3000;
    }else if(duracao >= 6){
        return 1500;}
        else{
        return 1000;
    }
    
}


