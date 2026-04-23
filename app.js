const game = () => {
    let pScore = 0;
    let cScore = 0;

    //start the game 
    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () => {
            introacreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
    //play match
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand => {
            hand.addEventListener('animationed', function () {
                this.style.animation = '';
            });
        })
        //computer options
        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach(option => {
            option.addEvenrtListener("click", function () {
                //computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoise = computerOptions[computerNumber];

                setTimeout(() => {
                    //Here is where we call compare hands
                    compareHands(this.textContent, computerChoice);
                //update images
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
            }, 2000);
            //Animation
            playerHand.style.animation = "shakePlayer 2s ease";
            computerHand.style.animation = "shakecomputer 2s ease";
        });
    });
};

    const updateScore = () => {
        const playerScore = document.queryselector('.player-score p');
        const computerScore = document.queryselector('.computer-score p');
        plsyerScore.textcontent = pscore;
        computerScore.textContent = cscore;
    };

    const compareHands = (playerChoice, computerChoice) => { 
        //Update text
        const winner = dociment.querySelector('.Winner');
        //checking for a tie
        if(playerChoice === computerChoice){
            Winner.textContent = "It is a tie";
            return;
        }
        //check for Rock
        if (playerChoice === "rock") {
            if (computerChoice === "scissors") {
                winner.textcontent = "player Wins";
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "computer Wins";
                cScore++;
                updateScore();
                return;
            }
        }
                //Check for paper
        if (playerChoice === "paper") {
            if (computerChoice === "scissors") {
                winner.textConent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            }
        }
        //Check for scissors
            if (playerChoice === "scissors") {
                if (computerChoice === "rock") {
                    winner.textContent = "Computer Wins";
                    cScore++;
                    updateScore();
                }else{
                    winner.textContent = "Player Wins";
                    pScore++;
                    updateScore();
                    return;
                }
                }
    }

    //Is call all the inner function
    startGame();
    playMatch();
            if (playerChoice === 'scissors') {
                if (computerChoice === 'rock') {
                    Winner.textContent = 'computer Wins'
                    return;
                } else {
                    winner.textContent = 'Computer Wins';

                    //start the game
                    game();
                    game();
                }