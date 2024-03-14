

const key = "78c540ca9133bea43ff662d7344b5e95"

let fundo = document.querySelector(".fundo")

function colocarDadosNaTela(dados){

    document.querySelector(".cidade").innerHTML = `Tempo em ${dados.name}`
    
    document.querySelector(".temp").innerHTML = `Atual: ${Math.floor(dados.main.temp)}°C || Max: ${Math.floor(dados.main.temp_max)}°C - Min: ${Math.floor(dados.main.temp_min)}°C  `
    
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    
    document.querySelector(".umidade").innerHTML = `Umidade:${dados.main.humidity}%`
    
    document.querySelector(".img-previsao").src=`https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    
    let temperatura = Math.floor(dados.main.temp)

   
    
    
    console.log(dados)


}


async function buscarCidade(cidade){

    
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    
    colocarDadosNaTela(dados)
}



function cliqueiNoBotao(){
    
    const cidade = document.querySelector(".input-city").value
    
    buscarCidade(cidade)
}
