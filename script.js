let userScore=0;
let compScore=0;
let choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const genComp=()=>{
    const options=["rock","paper","scissors"];

const randomIdx=Math.floor(Math.random()*3);
         return options[randomIdx];
   //rock,paper,scissor

}
const userScorepara=document.querySelector("#user");
const compscorepara=document.querySelector("#comp")

const draw=()=>{
    console.log("Draw ghr ja");
    msg.innerText="Match Draw.Play Again!"
}
const showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        userScorepara.innerText=userScore;
        console.log("you win");
        msg.innerText="You Win!";
        msg.style.backgroundColor="green"
    }else{
        compScore++;
        compscorepara.innerText=compScore;
        console.log("you losse");
        msg.innerText="You Loose!"
        msg.style.backgroundColor="red"
    }

}
const playGame=(userChoice)=>{
console.log('User Choice',userChoice)
const compChoice=genComp();
console.log('Comp Choice',compChoice)
if(userChoice==compChoice){
//Draw
draw();
}else{
    let userWin=true;
    if(userChoice==="rock"){
        //scissor,paper
       userWin=compChoice==="paper"?false:true;
    }else if(userChoice==='paper'){
        //rock,scissor
       userWin= compChoice=="scissors"?false:true;

}else{
//rock,paper
userWin=compChoice==="rock"?false:true;
}
showWinner(userWin);
}
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);

    })
})