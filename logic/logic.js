
//Key Containers to Hide or Unhide Through Process
var welcomeScreenContainer = document.querySelector("#welcomeScreenContainer");
var quizContentContainer = document.querySelector("#quizContentContainer");
var initaialsEntryContainer = document.querySelector("#initialsEntryContainer");
var endingScreenContainer = document.querySelector("#endingScreenContainer");

//Define Elemenets I want To Manipulate in HTML and Retrieve Them using QuerySelector Method
var getHighScore = document.querySelector("#getHighScore");
var startButton = document.querySelector("#startButton"); 
var countdownClock = document.querySelector("#countdownClock");
var activeQuizQuestion = document.querySelector("#activeQuizQuestion");
var finalScore = document.querySelector("#displayScore");

//Define Key Variables I will Define In The Script
var timer;
var timerCount;
var isCorrectOption;
var userScore;

//Define Quiz Questions (Define As Objects In Arra With Question & Answer Properties Somehow?)

//Define Event Listners and Handlers to Trigger Important Functions
document.addEventListener("onload", init); //this is not working
startButton.addEventListener("click", startQuiz);


//Define Program Logic & Sequence

    //When Page Is initialized....(Have to call this function when page is initialized)
    function init() {
        console.log("Page Loaded and Init() Function Called")
    }

    //When Get High Scores Button is Clicked...

        //Retrieve High Scores and Initials From Local Storage (as an string converted back to object using JSON.parse method)...

        //Display the Initials and High Scores to the User...


    //When Start Button Is Clicked, run start game function and the startCountdown Function....
    function startQuiz() {
        console.log("Start Button Clicked and startQuiz() Function Called");

        //Shuffle the Questions Order

        //Hide The welcomeScreenContainer Screen & Display The Quiz Div
        welcomeScreenContainer.classList.add("d-none");
        console.log("Welcome Screen Container Hidden")

        //Show the quizContentContainer
        quizContentContainer.classList.remove("d-none");
        console.log("Quiz Content Container Displayed")

        //Display First Quiz Question and Answer Choices (Make Re-Usable Function When Submit Is Clicked)

            //Pick a question (that has not been displayed this session)...

            //Display the Question With The Answer Options

        //Define the startCountdown function locally within the startQuiz function...
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

        //Call the startCountdown function defined above so that it runs
        return startCountdown();
        
        
    }

        

    //When Submit Answer Button Is Clicked....

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
