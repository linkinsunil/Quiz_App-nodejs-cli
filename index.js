console.log("Movie Maniac - Season One!");
console.log("Answer all the questions, lets see how good you know about movies.");
console.log("-----------------------------------------------------")

var readlineSync = require("readline-sync");
var score = 0;

  function quiz(question, answer) {

    var userQuestion = readlineSync.question(question);
    // console.log(userQuestion.toUpperCase);

    if (userQuestion.toUpperCase() === answer.toUpperCase()) {

      console.log("You're Right");
      score++;
    } else {
      console.log("You're Wrong!");
    }
    console.log("Your score is", score);
    console.log("------------------------------------");
  }

  var questions = [{
    question: "Who killed Jessica? ",
    answer: "No one"
  }, {
    question: "When did Ajav Devgn and his family went for satsang? ",
    answer: "2 october"
  }, {
    question: "Mother of Superman? ",
    answer: "Martha"
  }, {
    question: "Batman's city? ",
    answer: "Gotham"
  }, {
    question: "Which radiation does Hulk is made of? ",
    answer: "Gamma"
  }, {
    question: "Space deployed assistant of Tony Stark? ",
    answer: "Veronica"
  }, {
    question: "Speed of the fastest suit of Iron man? ",
    answer: "Mark 42"
  }
  ]

  for (var i = 0; i < questions.length; i++) {
    quiz(questions[i].question, questions[i].answer)
  }

  var highScore = [{
    name: "Sunil",
    score: 7
  }]

  // console.log(highScore[0].score)

  if (score === highScore[0].score) {
    console.log("You've topped the score!")
  }else {
    console.log("Sorry! You did'nt make it. Try Again.")
  }