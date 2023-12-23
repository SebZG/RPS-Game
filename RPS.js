const playRPSGame = () => {
  const choices = ["R", "P", "S"];
  const play = confirm(`Do you want to play?`);
  let count = 0;
  let [draws, wins, losses] = [0, 0, 0];

  const getRandomChoices = () => {
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
  };

  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      alert(`Draw!`);
      draws++
    } else if (
      (userChoice === "R" && computerChoice === "P") ||
      (userChoice === "P" && computerChoice === "S") ||
      (userChoice === "S" && computerChoice === "R")
    ) {
      alert(`You lost!`);
      losses++
    } else if (
      (userChoice === "R" && computerChoice === "S") ||
      (userChoice === "S" && computerChoice === "P") ||
      (userChoice === "P" && computerChoice === "R")
    ) {
      alert(`You won!`);
      wins++
    } else {
      return false; // Return true to indicate invalid input
    }
    return true; // Return true to indicate valid input
  }

  if (play) {
    const rounds = play ? prompt(`How many rounds do you want to play?`) : 0;
    while (count < rounds) {
      let userChoice;
      do {
        userChoice = prompt(`R, P, S ?`).toUpperCase();
      } while (!choices.includes(userChoice));
      const computerChoice = getRandomChoices();
      console.log(`Your choice was: ${userChoice}`);
      console.log(`Computer's choice was: ${computerChoice}`);
      if (determineWinner(userChoice, computerChoice)) {
        count++; // Only increment counts if input is valid
      }
    }
    console.log(`Wins: ${wins}, Losses: ${losses}, Draws: ${draws}`);
    alert(`Wins: ${wins}, Losses: ${losses}, Draws: ${draws}`);
  }
};

playRPSGame();