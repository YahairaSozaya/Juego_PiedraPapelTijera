var user; //Variable del usuario aun no especificada
var pc = Math.floor(Math.random()* (3 + 1 - 1) + 1);//La función Math.floor asigna un número aleatorio entre 1 y 3 a la var pc
var rock = 1;
var paper =2;
var scissors = 3;
var contadorusuario=0;
var contadorcpu=0;
           
var rockButton = document.getElementById("piedra"); //Todas estas variables toman la información de los botones del HTML
var paperButton = document.getElementById("papel");
var scissorsButton = document.getElementById("tijera");
var restartButton= document.getElementById("restart")
var playButton = document.getElementById("play");
var imagen1 = document.getElementById("imagen1")
var imagen2 = document.getElementById("imagen2")
var conatador_user = document.getElementById("contador_user")
var conatador_user = document.getElementById("contador_cpu")
var restartButton = document.getElementById("restart")
        
rockButton.addEventListener("click", optionRock);// Los listeners de eventos disparan las funciones al hacer click sobre los bonotes
paperButton.addEventListener("click", optionPaper); // El objetivo de esas funciones es asignarun valor al usuario
scissorsButton.addEventListener("click", optionScissors);
playButton.addEventListener("click", play);// la función play() dispara acciona todo el algoritmo
restartButton.addEventListener("click", resetGame);//la  función resetGame() le da otro valor a la var pc para repetir el juego */
window.addEventListener("mouseout", clear);
restartButton.addEventListener("click", restart);

    
function clear(){
    document.getElementById("resultado").style.display="none";
    document.getElementById("contenedor").style.opacity=1;
}

function optionRock() { //funciones para signar el valor al usuario anteriormente mencionadas
    user = rock;
    imagen1.src="images/piedra.jpeg"
}
        
function optionPaper() {
    user = paper;
    imagen1.src="images/papel.jpeg"
}

function result(){
    document.getElementById("resultado").style.display="flex";
    document.getElementById("contenedor").style.opacity=0.5;
    if (user == pc) {
        contadorusuario++;
        contadorcpu++;
        document.getElementById("rest").innerHTML = "EMPATE";
        document.getElementById("contador_user").innerHTML = contadorusuario;
        document.getElementById("contador_cpu").innerHTML = contadorcpu;
                
    } else if (user == rock && pc == scissors || user == paper && pc == rock || user == scissors && pc == paper) {
        document.getElementById("rest").innerHTML = "GANASTE";
        contadorusuario++;
        document.getElementById("contador_user").innerHTML = contadorusuario;
    } else { 
        document.getElementById("rest").innerHTML = "GANA PC";
        contadorcpu++;
        document.getElementById("contador_cpu").innerHTML = contadorcpu;
    }
}
        
        
function optionScissors() {
    user = scissors;
    imagen1.src="images/tijera.jpeg"            
}
        
function computadora() {
    if (pc == 1) {
        imagen2.src="images/piedra.jpeg"
    } else if (pc == 2) {
        imagen2.src="images/papel.jpeg"
    } else {
        imagen2.src="images/tijera.jpeg"
    }
}
        


function resetGame () {
    pc = Math.floor(Math.random()* (3 + 1 - 1) + 1); //función para darle repetir el juego asignando otro valor aleatorio a pc
} 
    
function restart(){
    contadorusuario=0;
    contadorcpu=0;
    document.getElementById("contador_user").innerHTML = contadorusuario;
    document.getElementById("contador_cpu").innerHTML = contadorcpu;
}

function play() { //Mi función principal, primero establecemos que si user y pc tienen el mismo valor, será un empate.
    if (user == pc) {
        computadora()          
        result()
        resetGame()
    } else if (user == rock && pc == scissors || user == paper && pc == rock || user == scissors && pc == paper) {
        computadora()
        result()
        resetGame()
    } else { 
        computadora()
        result()
        resetGame()
    }
}