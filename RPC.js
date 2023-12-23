const RPS = () => {
  let choices = ["R", "P", "S"];
  let play = confirm("Do you want to play?");
  let draws = 0;
  let wins = 0;
  let losses = 0;
  let num = 0;

  if (play === true) {
    while (num <= 10) {
      num++;
      let rps = prompt("R, P, S ?");
      let randomChoice = Math.floor(Math.random() * choices.length);
      let computersChoice = choices[randomChoice];
      if (rps === computersChoice) {
        draws++
      } else if (rps === "R" && computersChoice === "P") {
        alert("You lost!")
        losses++
      } else if (rps === "P" && computersChoice === "S") {
        alert("You lost!")
        losses++
      } else if (rps === "S" && computersChoice === "R") {
        alert("You lost!")
        losses++
      } else if (rps === "R" && computersChoice === "S") {
        alert("You Won!")
        wins++
      } else if (rps === "S" && computersChoice === "P") {
        alert("You Won!")
        wins++
      } else if (rps === "P" && computersChoice === "R") {
        alert("You Won!")
        wins++
      }
    }
  }
  alert(`Wins: ${wins}, Losses: ${losses}, Draws: ${draws}`)
  if (play === false) {
    alert(":(")
  }
}

RPS()