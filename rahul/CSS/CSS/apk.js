let yourScore=0;
let compScore=0;

let choices=document.querySelectorAll(".choice");

const genCompChoice=()=>{
    let options=["rock","paper","Scissors"];
    let indx=Math.floor(Math.random()*3);
    return options[indx]

}
const drwGame=()=>{
    console.log("game was draw");

}


let comp=document.querySelector(".msg-container")
const showWinner=(userWin, yourChoice,compChoice)=>{
    if(userWin){
        yourScore++;
        let yousc=document.querySelector("#userscore");
        yousc.innerText=yourScore;
        console.log("you win");
        comp.innerHTML=`you win ${yourChoice} beats ${compChoice}`;
        comp.style.backgroundColor="green"
      
    }else{
       compScore++;
       let compsc=document.querySelector("#compscore");
       compsc.innerText=compScore;
        comp.innerHTML=`you lose ${compChoice} beats ${yourChoice}`;
        console.log("comp win");
         comp.style.backgroundColor="red"
    }

}


const playGame=(yourChoice)=>{
    console.log("your Choice",yourChoice);
    // generate computer choice
    let compChoice=genCompChoice();
    console.log("computer Choice",compChoice);
    if(yourChoice===compChoice){
        drwGame();

    } else{
        let userWin=true;
        if(yourChoice==="rock"){
            // comp  scissors papper
           userWin = compChoice==="paper"?false:true;
         } else if(yourChoice==="paper"){
            // rock scissors
            userWin=compChoice==="sicssors"?false:true;
        }else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,yourChoice,compChoice);
        }

    }

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const yourChoice=choice.getAttribute("id");
       
        console.log(`choice was clicked  ${yourChoice}`);
     playGame(yourChoice);
    })
})