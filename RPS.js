const playRPSGame = () => {
  const choices = ["R", "P", "S"];
  const play = confirm("Do you want to play?");
  let count = 0;
  let draws = 0;
  let wins = 0;
  let losses = 0;

  const getRandomChoices = () => {
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
  }

  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      draws++
    } else if (
      (userChoice === "R" && computerChoice === "P") ||
      (userChoice === "P" && computerChoice === "S") ||
      (userChoice === "S" && computerChoice === "R")
    ) {
      alert("You lost!");
      losses++
    } else if (
      (userChoice === "R" && computerChoice === "S") ||
      (userChoice === "S" && computerChoice === "P") ||
      (userChoice === "P" && computerChoice === "R")
    ) {
      alert("You won!");
      wins++
    } else {
      console.log("Invalid choice")
    }
  }

  if (play) {
    const rounds = play ? prompt("How many rounds do you want to play?") : 0;
    while (count < rounds) {
      count++
      const userChoice = prompt("R, P, S ?").toUpperCase();
      const computerChoice = getRandomChoices();
      console.log(`Your choice was: ${userChoice}`);
      console.log(`Computer's choice was: ${computerChoice}`);
      determineWinner(userChoice, computerChoice);
    }
    console.log(`Wins: ${wins}, Losses: ${losses}, Draws: ${draws}`)
    alert(`Wins: ${wins}, Losses: ${losses}, Draws: ${draws}`);
  }
};

playRPSGame();