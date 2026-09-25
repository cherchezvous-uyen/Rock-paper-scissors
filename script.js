let humanScore = 0;
let computerScore = 0;
let round = 0;
const resultText = document.querySelector("#result-text");
const resultScore = document.querySelector("#result-score");
const roundText = document.querySelector("#round-number");
const humanChoice = document.querySelector("#human-choice");
const computerChoiceElement = document.querySelector("#computer-choice");
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

const buttons = document.querySelectorAll('.choice')
buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        const playerChoice = button.dataset.choice;

        const cpuChoice = computerPlay();

        const result = playRound(playerChoice, cpuChoice);

        resultText.textContent = result;

        resultScore.textContent =
            `${humanScore} - ${computerScore}`;

        humanChoice.textContent =
            playerChoice === "rock" ? "✊" :
            playerChoice === "paper" ? "✋" :
            "✌️";

        computerChoiceElement.textContent =
            cpuChoice === "rock" ? "✊" :
            cpuChoice === "paper" ? "✋" :
            "✌️";

        round++;

        roundText.textContent = round;

        console.log(playerChoice);
        console.log(cpuChoice);
        console.log(result);
    });

});
function playRound(playerChoice, computerChoice) {
    if((playerChoice == computerChoice)) {
        return "It's a tie!";
    }
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