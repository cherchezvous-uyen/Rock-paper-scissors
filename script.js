let humanScore = 0;
let computerScore = 0;
let round = 0;
function computerPlay() {
    let random = Math.floor(Math.random()*3);
    if(random == 0) {
        return "rock";
    } else if(random == 1) {
        return "paper";
    } 
    else {
        return "scissors"
    }
}
function playRound()
const buttons = document.querySelectorAll('.button')
buttons.forEach(function(button){
    button.addEventListener('click', function(){
        const playerChoice = button.data.choice;
        const computerChoice = computerPlay();
        playRou
    })
})