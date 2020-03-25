# Homework4
# 04 Web APIs: Code Quiz

## User Story

```
AS A coding bootcamp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```
## Description

<<<<<<< HEAD
## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
* a start button
* a timer span
* a place to append answer choices
* a click handler for the start button
* a setInterval when the start button is clicked
* the first question and answer choices when the start button is clicked

WHEN I answer a question
THEN I am presented with another question
* a question array of objects
* each item in array has object pairs for title, choices, correct answer
* for loop to cycle through questions
* conditional within for loop to validate submission of an answer
* conditional within loop to check if answer is correct
* function to record points for correct answer

WHEN I answer a question incorrectly
THEN time is subtracted from the clock
* conditional (within button/event listener to answer questions)... setInterval()


WHEN all questions are answered or the timer reaches 0
THEN the game is over
* game over function to be called with clear interval/button handler



WHEN the game is over
THEN I can save my initials and score

=======
This application is a timed coding quiz.  When the start button is pushed, the user has fifteen second to answer four questions about coding. One point is given for each correct answer.  If a question is answered incorrectly, three seconds are deducted from the remaining time.  When either the questions are finished or the time passes zero, the quiz stops and the final score is given.  The scores with user initials can then be stored on the high scores page.
>>>>>>> a87c22935ad56e53e6cdd3d747187017506d4675

## Completed

```
* A start page presents instructions, timer, a link to high scores page, and start button
* The start button presents questions card with answer buttons.  
* Button click triggers next question.
* Correct answers add points to score, incorrect ones deduct time from timer.
* Game end conditions are either questions finished or time passes zero.
* Option given to save score with initials. 
* Scores can be viewed on separate page with link to return to quiz.


## URL of Deployed Application

https://robynp108.github.io/Homework4/


## Screenshots of Start Page and High Score Page

![start](CodingQuizScreenshot.png)

![high score](HighScoresScreenshot.png)
```

