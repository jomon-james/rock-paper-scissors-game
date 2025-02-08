let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

const genComputerChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randIndx = Math.floor(Math.random()*3);
    return options[randIndx];
};

const drawGame = () =>{
    msg.innerText = "game was draw play again";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, computerChoice) =>{
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `you win your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    } else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `you lost ${computerChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }

};

const playGame = (userChoice) => {

    const computerChoice = genComputerChoice();

    if(userChoice === computerChoice) {
        drawGame();
    } 
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = computerChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = computerChoice === "scissors" ? false : true;            
        }
        else{
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,computerChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});