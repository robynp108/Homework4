# Homework4
# 04 Web APIs: Code Quiz

As you proceed in your career as a web developer, you will probably be asked to complete a coding assessment, which is typically a combination of multiple-choice questions and interactive challenges. Build a timed code quiz with multiple-choice questions. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

## User Story

```
AS A coding bootcamp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

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
* localStorage.setItem


```

The following animation demonstrates the application functionality:

![code quiz](./Assets/04-web-apis-homework-demo.gif)

### Review

You are required to submit the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
