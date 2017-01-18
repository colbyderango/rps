

var comChoice = Math.random();
if (comChoice < 0.34) {
    comChoice = "rock";
} else if(comChoice <= 0.67) {
    comChoice = "paper";
} else {
    comChoice = "scissors";
}

function reset(){
    reason.innerHTML=''
}

var reason= document.getElementById("reason")
var result= document.getElementById("result")
function play(playerChoice) {
    if (playerChoice === "rock") {
        if (comChoice === "scissors") {
            result.innerHTML="You Win!"
            reason.innerHTML='Your Opponent played '+comChoice
        }
        else if (comChoice=== "paper") {
            result.innerHTML="You Lose!"
            reason.innerHTML='Your Opponent played '+comChoice
        }
        else {
            result.innerHTML="It's a Tie!"
            reason.innerHTML='Your Opponent played '+comChoice
        }
    }
    if (playerChoice === "paper") {
        if (comChoice === "rock") {
            result.innerHTML="You Win!"
            reason.innerHTML='Your Opponent played '+comChoice
        }
        else if (comChoice === "scissors") {
            result.innerHTML="You Lose!"
            reason.innerHTML='Your Opponent played '+comChoice
        }
        else {
            result.innerHTML="It's a Tie!"
            reason.innerHTML='Your Opponent played '+comChoice
        }
    }
    if (playerChoice === "scissors") {
        if (comChoice === "paper") {
            result.innerHTML="You Win!"
            reason.innerHTML='Your Opponent played '+comChoice
        }
        else if (comChoice === "rock") {
            result.innerHTML="You Lose!"
            reason.innerHTML='Your Opponent played '+comChoice
        }
        else {
            result.innerHTML="It's a Tie!"
            reason.innerHTML='Your Opponent played '+comChoice 
        }
    }

}


