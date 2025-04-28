let choices = document.querySelectorAll('.choices');
let result = document.querySelector('.result');
let reset = document.querySelector('.reset');
let computerScore = document.querySelector('.computerScore');
let playerScore = document.querySelector('.playerScore');
result.innerText = 'Start Playing!';
let compScore = 0;
let plScore = 0;
choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        let playerChoice = choice.id;
        console.log(playerChoice);
        let computerChoice  = (Math.random() * 2);
        computerChoice = Math.floor(computerChoice);
        if(computerChoice == 0){
            computerChoice = 'rock';
        }
        else if(computerChoice == 1){
            computerChoice = 'paper';
        }
        else{
            computerChoice = 'scissors';
        }
        if(playerChoice == computerChoice){
            result.innerText = 'It\'s a tie!';
        }
        else if(playerChoice == 'rock'){
            if(computerChoice == 'paper'){
                result.innerText = 'You lose!';
                compScore++;
                computerScore.innerText = compScore;
            }
            else{
                result.innerText = 'You win!';
                plScore++;
                playerScore.innerText = plScore;
            }
        }
        else if(playerChoice == 'paper'){
            if(computerChoice == 'scissors'){
                result.innerText = 'You lose!';
                compScore++;
                computerScore.innerText = compScore;
            }
            else{
                result.innerText = 'You win!';
                plScore++;
                playerScore.innerText = plScore;
            }
        }
        else{
            if(computerChoice == 'rock'){
                result.innerText = 'You lose!';
                compScore++;
                computerScore.innerText = compScore;
            }
            else{
                result.innerText = 'You win!';
                plScore++;
                playerScore.innerText = plScore;
            }
        }
            
    });
});

reset.addEventListener('click', () => {
    compScore = 0;
    plScore = 0;
    computerScore.innerText = compScore;
    playerScore.innerText = plScore;
    result.innerText = 'Start Playing!';
});