const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const prompt = require("prompt-sync")();
const alert = require("prompt-sync")();
var value = 2;
var score = 0;
var status = true;
var lives = 3;


function guess(){
    rl.question("Begin now", (reply) => {
        let userName = prompt("input ur username: ");
        console.log("Welcome " + userName);
        while (status && lives != 0){
            var numbers = Math.floor(Math.random() * value) + 1;
            var userInput = prompt('Enter number between 1 & ' + value + ':');
            if(numbers == userInput){
                alert("You guessed right");
                score++;
                value++;
                alert('you have ' + lives + ' live left');
                proceed();
            }else if(numbers != userInput){
                alert("You did not guess right");
                lives--;
                alert('you have ' + lives + ' live left');
            }else{
                status=false;
            }
        }
        alert('Game Over!!!!\n Your score is ' + score);
        rl.close();
    });
}

function proceed(){
    if (status == true) {
        alert("You are correct, proceed to next stage");
    }
}
guess(value);