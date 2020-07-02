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
  {
    q: "Which is an editor?",
    questionChoices: ["newsMan", "scissors", "VS Code", "none of these"],
    correct: "VS Code",
  }
];
// $(document).ready(function(){
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
var checkAnswer = document.getElementsByClassName("checkAnswer")
console.log(qAndA1)




 
  function displayQuestions(){

   document.getElementById("questionDisplay").innerHTML = quizQuestions[0].q;

  }
    

  //creates my timer
var timer = document.getElementById("timer");
var timerCount = 10;

//puts the the timer on the screen and makes it run
// needs to make it stop!
function startTimer() {
  timer.textContent = "Time Left: " + timerCount + " seconds remaining.";
  setInterval(function () {
    
    timer.textContent = "Time Left: " + timerCount + " seconds remaining.";
    if (timerCount !== 0) {
      timerCount--;
    }
    //  else {
    //   alert("Time is up!")
    // }
    
  }, 1000);
}

  //   for (let i = 0; i < quizQuestions.q.length; i++) {
      
      
    
  //     button(aOne);
  // //     button(aTwo);
  // //     button(aThree);
  // //     button4();
    
  // //   }
    
    
  
  // // }

  // function button(){
     
  //      aOne.innerHTML = quizQuestions[0].questionChoices[0]
  //      aOne.innerHTML = quizQuestions[1].questionChoices[0]
  //      aOne.innerHTML = quizQuestions[2].questionChoices[0]
  //      aOne.innerHTML = quizQuestions[3].questionChoices[0]

  //   };
    
  // button()


  // function button1(){
     
  //      aTwo.innerHTML = quizQuestions[0].questionChoices[1]
  //      aTwo.innerHTML = quizQuestions[1].questionChoices[1]
  //      aTwo.innerHTML = quizQuestions[2].questionChoices[1]
  //      aTwo.innerHTML = quizQuestions[3].questionChoices[1]

  //   };
    
  
  // button1()

  // function button2(){
     
  //      aThree.innerHTML = quizQuestions[0].questionChoices[2]
  //      aThree.innerHTML = quizQuestions[1].questionChoices[2]
  //      aThree.innerHTML = quizQuestions[2].questionChoices[2]
  //      aThree.innerHTML = quizQuestions[3].questionChoices[2]

  //   };
    
  
  // button2()

  // function button3(){
     
  //      aFour.innerHTML = quizQuestions[0].questionChoices[3]
  //      aFour.innerHTML = quizQuestions[1].questionChoices[3]
  //      aFour.innerHTML = quizQuestions[2].questionChoices[3]
  //      aFour.innerHTML = quizQuestions[3].questionChoices[3]

  //   };
    

  // button3()






// function displayAnswers() {
//   qAndA1 += i++;
//   qAndA2 += i++
//   qAndA3 += i++
//   qAndA4

// }
// console.log(qAndA2)





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
  displayQuestions();
  // displayButtons();
});

//var declared to make quiz hidden until start button
var hide = document.getElementById("hideQuiz")
function hideQuizCard() {
    hide.style.display = "block"
}


// //ties the btns into a div to be displayed onclick of startbutton
// var displayBtnDiv = document.getElementById("displayBtnDiv")

// // displays buttons upon start button click
// function displayButtons() {
//     displayBtnDiv.style.display = "block"

// }



//another example of how to do an add.even listener
// startBtn.addEventListener("click", hideHeader)

//timer
//start timer when you hit the start button and give questions
//timer counts down while taking quiz
// timer subtracts time when wrong answer is pressed
//when the timer reaches 0 the game is over


//questions
//presented with question and multiple choice answers
//when you answer a question you are presented with new answer
//when you answer a question it will tell you if you got it right or wrong
//when all the questions are answered the game is over
//create an object array with questions and answers

//quizquestions









// //var to keep score
// console.log(qAndA1);


// function displayQuestions() {
  
// questions.innerHTML.quizQuestions


// }

// displayQuestions()









//appends the questions to the card header


// function checkAnswer () {



//   var score = 0;
//  if (checkAnswer !== quizQuestions[0].correct || checkAnswer !== quizQuestions[1].correct || checkAnswer !== quizQuestions[2].correct || checkAnswer !== quizQuestions[3].correct ) {
   
//    rightAnswer.textContent = "Incorrect";

//  } else {
 
//       score++;
//     answer.textContent = "Correct!";
//     timer++;
//  }
  

   


  
    
    
//     };
 
//  checkAnswer();


// displayQuestions()



//for loop to go through questions and change score and notify correct answer

    // if (answer === quizQuestions[i].correct){
    //     score++;
    //     rightAnswer.textContent = "Correct!"
    // }

  
// aOne.addEventListener("click", function() {
//     if (aOne === correct) {
//         score++;
//         
        
//     } else {
//         timer--;
//         
//     }
// })
// }
// aTwo.addEventListener("click", function() {
//     if (aOne === qAndA1) {
//         score++;
//         answer.textContent = "Correct!"
        
//     } else {
//         timer--;
//         answer.textContent = "Incorrect"
//     }
// })

// aThree.addEventListener("click", function() {
//     if (aOne === qAndA1) {
//         score++;
//         answer.textContent = "Correct!"
        
//     } else {
//         timer--;
//         answer.textContent = "Incorrect"
//     }
// })
// aFour.addEventListener("click", function() {
//     if (aOne === qAndA1) {
//         score++;
//         answer.textContent = "Correct!"
        
//     } else {
//         timer--;
//         answer.textContent = "Incorrect"
//     }
// })

// document.addEventListener("click", function(event) {
//   console.log(event.target.textContent);
  
//   if (event.target.textContent === correct  ) {
//     console.log(event.target.textContent);
    
//   }
// });



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
