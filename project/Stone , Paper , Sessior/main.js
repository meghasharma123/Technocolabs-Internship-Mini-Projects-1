
var userInput = 'Rock';


const getUserChoice = (userInput) =>{
    userInput = userInput.toLowerCase();


if(userInput === 'rock'||userInput === 'paper'|| userInput ==='scissor'){
    console.log('Enetr data is valid');
}
else{
    console.log('Invalid User Input');
}
}

getUserChoice('Rock');

const getComputerChoice = () => {
    var min =0;
    var max = 3;
    var com = Math.floor(Math.random() * (+max - +min)) + +min; 
    var dat = ['rock' , 'paper', 'scissor'];
    var computerChoice ;
    return computerChoice = dat[com];
}

console.log(getComputerChoice());

const determineWinner = (userInput , computerChoice ) =>{
    if(userInput === computerChoice){
        console.log("Match is tied");
    }
    if(userInput === "rock"){
        if(computerChoice === "paper"){
            console.log("Computer Won");
        }
        else{
            console.log('User Won');
        }
    }
    if(userInput === "paper"){
        if(computerChoice === "scissor"){
            console.log("Computer Won");
        }
        else{
            console.log('User Won');
        }
    }
    if(userInput === "scissor"){
        if(computerChoice === "rock"){
            console.log("Computer Won");
        }
        else{
            console.log('User Won');
        }
    }
}

 determineWinner();
