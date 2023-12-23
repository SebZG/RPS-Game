const RPS = () => {
  const choices = ["R", "P", "S"];
  const play = confirm("Do you want to play?");
  let num = 0;
  let draws = 0;
  let wins = 0;
  let losses = 0;

  if (play === true) {
    let rounds = prompt("How many rounds do you want to play?")
    while (num < rounds) {
      num++;
      let rps = prompt("R, P, S ?");
      let randomChoice = Math.floor(Math.random() * choices.length);
      let computersChoice = choices[randomChoice];
      console.log("Your choice was: " + rps);
      console.log("Computer's choice was: " + computersChoice);
      if (rps === computersChoice) {
        draws++;
      } else if ((rps === "R" && computersChoice === "P")
        || (rps === "P" && computersChoice === "S")
        || (rps === "S" && computersChoice === "R")) {
        alert("You lost!");
        losses++;
      } else if ((rps === "R" && computersChoice === "S")
        || (rps === "S" && computersChoice === "P")
        || (rps === "P" && computersChoice === "R")) {
        alert("You Won!");
        wins++;
      } else {
        console.log("Invalid choice");
      }
    }
    alert(`Wins: ${wins}, Losses: ${losses}, Draws: ${draws}`);
  } else {
    alert(":(");
  }
};

RPS();