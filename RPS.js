const playRPSGame = () => {
  const choices = ["R", "P", "S"];
  const play = confirm(`Do you want to play?`);
  let count = 0;
  let [draws, wins, losses] = [0, 0, 0];

  const getRandomChoices = () =>
    choices[Math.floor(Math.random() * choices.length)];

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
    let rounds;
    do {
      rounds = prompt(`How many rounds do you want to play?`);
      if (isNaN(rounds) || rounds <= 0) {
        alert('Please enter a number greater than zero for the number of rounds you want to play.');
      };
    } while (isNaN(rounds) || rounds <= 0);

    while (count < rounds) {
      do {
        userChoice = prompt(`Please choose R, P or S.`);

        if (userChoice.toUpperCase() !== "R" && userChoice.toUpperCase() !== "P" && userChoice.toUpperCase() !== "S") {
          alert('Please select R, P, or S.');
        } else {

          const computerChoice = getRandomChoices();
          console.log(`Your choice was: ${userChoice}`);
          console.log(`Computer's choice was: ${computerChoice}`);
          if (determineWinner(userChoice.toUpperCase(), computerChoice)) {
            count++; // Only increment counts if input is valid
          }
        }
      } while (userChoice.toUpperCase() !== "R" && userChoice.toUpperCase() !== "P" && userChoice.toUpperCase() !== "S");
    }
    console.log(`Wins: ${wins}, Losses: ${losses}, Draws: ${draws}`);
    alert(`Wins: ${wins}, Losses: ${losses}, Draws: ${draws}`);
  };
}
playRPSGame();

// .includes(userChoice.toUpperCase()))