//start page
//tells the rules
//has start button and title
//makes the current screen disappear when you hit start button

//function definition
function hideHeader() {
   head.style.display = "none"
   
}
//var to define my hideheader function 
var head = document.getElementById("headerDiv")
var startBtn = document.querySelector(".startBtn")

//startbutton click to hide header to start quiz
startBtn.addEventListener("click", function(){
//calling the function
   hideHeader()
   startTimer()
})

//another example of how to do an add.even listener
// startBtn.addEventListener("click", hideHeader) 


//timer
//start timer when you hit the start button and give questions
//timer counts down while taking quiz
// timer subtracts time when wrong answer is pressed
//when the timer reaches 0 the game is over

//creates my timer 
var timer = document.getElementById("timer")
var timerCount = 10

//puts the the timer on the screen and makes it run  
// needs to make it stop! 
function startTimer(){
timer.textContent = "Time Left: " + timerCount + " seconds remaining."
setInterval(function(){
    timerCount--; 
    timer.textContent = "Time Left: " + timerCount + " seconds remaining."
   //if else statement to stop timer if answers question or get to 0
},1000)
}


//questions
//presented with question and multiple choice answers
//when you answer a question you are presented with new answer
//when you answer a question it will tell you if you got it right or wrong
//when all the questions are answered the game is over
//create an object array with questions and answers

//quizquestions 
var quizQuestions = [
    { q: "what is not an example of a string?",
       questionChoices: ["hi", "0", "true", "string"],
        correct: "hi"},
    { q: "An alert() has a similar format as to which of the following?",
        questionChoices: ["array", "object", "property", "confirm"],
        correct: "confirm"},
    { q: "Which JavaScript Values are true",
        questionChoices: ["false", "===", "0", "null"],
    correct: "==="},
  ]


var questions = document.getElementById("questions")



function displayQuestions() {
   questions.textContent = quizQuestions[0].q
   
}
displayQuestions()

// 3 steps for making an element on HTML by JS
//make the element  .createElementbyid  example var name = document.createElement("tag");
//put content into  .textContent  example newVarName.textContent = parameter in function;
//append it to the page  .append example newVarName.appendChild(newVarName)
//





// score
// keep score throughout the quiz
// tell high score allow user to put in initials
// keep score in local storage

//end page
// tells game over and allows you to put in your initials and view high score
