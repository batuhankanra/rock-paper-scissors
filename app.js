const computerChoicedisplay=document.getElementById('computer-choice');
const userChoicedisplay=document.getElementById('user-choice'); 
const resultDisplay=document.getElementById('result');
const possibleChoices=document.querySelectorAll('button');
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener("click",(e)=>{
    userChoice=e.target.id 
    userChoicedisplay.innerHTML=userChoice
    generateComputerChoice()
    getResult()
}))
function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random()*possibleChoices.length)
    

    if(randomNumber===0){
        computerChoice="rock"
        
    }
    else if(randomNumber===1){
        computerChoice="scissors"
        
    }
    else{
        computerChoice="paper"
        
    }
    computerChoicedisplay.innerHTML=computerChoice
}


function getResult(){
    if(computerChoice===userChoice){
        result='its a draw!'
        
    }
    if(computerChoice==='rock' &&userChoice==='paper'){
        result='you lose!'
        
    }
    if(computerChoice==='rock' && userChoice==='scissors'){
        result='you win!'
        
    }
    if(computerChoice==='paper' && userChoice==='scissors'){
        result='you win!'
        
    }
    if(computerChoice==='paper' && userChoice==='rock'){
        result='you lose!'
        
    }
    if(computerChoice==='scissors' && userChoice==='rock'){
        result='you win!'
        
    }
    if(computerChoice==='paper' && userChoice==='paper'){
        result='you lose!'
        
    }
    resultDisplay.innerHTML=result
}