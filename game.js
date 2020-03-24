var timerEl = document.getElementById("timer");
var startEl = document.getElementById("start");
var questionsEl = document.getElementById("questionCard");
var questionEl = document.getElementById("questions");
var answer1El = document.getElementById("answer1");
var answer2El = document.getElementById("answer2");
var answer3El = document.getElementById("answer3");
var answer4El = document.getElementById("answer4");
var finishEl = document.getElementById("finish");
var finalScoreEl = document.getElementById("final-score");

var i = 0;
var timeLeft = 20;

startEl.addEventListener("click", function() {
    quizTimer();
    startEl.setAttribute("style", "display: none");
    askQuestions();
})

function quizTimer() {
    
    var timeInterval = setInterval(function() {
      timerEl.textContent = timeLeft + " seconds remaining";
      timeLeft--;
  
      if (timeLeft === 0) {
        timerEl.textContent = "Time's Out!";
        clearInterval(timeInterval);
      }
  
    }, 1000);
  }

  var questionArray = [
	{
		title: "Which of these is not an animal?",
		choices: ["cat", "dog", "bird", "tree"],
		answer: "tree"
	},
	{
		title: "Which of these is a State?",
		choices: ["Guam", "Kansas", "American Samoa", "Puerto Rico"],
		answer: "Kansas"
	}
]

function askQuestions () {
    questionsEl.setAttribute("style", "display: auto");
    displayQuestion(questionArray[i]);
}

function displayQuestion (question) {
    questionEl.textContent = question["title"];
    answer1El.textContent = question["choices"][0];
    answer2El.textContent = question["choices"][1];
    answer3El.textContent = question["choices"][2];
    answer4El.textContent = question["choices"][3];
}

var score = 0

function answerChoice (userChoice) {
//console.log(userChoice);
  //decide if correct
//store if correct
//time off timer if incorrect
  var question = questionArray[i];
  //console.log(question["choices"][userChoice]);
  // console.log(question["answer"]);
  if (question["choices"][userChoice] == question["answer"]) {
    score++;
    console.log(score);
  } else {
    timeLeft = timeLeft - 3;
  }
//move to next question- i++
//display next question
  i++;
  if (questionArray[i] == undefined) {
    questionsEl.setAttribute("style", "display: none");
    finishEl.setAttribute("style", "display: auto");
    finalScoreEl.textContent = "Your final score is " + score;
  } else {
    displayQuestion(questionArray[i]);
  }
//decide if done
  
}

answer1El.addEventListener("click", function() {
  answerChoice(0);
});
answer2El.addEventListener("click", function() {
  answerChoice(1);
});
answer3El.addEventListener("click", function() {
  answerChoice(2);
});
answer4El.addEventListener("click", function() {
  answerChoice(3);
});