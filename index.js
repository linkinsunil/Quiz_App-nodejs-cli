const chalk = require("chalk")
console.log(chalk.underline.yellowBright("Welcome to the " + chalk.yellow("Season One") + " of " + chalk.bgYellow.black.bold("Movie Maniac!")));
console.log()
console.log("Lets see how good you know about " + chalk.bgRed.white.bold("Marvel Cinematic Universe"));
console.log(chalk.yellow("-----------------------------------------------------"))

const readlineSync = require("readline-sync");
let score = 0;

  function quiz(question, answer) {

    let userQuestion = readlineSync.question(question);
    // console.log(userQuestion.toUpperCase);

    if (userQuestion.toUpperCase() === answer.toUpperCase()) {

      console.log(chalk.green("You're Right"));
      score+=2;
    } else {
      console.log(chalk.red("You're Wrong!"));
    }
    console.log("Your score is", chalk.green(score));
    console.log(chalk.yellow("------------------------------------"));
  }

  var questions = [{
    question: "1. Superhero Avatar of Clinton Francis `Clint` Barton? ",
    answer: "Hawkeye"
  },{
    question: "2. Brother of THOR? ",
    answer: "Loki"
  }, {
    question: "3. Which radiation does Hulk is made of? ",
    answer: "Gamma"
  }, {
    question: "4. Virtual Assistant of Tony Stark? ",
    answer: "Jarvis"
  }, {
    question: "5. Name the planet of THOR? ",
    answer: "Asgard"
  }, {
    question: "6. Most fierce antagonist of MCU? ",
    answer: "Thanos"
  }, {
    question: "7. What killed Tony Stark? ",
    answer: "Gamma Radiation"
  }, {
    question: "8. Dr Banner's superhero avatar was...? ",
    answer: "Hulk"
  }, {
    question: "9. Which superhero was made in lab by Dr Banner and Tony? ",
    answer: "Vision"
  }, {
    question: "10. What the rare metal found in Wakanda simply referred as? ",
    answer: "Vibranium"
  }]

  for (var i = 0; i < questions.length; i++) {
    quiz(questions[i].question, questions[i].answer)
  }



  var highScore = [{
    name: "Sunil",
    score: 20
  }, {
    name: "Rekha",
    score: 16
  }]

  // console.log(highScore[0].score)

  if (score >= highScore[1].score) {
    console.log(chalk.green("You're one of a top scorer!"))
  }else {
    console.log(chalk.redBright("Sorry! You did'nt make it. Try Again."))
  }
console.log(chalk.yellow("------------------------------------"));
console.log("Checkout the top scorers in scoreboard here")

  for (let j=0; j<highScore.length; j++){
    console.log(chalk.bgGrey.green.bold(highScore[j].name, highScore[j].score))
  }
console.log(chalk.yellow("------------------------------------"));
console.log(chalk.blue("If your score is equal or has beaten the top scorer in scoreboard, please provide me the screenshot of your score I'll update the score board, thanks."))
console.log(chalk.yellow("------------------------------------"));