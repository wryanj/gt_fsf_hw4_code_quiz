
//Declare Global Variables I Will Use in the Program
var timerCount;
var runningQuestionIndex = 0;
var selectedOption;
var scoreCount = 0;
var finalScoreCount;
var userInitials;
var highScoresArray; //Exploring how to use this

//Define Variables For Key Containers to Hide or Unhide Through The Program
var welcomeScreenContainer = document.querySelector("#welcomeScreenContainer");
var quizContentContainer = document.querySelector("#quizContentContainer");
var submissionResultContainer = document.querySelector("#submissionResultContainer");
var logQuizScoreContainer = document.querySelector("#logQuizScoreContainer");
var endingScreenContainer = document.querySelector("#endingScreenContainer");

//Define Variables For Key Elemenets I Want to Reference Or Manipulate Through The Program
var getHighScoresButton = document.querySelector("#getHighScore");
var startQuizButton = document.querySelector("#startQuizButton");
var submitAnswerButton = document.querySelector("#submitAnswerButton");
var countdownClock = document.querySelector("#countdownClock");
var activeQuizQuestion = document.querySelector("#activeQuizQuestion");
var activeOption1 = document.querySelector("#activeOption1");
var activeOption1Value = document.querySelector("#radio1");
var activeOption2 = document.querySelector("#activeOption2");
var activeOption2Value = document.querySelector("#radio2");
var activeOption3 = document.querySelector("#activeOption3");
var activeOption3Value = document.querySelector("#radio3");
var activeOption4 = document.querySelector("#activeOption4");
var activeOption4Value = document.querySelector("#radio4");
var radioQuestions = document.querySelectorAll(".form-check-input");
var submissionResultText = document.querySelector("#submissionResultText");
var finalScore = document.querySelector("#finalScore");
var initialsInput = document.querySelector("#initialsInput");
var submitScoreButton = document.querySelector("#submitScoreButton");
var highScoresList = document.querySelector("#highScoresList");
var goBackButton = document.querySelector("#goBackButton");
var clearHighScoresButton = document.querySelector("#clearHighScoresButton");


//Define Array For Quiz Question Objects I Will Use In The Program
var quizQuestions = [
    {
        questionName: "Question 0",
        questionText: "What do you call a variable that can only have a true or false value?",
        optionA: "An Array",
        optionB: "A Boolean",
        optionC: "A Bi-Conditional Variable",
        optionD: "A Conditonal Variable",
        correctOption: "A Boolean"
    },
    {
        questionName: "Question 1",
        questionText: "What is Bootstrap?",
        optionA: "A library of javascript",
        optionB: "A type of CSS Selector",
        optionC: "A window method used to replace certain CSS classes",
        optionD: "A library of CSS code accessible via use of pre-defined classes" ,
        correctOption: "A library of CSS code accessible via use of pre-defined classes" 
    },
    {
        questionName: "Question 2",
        questionText: "What is Jquery?",
        optionA: "A library of javascript",
        optionB: "A type of CSS Selector",
        optionC: "A window method to replace certain CSS classes",
        optionD: "A window method used to request data from a database" ,
        correctOption: "A library of javascript" 
    },
    {
        questionName: "Question 3",
        questionText: "What is an Array",
        optionA: "A library of javascript",
        optionB: "A type of html element attribute",
        optionC: "A variable that contains multiple values stored to it",
        optionD: "Just another name for a javascript object ", 
        correctOption: "A variable that contains multiple values stored to it"
    },
    {
        questionName: "Question 4",
        questionText: "What type of loop allows you to run code until a certain increment is equal to or exceeding a defined limit?",
        optionA: "A Do While Loop",
        optionB: "A While Loop",
        optionC: "A For Loop",
        optionD: "An Until Loop",
        correctOption: "A For Loop" 
    }
]
   
//Define Event Listners and Handlers to Trigger Important Functions

    //Start Quiz Button
    startQuizButton.addEventListener("click", displayQuiz);
    startQuizButton.addEventListener("click", countdown);
    startQuizButton.addEventListener("click", renderQuizQuestion);

    //Submit Answer Button
    submitAnswerButton.addEventListener("click", checkAnswer);
    
    //Submit Score Button
    submitScoreButton.addEventListener("click", logQuizScore);

    //Get High Scores Button
    getHighScoresButton.addEventListener("click", displayHighScores);

    //Go Back Button
    goBackButton.addEventListener("click", goBack);

    //Clear High Scores Button
    clearHighScoresButton.addEventListener("click", clearHighScores);


//Define Program Logic & Key Functions

    //When Page Is initialized...log a message to the console its initialized. This is called via onload attribute in body elemenet of html
    function init() {
        console.log("Page loaded and init() function invoked")
    }

    //When Start Button Is Clicked, Start The Quiz (Display Questions Div HTML, Start Countdown)....
    function displayQuiz() {
        console.log("displayQuiz() function invoked");

        //Dispable the Get High Scores Button (so users cannot bring up this in the middle of the quiz)
        getHighScoresButton.disabled = true;

        //Hide The welcomeScreenContainer Screen & Display The Quiz Div..
        welcomeScreenContainer.classList.add("d-none");

        //Show the quizContentContainer..
        quizContentContainer.classList.remove("d-none");
    }
    
    //Start The Countdown Clock timer..
    function countdown(){
        console.log("countdown() function invoked")
        timerCount = 30;
        countdownClock.textContent = timerCount;
        
        //Use set Interval Method to call function to execute every 1000 milleseconds (Every 1 Second)
        var timeInterval = setInterval(function () {

            //If there is time left on the clock, and not all questions have been answered yet...
            if (timerCount > 0 && runningQuestionIndex < quizQuestions.length) {
                //Decrement the Timer Count by 1...
                timerCount--;
                //Show remaining seconds on countdown clock...
                countdownClock.textContent = timerCount;
                
            }
            //If there is NOT time left on the clock, or all the quiz questions have been answered, do one of two things depending on the condition that is false...
            else {
                //If all the questions HAVE been answered (running questions index is greater than or equal to the number of quiz questions)
                if (runningQuestionIndex >= quizQuestions.length) {
                    //clear the interval with the clearInterval method
                    clearInterval(timeInterval);
                    // Set an empty string to the value of the countdown field
                    countdownClock.textContent = "";
                    // alert the user they finished..
                    alert ("Congratulations! You finished before time expired! Click ok to log your score.");
                    // and call the function to calculate the final score and show the final score and gather intiials
                    calculateFinalScore();
                    presentFinalQuizScore();
                }
                //If they loose ten seconds for an icorrect answer, but they dont have 10 left to spare..
                else if (timerCount <= 0) {
                    timerCount=0;
                    countdownClock.textContent = timerCount;
                    clearInterval(timeInterval);
                    alert("You dont have 10 seconds left to lose! Game Over");
                    calculateFinalScore();
                    presentFinalQuizScore();
                }
                //If all the questions are not answered, but time has expired (meaning zero is not less than timercount anymore whic makes the original if statement false)
                else{
                    //clear the interval with the clearInterval method
                    clearInterval(timeInterval);
                    // Set an empty string to the value of the countdown field
                    countdownClock.textContent = "";
                    // alert the user that the time has expired..
                    alert ("Time's Up! Click ok to log your score.");
                    // and call the function to calculate final score and show the final score and gather intiials
                    calculateFinalScore();
                    presentFinalQuizScore();
                }
            }
        }, 1000)
    }
    

    //Once Quiz is Started, Render First Quiz Question and Answer Choices (Make Re-Usable Function When Submit Is Clicked)
    function renderQuizQuestion (){
        console.log("renderQuizQuestion() functoin invoked");

        //Make Sure submissionResultContainer is hidden
        submissionResultContainer.classList.add("d-none");
        
        //Clear old checked properties
        for (i = 0, length = radioQuestions.length; i < length; i++) {
            radioQuestions[i].checked = false;
         } 

        //Populate the currentQuestion and choices to the form text choices field
        activeQuizQuestion.textContent = (quizQuestions[runningQuestionIndex].questionText);
        activeOption1.textContent = (quizQuestions[runningQuestionIndex].optionA);
        activeOption1Value.setAttribute("value", quizQuestions[runningQuestionIndex].optionA);
        activeOption2.textContent = (quizQuestions[runningQuestionIndex].optionB);
        activeOption2Value.setAttribute("value", quizQuestions[runningQuestionIndex].optionB);
        activeOption3.textContent = (quizQuestions[runningQuestionIndex].optionC);
        activeOption3Value.setAttribute("value", quizQuestions[runningQuestionIndex].optionC);
        activeOption4.textContent = (quizQuestions[runningQuestionIndex].optionD);
        activeOption4Value.setAttribute("value", quizQuestions[runningQuestionIndex].optionD);
    }

    //After first question is displayed, Upon Click of Submit Answer Button....

    //Check if answer is correct by
    function checkAnswer(){
        console.log("checkAnswer() function invoked")

        //Get the value of the answer

            //If 'any' radio button is checked..., run through each option to detect the selected answer...
            if (activeOption1Value.checked===true || activeOption2Value.checked===true || activeOption3Value.checked===true || activeOption4Value.checked===true) {
                for (i = 0, length = radioQuestions.length; i < length; i++) {
                    //if the radio question is checked...
                    if (radioQuestions[i].checked) {
                        //set the selectedOption variable value equal to the value of the selected radio button...
                        var selectedOption = radioQuestions[i].value;
                        //and break the loop
                        break;
                    }
                }   
            } 

            //If 'no' radio buttons are selected, alert the user to make a selection and have them
            else {
                alert("Please select an option");
                return;
            }

        //If submitted option is correct...  
        if (selectedOption === quizQuestions[runningQuestionIndex].correctOption) {

            //Display green text "Correct"!

                //Show the submissionResultContainer
                submissionResultContainer.classList.remove("d-none");

                //Assign my .correct class to the p elemenet in that container (and remove incorrect class if its present)
                submissionResultText.classList.remove("incorrect");
                submissionResultText.classList.add("correct");
                
                //Make the text content say "correct!"
                submissionResultText.textContent = "Correct! (+25pts)";

            //Up the score count..
                scoreCount = scoreCount + 25;

            //Render the next question (if questions remain to be answered)..

                // Up the running question index by 1...
                runningQuestionIndex++;

                if (runningQuestionIndex < quizQuestions.length){
                    // Wait 1 Second and call the render quiz question function again 
                     return setTimeout(renderQuizQuestion, 1000);
                }
        }

        //If submitted option is not correct...
        else {

            //Display red text "Incorrect"

                //Show the submissionResultContainer
                submissionResultContainer.classList.remove("d-none");

                //Assign my .incorrect class to the p elemenet in that container (and remove my .correct class if its present)
                submissionResultText.classList.remove("correct");
                submissionResultText.classList.add("incorrect");
                
                //Make the text content say "Incorrect"
                submissionResultText.textContent = "Incorrect (-50pts, -10s)";

            //Decrease the score count..
                scoreCount = scoreCount - 50;

            //Decrement the Timer 10 Seconds
                timerCount = timerCount-10;

            //Render the next question..

                // Up the running question index by 1...
                runningQuestionIndex++;

                // Wait 1 Second and call the render quiz question function again 
                setTimeout(renderQuizQuestion, 1000);
        }  
    }

    //When game is finished (timer expires OR question sequence completes) calculate score and present final score and input form for user initials

    function calculateFinalScore(){
        console.log("calculateFinalScore() functoin invoked");

        //Create the Final Score For The User, Which is the Score Count + The remaining seconds for high score variation
        finalScoreCount = scoreCount+timerCount;
        console.log("Raw Score = " + scoreCount);
        console.log("Bonus points for time remaining = " + timerCount);
        console.log("Final Score = " + finalScoreCount);
    }

    function presentFinalQuizScore() {
        console.log ("presentFinalQuizScore() function invoked");

        //Hide the quizContentContainer and the submissionResultContainerand Display the logQuizScoreContainer
        quizContentContainer.classList.add("d-none");
        submissionResultContainer.classList.add("d-none");
        logQuizScoreContainer.classList.remove("d-none");

        //Present the users score to them
        finalScore.textContent = finalScoreCount;
    }

    //Upon click of the submit Submit Score Button...

        // Capture their initials and score and store it locally
        function logQuizScore(){
            console.log("logQuizScore() function invoked");

           //Log  initials to a variable and validate its not blank
            var rawUserInitials = initialsInput.value;
            userInitials = rawUserInitials.toUpperCase();
            console.log("userInitials value is equal to " + userInitials);

            //If userInitials is not populated, alert the user let them try again
            if (userInitials === "") {
                alert ("Please enter your initals");
                presentFinalQuizScore();
            }
            //If userInitials is not equal to 3 characters, alert the user and let them try again

            else if (userInitials.length != 3) {
                alert("Please ensure you enter three letters for you initials");
                presentFinalQuizScore();
            }

            //If user initials are not blank and are equal to three characters (else), log the score and call display High Score Function
            else {
                //Store the initials and score locally, and then reset the variable values for next round..

                     //Save user entered initials and user score (current scorecount) using "storedScore" as key
                     localStorage.setItem("storedScore", userInitials + " : " + finalScoreCount);

                     //Once saved, reset the variable for user initials to an empty string and scorecount back to 0...
                    userInitials="";
                     scoreCount=0;
            
                 // Call the displayHighScores Global Function
                displayHighScores();
            }
        }

        //Upon completion of the logQuizScore functoin (after submit score button pressed) OR upon press of the Get High Scores Button...
        function displayHighScores(){
            console.log("displayHighScores() function invoked");

            //Get The Latest list of stored high scores..
            var storedScores = localStorage.getItem("storedScore");
            console.log("Retrieved Scores Are " + storedScores);
 
            //Create a new div element as a variable
            var newScoreE = document.createElement("div");
 
            //Assign the innerHTML of the newScoreE we just made to be the retrieved initials and score..
            newScoreE.innerHTML = storedScores;
                         
            //Append it as a child to the Div I have in my HTML for holding high scores list
            highScoresList.appendChild(newScoreE);

            //Hide the logQuizScore container and display the endingScreenContainer (If clicked From Start, Hide the Welcome Screen Container)
            logQuizScoreContainer.classList.add("d-none");
            welcomeScreenContainer.classList.add("d-none");
            endingScreenContainer.classList.remove("d-none");

            //Disable Get High Scores Button So It Cannot pull the same stuff multiple times
            getHighScoresButton.disabled = true;
        }

    // When The Go Back Button is Pressed...Re-load the page to take you to start screen (onload html body attribute triggers init function)
    function goBack() {
        console.log("goBack() function invoked")

        //Hide the current screen and unhide the welcomeContainerScreen for smooth feeling transition
        endingScreenContainer.classList.add("d-none");
        welcomeScreenContainer.classList.remove("d-none");

        //Then reload to reset the old questions and stuff
        location.reload();
    }
    
    // When the Clear high Scores Button is Pressed..
    function clearHighScores() {
        console.log("clearHighScores() function invoked");

        //Clear local storage on window..
        localStorage.clear();

        //Reset the innerHTML of the highSCo
        highScoresList.innerHTML="";
    }




   



       





    


            
    