
// Planning

// Game loop
// After individual has confirmed they would like to play   
  // Define gameOptions 
  // Define userChoice
 

  // REPEAT LOOP
    // Prompt user to type, "R", "P", "S" - assign to userChoice
    // Convert userChoice to uppercase
    // if (userChoice in gameOptions)   
      // continue
    // else
      // alert: "Sorry, we couldn't Please type 'R', 'P', or 'S' to indicate your choice"
      // 

  // Randomly select a value from gameOptions - assign to computerChoice

  // if userChoice === R {
      // if computerChoice === R
        // "It's a tie!"
        // ties++
        // continue
      // if computerChoice === P
        // "You lost!"
        // losses++
      // if computerChoice === S
        // "You won!"
        // wins++
     //}

  // if userChoice === P 
    // if computerChoice === R
      // "You won!"
      // wins++
    // if computerChoice === P
      // "It's a tie!"
      // ties++
    // if computerChoice === S
      // "You lost!"
      // losses++
  
  // if userChoice === S
    // if computerChoice === R
      // "You lost!"
      // losses++
    // if computerChoice === P
      // "You won!"
      // wins++
    // if computerChoice === S
      // "It's a tie!"
      // ties++ 

  // Alert for wins, ties, and losses
  
  // -----------------------------------------

  // Coding 

  var rounds = 0;
  var wins = 0;
  var losses = 0;
  var ties = 0;

  var playGame = window.confirm("Hello, would you like to play Rock, Paper, Scissors?")

  if (playGame) {
    rps();
  } else {
    window.alert("If you would like to play, feel free to revisit this page!");
  }

  function rps() {
    const gameOptions = ["R", "P", "S"];
    console.log("gameOptions: " + gameOptions);
    console.log(typeof gameOptions);
    console.log(gameOptions[0]);
    var userChoice;

    while (playGame) {
      let userChoice = window.prompt("What is your choice?");
      console.log(userChoice)
      console.log(typeof userChoice)
      userChoice = userChoice.toUpperCase();
      console.log(userChoice)

      if (gameOptions.includes(userChoice)){ 
        let computerChoice = gameOptions[Math.floor(Math.random() * 3)];
        console.log(computerChoice);

        if (userChoice === "R") {
          if (computerChoice === "R") {
            window.alert("It's a tie! The computer chose: " + computerChoice);
            ties++;
            rounds++;
            // continue; These caused the loop to return  "What is your choice?" prompt
          } else if (computerChoice === "P") {
            window.alert("You lost! The computer chose: " + computerChoice);
            losses++;
            rounds++;
            // continue;
          } else if (computerChoice === "S") {
            window.alert("You won! The computer chose: " + computerChoice);
            wins++;
            rounds++;
           // continue;
          }
        }

        if (userChoice === "P") {
          if (computerChoice === "R") {
            window.alert("You won! The computer chose: " + computerChoice);
            wins++;
            rounds++;
          } else if (computerChoice === "P") {
            window.alert("It's a tie! The computer chose: " + computerChoice);
            ties++;
            rounds++;
          } else if (computerChoice === "S") {
            window.alert("You lost! The computer chose: " + computerChoice)
            losses++;
            rounds++;
          }
        }

        if (userChoice === "S") {
          if (computerChoice === "R") {
            window.alert("You lost! The computer chose: " + computerChoice);
            losses++;
            rounds++;
          } else if (computerChoice === "P") {
            window.alert("You won! The computer chose: " + computerChoice);
            wins++;
            rounds++;
          } else if (computerChoice === "S") {
            window.alert("It's a tie! The computer chose: " + computerChoice);
            ties++;
            rounds++;
          }
        }

        window.alert("Wins: " + wins + "\n" + "Losses: " + losses + "\n" + "Ties: " + ties + "\n" + "Rounds: " + rounds);
        playGame = window.confirm("Would you like to continue playing?");

        if (playGame) {
          continue;
        } else {
          return window.alert("Thank you for playing!" + "\n" + "\n" + "The final score was: " + "\n" + "Wins: " + wins + "\n" + "Losses: " + losses + "\n" + "Ties: " + ties + "\n" + "Rounds: " + rounds + "\n" + "\n" + "If you would like to play again, please revisit this page!");
        }

      } else {
        window.alert("Sorry, we couldn't find your response as an option. Please type 'R', 'P', or 'S' to indicate your choice");
      }
    }
  }