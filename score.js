// //event handler for submit button
// var submitButton = document.getElementById("button-addon2");

// submitButton.addEventListener("click", function() {
//     //access value of input field
//     var scoreListEl = document.getElementById("score-list");
//     var initialsEl = document.getElementById("user-initials");
    
//     var userInitals = initialsEl.value;
//     var currentScore = document.createElement("li");
//     currentScore.textContent = userInitals + "-" + score;

//     console.log(currentScore);

//     scoreListEl.appendChild(currentScore);
    
// })

var highScores = JSON.parse(localStorage.getItem("highScores"));

highScores.forEach(function(highScoreEntry) {
    var scoreListEl = document.getElementById("score-list");
    var currentScore = document.createElement("li");
    currentScore.textContent = highScoreEntry;
    scoreListEl.appendChild(currentScore);
})

