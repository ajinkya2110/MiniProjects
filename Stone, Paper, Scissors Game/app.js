let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#compScore");


const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const ranIdx = Math.floor(Math.random() *3); 
    return options[ranIdx];
    //rock, paper, scissors
};

const drawGame = () =>{
    // console.log("Game was draw");
    msg.innerText = "Game was a draw, play again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
    console.log("Game ")
}



const playGame = (userChoice) =>{
    // console.log("user choice = ",userChoice);
//Generate comp choice   >modular way of programming
const compChoice = genCompChoice();
console.log("Comp choice =",compChoice);


if(userChoice === compChoice){
    //Draw
    drawGame();
}else{
let userWin = true;
if(userChoice === "rock"){
    //scissors,paper
   userWin = compChoice === "paper" ? false:true;
} else if(userChoice === "paper"){
    //rock, scissors
    userWin = compChoice === "scissors" ? false:true;
}else {
    //rock,paper
    userWin = compChoice === "rock" ? false:true;
}
showWinner(userWin, userChoice,compChoice);
}
};


choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("Id");
        console.log("Choice was clicked",userChoice);
        playGame(userChoice);
    });
});