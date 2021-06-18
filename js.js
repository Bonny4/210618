var vaisiai = document.getElementById("vaisiai");
var darzoves = document.getElementById("darzoves");
var agurkas = document.getElementById("agurkas");
var kriause = document.getElementById("kriause");
var pomidoras = document.getElementById("pomidoras");
var apple = document.getElementById("obuolys");


vaisiai.addEventListener("click", function(){
    agurkas.style.display="none";
    pomidoras.style.display="none";
    apple.style.display="inline-block";
    kriause.style.display="inline-block";
    // apple.setAttribute("class", "fruit")
})

darzoves.addEventListener("click", function(){
    apple.style.display="none";
    kriause.style.display="none";
    agurkas.style.display="inline-block";
    pomidoras.style.display="inline-block";
})