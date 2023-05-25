
// Generate random number for computer choice
let num = Math.floor(Math.random()*3)+1;

// define function
function getComputerChoice(){
    // write if function to assing rock paper scisro to number 
    if(num===1){
        return console.log("Rock")
    } else if (num===2){
        return console.log("Paper")
    } else {
        return console.log("Scissors")
    }
}



