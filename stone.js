let userCount=0;
let compCount=0;
let choices =document.querySelectorAll(".choice");
let msg=document.querySelector(".msg");
let userScore=document.querySelector("#user-score");
let compScore=document.querySelector("#comp-score");

const genCompChoice=()=>{
    option=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random(option)*3);
    return option[randIdx];
}
const playGame=(userChoice)=>{
    console.log("YOU=",userChoice);
    const compChoice=genCompChoice();
    console.log("comp=",compChoice);
    if(userChoice==compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice=="rock"){
            userWin=compChoice=="paper"?false:true;
        }
        else if(userChoice=="paper"){
            userWin=compChoice=="scissors"?false:true;
        }
        else{
            userWin=compChoice=="rock"?false:true;
        }
    showWinner(userWin,userChoice,compChoice);
    }
}
const showWinner=(userWin,userChoice,compChoice)=>{
   if(userWin==false){
    compCount++;
    compScore.innerText = compCount;
    msg.innerText=`You lose! ${compChoice} beats your ${userChoice} `;
    msg.style.backgroundColor="#d71818ff";
   }else{
    userCount++;
    userScore.innerText = userCount;
    msg.innerText=`You Win! your ${userChoice} beats ${compChoice} `;
    msg.style.backgroundColor="#129e10ff";
   }
}

const drawGame=()=>{
    msg.innerText="Game is Draw";
    msg.style.backgroundColor="#588157";
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});
