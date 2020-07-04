var quizQuestions = [
  {
      q: "what is a value of a Boolean?",
      questionChoices: ["hi", "0", "true", "string"],
      correct: "true",
  },
  {
      q: "An alert() has a similar format as which of the following?",
      questionChoices: ["array", "object", "property", "confirm"],
      correct: "confirm",
  },
  {
      q: "Which JavaScript Values check for truthiness?",
      questionChoices: ["false", "===", "0", "null"],
      correct: "===",
  },
  {
      q: "Which is an editor?",
      questionChoices: ["newsMan", "scissors", "VS Code", "none of these"],
      correct: "VS Code",
  },
]

//will write the answer after an option is picked
var answer = document.getElementById("rightAnswer")

//appends the answers to the buttons on the card
var aOne = document.getElementById("aOne")
var aTwo = document.getElementById("aTwo")
var aThree = document.getElementById("aThree")
var aFour = document.getElementById("aFour")

//var to define my hideheader function
var head = document.getElementById("headerDiv")
var startBtn = document.querySelector(".startBtn")
var answers = document.querySelector(".answers")

//starts score and question counter

var score = document.getElementById("score")
var currScore = 0
var quizCounter = 0

//shortens code to keep functions and forloops clean when cycling through Q and A

var checkAnswer = document.getElementsByClassName("checkAnswer")

//creates my timer
var timer = document.getElementById("timer")
var timerCount = 10

//var declared to make quiz hidden until start button
var hide = document.getElementById("hideQuiz")
// shows the highScores at end of game
var highScore = document.getElementById("highScore")

function displayQuestions() {
  document.getElementById("questionDisplay").innerHTML = quizQuestions[0].q
}
function startScore() {
  
  score.textContent = "Current score: " + currScore + ""
  console.log(currScore);
}

function displayButtons() {
  aOne.textContent = quizQuestions[quizCounter].questionChoices[0]
  aTwo.textContent = quizQuestions[quizCounter].questionChoices[1]
  aThree.textContent = quizQuestions[quizCounter].questionChoices[2]
  aFour.textContent = quizQuestions[quizCounter].questionChoices[3]
}

//puts the the timer on the screen and makes it run
// needs to make it stop!
function startTimer() {
  timer.textContent = "Time Left: " + timerCount + " seconds remaining."
  setInterval(function () {
      timer.textContent = "Time Left: " + timerCount + " seconds remaining."
      if (timerCount !== 0) {
          timerCount--;
      } else {
        timerCount = 0
      }
  }, 1000)
}

function hideHeader() {
  head.style.display = "none"
}

function showQuizCard() {
  hide.style.display = "block"
}

function showScore(){
  highScore.style.display = "none"
  hide.style.display= "none"
}
showScore()
//entry point
// $(document).ready(function () {
//     console.log("START!")
function check() {
  var userAnswer = $(this).text()
  console.log(`User answer to first question: ${userAnswer}`)
  var correctAnswer = quizQuestions[quizCounter].correct
  console.log(`Correct answer of CURRENT question: ${correctAnswer}`)
    quizCounter++
      questionDisplay.textContent = quizQuestions[quizCounter].q
 displayButtons()
      if (userAnswer === correctAnswer && quizCounter !== 3 && timerCount !== 0){
      startScore()
      timerCount++
      rightAnswer.textContent = "That is Correct!"
    } else if (userAnswer !== correctAnswer && quizCounter !== 3 && timerCount !== 0) {
      timerCount--
      rightAnswer.textContent = "Incorrect"
    } else {
      alert("finished! with " + timerCount + " seconds remaining")
      prompt("please enter your initials here for your high Score: ")
      showScore()
  }
 }

//startbutton click to hide header to start quiz
startBtn.addEventListener("click", function () {
  //calling the function

  hideHeader()
  startScore()
  startTimer()
  showQuizCard()
  displayQuestions()
  displayButtons()
})

//events
$(".answers").on("click", check)
console.log("working!");
