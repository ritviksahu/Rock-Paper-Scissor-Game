let userscore=0
let compscore=0

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScore = document.querySelector("#user-score");
const compScore = document.querySelector("#computer-score");

const getCompChoice = () =>{            //Generate Random computer choice
    let choices= ["rock", "paper", "scissor"];
    let ranIdx= Math.floor(Math.random()*3);
    return choices[ranIdx];
};

const gameDraw = () => {  //Game is draw since both user and computer has selected same choice
    msg.innerText= "Game is Draw. Play Again!";
    msg.style.backgroundColor= "rgb(169, 201, 246)";
    msg.style.color= "rgb(11, 43, 72)";
};

const showWinner = (userWin, userChoice, compChoice) =>{         //Show Winner
    if(userWin ==true){
        userscore++;  //update user score
        userScore.innerText=userscore;
        msg.innerText= `You Win!!! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor= "rgb(77, 169, 77)";
        msg.style.color= "white";
    }
    else {  
        compscore++;  // update computer score 
        compScore.innerText=compscore;
        msg.innerText=`You Lost. ${compChoice} beats ${userChoice}. Try Again!`;
        msg.style.backgroundColor= "rgb(50, 13, 4)";
        msg.style.color= "white";
    }
};
const playGame = (userChoice) =>{       //Game being played
    //Generate computer Choice
    let compChoice= getCompChoice();

    if(userChoice === compChoice){ 
        gameDraw();
    }else{
        let userWin=true;
        if(userChoice === "rock"){
            // scissor, paper
            userWin = compChoice ==="scissor"? true: false;
        }else if(userChoice === "paper"){
            //scissor, rock
            userWin = compChoice ==="scissor"? false: true;
        }else{
            //rock, paper
            userWin = compChoice ==="rock"? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) =>{     //Select 1 of the 3 choices
    choice.addEventListener("click", () => {
        const userChoice =choice.getAttribute("id");
        playGame(userChoice);
    });
});