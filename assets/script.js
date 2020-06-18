//start page
//tells the rules
//has start button and title
//makes the current screen disappear when you hit start button

//function definition
function hideHeader() {
  head.style.display = "none";
  
}
//var to define my hideheader function
var head = document.getElementById("headerDiv");
var startBtn = document.querySelector(".startBtn");

//startbutton click to hide header to start quiz
startBtn.addEventListener("click", function () {
  //calling the function
  hideHeader();
  startTimer();
  hideQuizCard();
//   displayQuestions();
//   displayButtons();
});

//var declared to make quiz hidden until start button
var hide = document.getElementById("hideQuiz")
function hideQuizCard() {
    hide.style.display = "block"
}


// //ties the btns into a div to be displayed onclick of startbutton
// var displayBtnDiv = document.getElementById("displayBtnDiv")

// // displays buttons upon start button click
function displayButtons() {
    displayBtnDiv.style.display = "block"

}

function displayQuestions() {
    questions.textContent = quizQuestions[i].q;
   i++;
 }

//another example of how to do an add.even listener
// startBtn.addEventListener("click", hideHeader)

//timer
//start timer when you hit the start button and give questions
//timer counts down while taking quiz
// timer subtracts time when wrong answer is pressed
//when the timer reaches 0 the game is over

//creates my timer
var timer = document.getElementById("timer");
var timerCount = 10;

//puts the the timer on the screen and makes it run
// needs to make it stop!
function startTimer() {
  timer.textContent = "Time Left: " + timerCount + " seconds remaining.";
  setInterval(function () {
    timerCount--;
    timer.textContent = "Time Left: " + timerCount + " seconds remaining.";
    //if else statement to stop timer if answers question or get to 0
  }, 1000);
}

//questions
//presented with question and multiple choice answers
//when you answer a question you are presented with new answer
//when you answer a question it will tell you if you got it right or wrong
//when all the questions are answered the game is over
//create an object array with questions and answers

//quizquestions
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
    q: "Which JavaScript Values are true?",
    questionChoices: ["false", "===", "0", "null"],
    correct: "===",
  },
];

//appends the questions to the card header
var questions = document.getElementById("questions")
//will write the answer after an option is picked
var answer = document.getElementById("rightAnswer")
//appends the answers to the buttons on the card
var aOne = document.getElementById("aOne");
var aTwo = document.getElementById("aTwo");
var aThree = document.getElementById("aThree");
var aFour = document.getElementById("aFour");
//shortens code to keep functions and forloops clean when cycling through Q and A
var qAndA1 = (aOne.textContent = quizQuestions[0].questionChoices[0]);
var qAndA2 = (aTwo.textContent = quizQuestions[0].questionChoices[1]);
var qAndA3 = (aThree.textContent = quizQuestions[0].questionChoices[2]);
var qAndA4 = (aFour.textContent = quizQuestions[0].questionChoices[3]);


//var to keep score
var score = 0;
//for loop to go through questions and change score and notify correct answer
for (var i=0; i< quizQuestions.length; i++) {

    
    let correct = quizQuestions[i].correct

    questions.textContent = quizQuestions[i].q;
    if (answer === quizQuestions[i].correct){
        score++;
        rightAnswer.textContent = "Correct!"
    }


aOne.addEventListener("click", function() {
    if (aOne === correct) {
        score++;
        answer.textContent = "Correct!"
        
    } else {
        timer--;
        answer.textContent = "Incorrect"
    }
})
}
aTwo.addEventListener("click", function() {
    if (aOne === qAndA1) {
        score++;
        answer.textContent = "Correct!"
        
    } else {
        timer--;
        answer.textContent = "Incorrect"
    }
})

aThree.addEventListener("click", function() {
    if (aOne === qAndA1) {
        score++;
        answer.textContent = "Correct!"
        
    } else {
        timer--;
        answer.textContent = "Incorrect"
    }
})
aFour.addEventListener("click", function() {
    if (aOne === qAndA1) {
        score++;
        answer.textContent = "Correct!"
        
    } else {
        timer--;
        answer.textContent = "Incorrect"
    }
})


// function displayAnswers() {
//   qAndA1 += i++;
//   qAndA2 += i++
//   qAndA3
//   qAndA4
// console.log(qAndA2)
// }


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
