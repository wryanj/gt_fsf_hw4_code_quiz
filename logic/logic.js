
//Key Containers to Hide or Unhide Through Process
var welcomeScreenContainer = document.querySelector("welcomeScreenContainer");
var quizContentContainer = document.querySelector("quizContentContainer");
var initaialsEntryContainer = document.querySelector("initialsEntryContainer");
var endingScreenContainer = document.querySelector("endingScreenContainer");

//Define Elemenets I want To Manipulate in HTML and Retrieve Them using QuerySelector Method
var getHighScore = document.querySelector("#getHighScore");
var startButton = document.querySelector("#startButton"); //Need to Create Start Button With ID Hidden Somehow
var countdownClock = document.querySelector("#countdownClock");
var activeQuizQuestion = document.querySelector("#activeQuizQuestion");
var finalScore = document.querySelector("#displayScore");

//Define Key Variables I will Define In The Script
var timer;
var timerCount;
var isCorrectOption;
var userScore;

//Define Event Listners and Handlers to Trigger Important Functions
getHighScore.addEventListener("click", displayHighScore) //Need to define display high score function
startButton.addEventListener("click", startQuiz);


//Define Quiz Questions (Define As Objects In Arra With Question & Answer Properties Somehow?)
var questionsArray,[];


//Define Logic For Executing Script

    //When Page Is initialized....
    function init() {

        //Populate Countdown Clock

    }

    //When Get High Scores Button is Clicked...

        //Retrieve High Scores and Initials From Local Storage (as an string converted back to object using JSON.parse method)...

        //Display the Initials and High Scores to the User...

    //When Start Button Is Clicked, run start game function....
    function startQuiz() {
        console.log("Started");

        //Start Countdown Clock

        //Shuffle the Questions Order

        //Hide The Welcome Screen and Button By Removing adding the d-none bootstrap class to that row https://stackoverflow.com/questions/195951/how-can-i-change-an-elements-class-with-javascript

        //Display the row with the questions and answers by removing the d-none bootstrap class for that row

        //Display Rist Question With Options & Submit Button (Make Re-Usable Function When Submit Is Clicked)

            //Pick a question (that has not been displayed this session)...

            //Display the Question With The Answer Options

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
