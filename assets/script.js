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

//defines my timer 
var timer = document.getElementById("timer")
var timerCount = 5


//puts the the timer on the screen  
function startTimer(){
//puts the timer on the page and will count down when math given
timer.textContent = "Time Left: " + timerCount + " minutes remaining"
timerCount--;

}



// 3 steps for making an element on HTML by JS
//make the element  .createElementbyid  example var name = document.createElement("tag");
//put content into  .textContent  example newVarName.textContent = parameter in function;
//append it to the page  .append example newVarName.appendChild(newVarName)
//


//questions
//presented with question and multiple choice answers
//when you answer a question you are presented with new answer
//when you answer a question it will tell you if you got it right or wrong
//when all the questions are answered the game is over
//create an object array with questions and answers



// score
// keep score throughout the quiz
// tell high score allow user to put in initials
// keep score in local storage

//end page
// tells game over and allows you to put in your initials and view high score
