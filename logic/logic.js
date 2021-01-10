
//Key Containers to Hide or Unhide Through Process
var welcomeScreenContainer = document.querySelector("#welcomeScreenContainer");
var quizContentContainer = document.querySelector("#quizContentContainer");
var initaialsEntryContainer = document.querySelector("#initialsEntryContainer");
var endingScreenContainer = document.querySelector("#endingScreenContainer");

//Define Elemenets I want To Manipulate in HTML and Retrieve Them using QuerySelector Method, Then assign their value to a variable for use in script
var getHighScore = document.querySelector("#getHighScore");
var startButton = document.querySelector("#startButton"); 
var countdownClock = document.querySelector("#countdownClock");
var activeQuizQuestion = document.querySelector("#activeQuizQuestion");
var activeOption1 = document.querySelector("#activeOption1");
var activeOption2 = document.querySelector("#activeOption2");
var activeOption3 = document.querySelector("#activeOption3");
var activeOption4 = document.querySelector("#activeOption4");
var finalScore = document.querySelector("#displayScore");

//Define Quiz Questions Array And Related Quiz Variables
var quizQuestions = [
    {
        questionName: "Question 1",
        questionText: "What do you call a variable that can only have a true or false value?",
        optionA: "Array",
        optionB: "Bi-Conditional Variable",
        optionC: "Cat",
        correctOption: "Boolean"
    },
    {
        questionName: "Question 2",
        questionText: "Bootsrap is...",
        optionA: "A library of javascript",
        optionB: "A Type of CSS Selector",
        optionC: "A window method to replace certain CSS classes",
        correctOption: "a library of CSS accessible via use of pre-defined classes" 
    },
    {
        questionName: "Question 3",
        questionText: "Jquery is...",
        optionA: "A library of javascript",
        optionB: "A Type of CSS Selector",
        optionC: "A window method to replace certain CSS classes",
        correctOption: "a library of CSS accessible via use of pre-defined classes" 
    },
    {
        questionName: "Question 4",
        questionText: "What is an Array",
        optionA: "A library of javascript",
        optionB: "A Type of CSS Selector",
        optionC: "A window method to replace certain CSS classes",
        correctOption: "a library of CSS accessible via use of pre-defined classes" 
    },
    {
        questionName: "Question 5",
        questionText: "What is an Array",
        optionA: "A variable containing a single value",
        optionB: "A Type of CSS Selector",
        optionC: "An ordered list that is displayed on an HTML page",
        correctOption: "A variable containing multiple values" 
    },
]

var lastQuestionIndex = quizQuestions.length-1;
var runningQuestionIndex = 0;

//Define Event Listners and Handlers to Trigger Important Functions
startButton.addEventListener("click", startQuiz);

//Define Program Logic & Sequence

    //When Page Is initialized...log a message to the console its initialized
    function init() {
        console.log("Page Loaded and Init() Function Called")
    }

    //When Get High Scores Button is Clicked...

        //Retrieve High Scores and Initials From Local Storage (as an string converted back to object using JSON.parse method)...

        //Display the Initials and High Scores to the User...


    //When Start Button Is Clicked, Start The Quiz (Display Questions Div HTML, Start Countdown, Display First Question & Answers)....
    function startQuiz() {
        console.log("Start Button Clicked and startQuiz() Function Called");

        //Shuffle the Questions Order? |REVISIT|

        //Hide The welcomeScreenContainer Screen & Display The Quiz Div..
        welcomeScreenContainer.classList.add("d-none");
        console.log("Welcome Screen Container Hidden")

        //Show the quizContentContainer..
        quizContentContainer.classList.remove("d-none");
        console.log("Quiz Content Container Displayed")

        //Start The Countdown Clock timer..
            //Call the startCountdown function defined below 
            return startCountdown();

            //startCoundown function..
            function startCountdown(){
                console.log("Nested startCountdown() function started")
                var timerCount = 3;
                countdownClock.textContent = timerCount;

                //Use set Interval Method to call function to execute every 1000 milleseconds
                var timeInterval = setInterval(function () {
                    //As long as time is left on the clock...
                    if (timerCount != 0) {
                        //Show remaining seconds on countdown clock...
                        countdownClock.textContent = timerCount;
                        //Decrement the Timer Count by 1...
                        timerCount--;
                    } else {
                        //Once time gets to zero (its equal to 0), display 0
                        countdownClock.textContent = "";
                        //clear the interval with the clearInterval method
                        clearInterval(timeInterval);
                        //and alert the user that the time has expired..
                        alert ("Time's Up!");
                    }
                }, 1000)
            }

        //Render First Quiz Question and Answer Choices (Make Re-Usable Function When Submit Is Clicked)
        function renderInitialQuizQuestion (){
            var q = quizQuestions[runningQuestionIndex];
            activeQuizQuestion.textContent = q.questionText;
            activeOption1.textContent = q.optionA;
            activeOption2.textContent = q.optionB;
            activeOption3.textContent = q.optionC;
            activeOption4.textContent = q.correctOption;
        }
    }


    //Once Quiz is Started, Upon Click of Submit Answer Button....

        //Compare submitted option to correct option for question

        //If submitted option is correct...

            //Display Text "Correct!"..

            //Up The Score Count...

            //Advance to the Next Question
        
        //If submitted option is incorrect

            //Display the Text "NOPE!"...

            //Reduced the Score Count...

            //Decrease Timer By "10" Seconds...

            //Advance to Next Question

    //When game is finished (timer expires OR question sequence completes)...

        //Present High Score From That Round to The User

        //Collect the Users Initials using a form or other input means...

        //Present a Submit Score Button to the User
    
        //When Submit Score Button is Pressed

            //store the initials and high score locally as an object using JSON.stringify method...

            //Display the latest list of initials and high scores...

            //update the screen with new options for the user Go-Back and Clear High-Scores

                //If Go back is Selected, Return to Start of Quiz

                //If Clear High Scores is Selected...

                    //Clear local storage

                    //Return to Start of Quiz
