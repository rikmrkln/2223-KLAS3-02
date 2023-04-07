let player = document.querySelector('#player');
let appel = document.querySelector('#appel');


function start_game() {
   
    document.getElementById('startpagina').style.display = 'none';
    document.getElementById('container').style.display = 'block';
    
   
 
}

let playerTop = 0;
let playerLeft = 0;
let score = 0;


const maxHeight = 400;
const maxWidth =  400;

function getRandomInt(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}



let appelTop = getRandomInt(0, 400);
let appelLeft = getRandomInt(0, 400);
appel.style.top = appelTop + "px";
appel.style.left = appelLeft + "px";


document.onkeydown = function(e){
    console.log(e.key)
    
    if(e.key == 'ArrowDown' ){
        playerTop = playerTop + 20;
        player.style.top = playerTop + "px";
        
    }
    else if(e.key == 'ArrowUp'){
        playerTop = playerTop - 20;
        player.style.top = playerTop + "px";
    }
    else if(e.key == 'ArrowLeft'){
        playerLeft = playerLeft - 20;
        player.style.left = playerLeft + "px";
    }
    else if(e.key == 'ArrowRight' ){
        playerLeft = playerLeft + 20;
        player.style.left = playerLeft + "px";
    }

    if(playerTop > 400){
        playerTop = 0;
    }
    else if(playerLeft > 400){
        playerLeft = 0;
    }
    else if(playerTop < 5){
        playerTop = 400;
    }
    else if(playerLeft < 5){
        playerLeft = 400;
    }
    if(playerTop < appelTop + 20 && playerTop + 20 > appelTop && playerLeft < appelLeft + 20 && playerLeft + 20 > appelLeft) {
        
        appelTop = getRandomInt(0, 400);
        appelLeft = getRandomInt(0, 400);
        appel.style.top = appelTop + "px";
        appel.style.left = appelLeft + "px";  
        score++; 
        document.getElementById('score').innerHTML = "Score: " + score;
        if (score >= 10) {
            alert("Game over!");
    }
    
    }
    }

  
  



