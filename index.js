let output=document.getElementById("boxy");
let btnGenerate=document.querySelector(".btn-generate");

window.addEventListener("load",GetInsulted);
btnGenerate.addEventListener("click",GetInsulted);

function GetInsulted(){
    let url=`https://evilinsult.com/generate_insult.php?lang=en&type=json`;
    fetch(url).then(response => response.json()).then(json => {
        output.innerText=json.insult}
        ).catch(errorHandler);
}

function errorHandler(error){
    console.log(error);
}

