
let randomNum = 0;
let guessNum = 0;
function resetGame(){
  randomNum = Math.floor((Math.random() * 100) + 1);
  let msg = "Random number initialized, start guessing!";
  document.getElementById("gameMessage").innerHTML = msg;
  guessNum = 0;
  document.getElementById("numberOfTries").innerHTML = `Number of Tries: ${guessNum}`;
}


function confirmGuess(){
  guessNum++;
  document.getElementById("numberOfTries").innerHTML = `Number of Tries: ${guessNum}`;
  let answer = document.getElementById("guess").value;
  let difference = answer - randomNum;
  if(difference < 0){difference=difference*-1}
  if(answer == randomNum){
    document.getElementById("gameMessage").innerHTML = `Correct!`;
    document.getElementById("numberOfTries").innerHTML = `You got it in ${guessNum} guesses!`;
  }
  else if(difference > 50){
    document.getElementById("gameMessage").innerHTML = `Freezing`;
  }else if(difference <= 50 && difference >= 20){
    document.getElementById("gameMessage").innerHTML = `Cold`;
  }else if(difference <= 19 && difference >= 10){
    document.getElementById("gameMessage").innerHTML = `Warm`;
  }else if(difference <= 9 && difference >= 5){
    document.getElementById("gameMessage").innerHTML = `Hot`;
  }else if(difference < 5){
    document.getElementById("gameMessage").innerHTML = `Boiling`;
}

}
