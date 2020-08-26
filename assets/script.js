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
console.log(quizCounter);
//shortens code to keep functions and forloops clean when cycling through Q and A

var checkAnswer = document.getElementsByClassName("checkAnswer")

//creates my timer
var timer = document.getElementById("timer")
var timerCount = 75

//var declared to make quiz hidden until start button
var hide = document.getElementById("hideQuiz")
// shows the highScores at end of game
var highScore = document.getElementById("highScore")

function displayQuestions() {
  document.getElementById("questionDisplay").innerHTML = quizQuestions[quizCounter].q
}
function startScore() {
  
  score.textContent = "Current score: " + currScore + ""
  // console.log(currScore);
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
      if (timerCount >= 0) {
        timer.textContent = "Time Left: " + timerCount + " seconds remaining."
      
      }
      if (timerCount <= 0){
        timer.textContent = "Your time is up!"
      }
       else {
        timerCount--;
     }
  }, 700)
}

function hideHeader() {
  head.style.display = "none"
}

function showHeader(){
  head.style.display = "block"
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
   

   var question = quizQuestions[quizCounter]
  var questionTitle = question.q
 questionDisplay.textContent = questionTitle;

   if (quizCounter === 3) {

       endQuiz();
     
     }


 if(userAnswer !== correctAnswer ) {
 
  rightAnswer.textContent = "Incorrect"
  timerCount--
  quizCounter++
  displayQuestions()
  displayButtons()
 
} 

 
if (userAnswer === correctAnswer ){
       currScore++;
     rightAnswer.textContent = "That is Correct!"
       startScore();
      
       quizCounter++;
        displayQuestions()
       displayButtons();
       
    }
 
     

}



    console.log(quizCounter);



function endQuiz(){
 
 showScore()
  
 alert("finished! with " + currScore + " points " + " and " + timerCount + " seconds remaining")
    prompt("Please enter your name here for your high Score: ")
   
  showHeader();

};


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
