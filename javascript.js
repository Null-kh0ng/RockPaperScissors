
//computer choices
let choice = ["rock", "paper", "scissors"];

//randomizes computerChoice selection
function computerChoice(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}

//basis for scorekeeping
computerScore = 0;
playerScore = 0;

//function for gameplay and score adjustment
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
        alert("Lose. Paper beats rock!");
        computerScore++;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        alert("Win. Rock beats scissors!")
       playerScore++;
    } else if (playerSelection == "rock" && computerSelection == "rock") {
        alert("Draw! Rocks!")
        playerScore++;
        computerScore++;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        alert("Lose. Scissors beat paper!")
        computerScore++;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        alert("Win. Paper beats rock!")
        playerScore++;
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        alert("Draw! Papers!")
        computerScore++;
        playerScore++;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        alert("Lose. Rock beats scissors!")
        computerScore++;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        alert("Win. Scissors beat paper!")
        playerScore++;
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        alert("Draw! Scissors!")
        computerScore++;
        playerScore++;
    } else {
        alert("Something is wrong...")
    }
    // can consolidate all the draws into one line, but then less information available.

}

//sets up game for five rounds and keeps score
function game(playRound) {
   
        for(let i = 1; i < 6; i++) {
            if (i <= 5) { 
                input = prompt("Round " + i + "\nRock, Paper, Scissors.. GO!");
                playerSelection = input.toLowerCase();
                computerSelection = computerChoice(choice);
                playRound(playerSelection, computerSelection);
                console.Log("Player has: " + playerScore + " points. \n Computer has: " + computerScore + " points.");
                
            
        }
    }
}
//starts game for 5 rounds
game(playRound)

//continues game for 5 more rounds
restart = prompt("Game Over.\n Start Again?", "YES")
if (restart == "YES") {
    game(playRound)
} else {
    alert("Goodbye.")
}
