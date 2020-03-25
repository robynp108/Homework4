//variables to access elements
var timerEl = document.getElementById("timer");
var startEl = document.getElementById("start");
var startButtonEl = document.getElementById("start-button");
var questionsEl = document.getElementById("questionCard");
var questionEl = document.getElementById("questions");
var answer1El = document.getElementById("answer1");
var answer2El = document.getElementById("answer2");
var answer3El = document.getElementById("answer3");
var answer4El = document.getElementById("answer4");
var finishEl = document.getElementById("finish");
var finalScoreEl = document.getElementById("final-score");

var i = 0;
var timeLeft = 15;

//event handler for start button
startButtonEl.addEventListener("click", function () {
  quizTimer();
  startEl.setAttribute("style", "display: none");
  askQuestions();
})

//timer function
function quizTimer() {

  var timeInterval = setInterval(function () {
    timerEl.textContent = timeLeft + " seconds remaining";

    if (questionArray[i] == undefined) {
      questionsEl.setAttribute("style", "display: none");
      finishEl.setAttribute("style", "display: auto");
      clearInterval(timeInterval);
    } else if (timeLeft === 0) {
      questionsEl.setAttribute("style", "display: none");
      finishEl.setAttribute("style", "display: auto");
      clearInterval(timeInterval);
    } else { timeLeft--; }

  }, 1000);
}

//question array
var questionArray = [
  {
    title: "Which of these is not a programming language?",
    choices: ["HTML", "CSS", "jQuery", "JavaScript"],
    answer: "jQuery"
  },
  {
    title: "What will console.log(\"2\" + \"5\") return?",
    choices: ["7", "10", "null", "25"],
    answer: "25"
  },
  {
    title: "What does the .push() method do?",
    choices: ["push element to end of line", "push element to end of page",
      "append data to local storage", "append item to an array"],
    answer: "append item to an array"
  },
  {
    title: "Which of these operators means 'or'?",
    choices: ["^^", "||", "!!", "&&"],
    answer: "||"
  }
]

//functions to start display of questions
function askQuestions() {
  questionsEl.setAttribute("style", "display: auto");
  displayQuestion(questionArray[i]);
}

function displayQuestion(question) {
  questionEl.textContent = question["title"];
  answer1El.textContent = question["choices"][0];
  answer2El.textContent = question["choices"][1];
  answer3El.textContent = question["choices"][2];
  answer4El.textContent = question["choices"][3];
}

var score = 0

//functions to validate user answer choices, move to next question and decide if finished
function answerChoice(userChoice) {
  var question = questionArray[i];

  if (question["choices"][userChoice] == question["answer"]) {
    score++;
    console.log(score);
  } else {
    timeLeft = timeLeft - 3;
  }

  i++;
  if (questionArray[i] == undefined) {
    questionsEl.setAttribute("style", "display: none");
    finishEl.setAttribute("style", "display: auto");
    finalScoreEl.textContent = "Your final score is " + score;
  } else {
    displayQuestion(questionArray[i]);
  }
}

//event handlers for answer buttons
answer1El.addEventListener("click", function () {
  answerChoice(0);
});
answer2El.addEventListener("click", function () {
  answerChoice(1);
});
answer3El.addEventListener("click", function () {
  answerChoice(2);
});
answer4El.addEventListener("click", function () {
  answerChoice(3);
});

//event handler for submit button with storage of scores
var submitButton = document.getElementById("button-addon2");

submitButton.addEventListener("click", function () {

  var initialsEl = document.getElementById("user-initials");

  var highScoreEntry = initialsEl.value + " - " + score;

  var highScores;

  if (localStorage.getItem("highScores") === null) {
    highScores = [];
  } else {
    highScores = JSON.parse(localStorage.getItem("highScores"));
  }

  highScores.push(highScoreEntry);

  localStorage.setItem("highScores", JSON.stringify(highScores));
})
