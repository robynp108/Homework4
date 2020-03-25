//function to retrieve scores from storage and append new score to list
var highScores = JSON.parse(localStorage.getItem("highScores"));

highScores.forEach(function (highScoreEntry) {
    var scoreListEl = document.getElementById("score-list");
    var currentScore = document.createElement("li");
    currentScore.textContent = highScoreEntry;
    scoreListEl.appendChild(currentScore);
})

