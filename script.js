let humanScore = 0;
let computerScore = 0;
let round = 0;
const resultText = document.querySelector("#result-text");
const resultScore = document.querySelector("#result-score");
const roundText = document.querySelector("#round-number");
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
function playRound(playerChoice, computerChoice) {
    if ((playerChoice == 'paper' && computerChoice == 'rock') || 
    (playerChoice == 'scissors' && computerChoice == 'paper') || 
    (playerChoice == 'rock' && computerChoice == 'scissors') ){
        humanScore++;
        return "Player wins!";
    }
    else {
        computerScore++;
        return "Computer wins!";
    }
}
const buttons = document.querySelectorAll('.choice')
buttons.forEach(function(button){
    button.addEventListener('click', function(){
        const playerChoice = button.dataset.choice;
        const computerChoice = computerPlay();
        const result = playRound(playerChoice, computerChoice);

        resultText.textContent = result;
        resultScore.textContent = `${humanScore} - ${computerScore}`;
        round++;
        if(round >= 5 || humanScore === 5 || computerScore === 5) { 
            // End the game
            round = 0;
            humanScore = 0;
            computerScore = 0;

        }
        roundText.textContent = `Round: ${round}`;
        console.log(playerChoice);
        console.log(computerChoice);
        console.log(result);
        console.log(`Round: ${round}`);
    })
})
