
//Declare Global Variables
var timerCount;
var runningQuestionIndex = 0;
var selectedOption;

//Key Containers to Hide or Unhide Through Process
var welcomeScreenContainer = document.querySelector("#welcomeScreenContainer");
var quizContentContainer = document.querySelector("#quizContentContainer");
var submissionResultContainer = document.querySelector("#submissionResultContainer");
var initaialsEntryContainer = document.querySelector("#initialsEntryContainer");
var endingScreenContainer = document.querySelector("#endingScreenContainer");

//Define Elemenets I want To Reference or Manipulate in HTML and Retrieve Them using QuerySelector Method, Then assign their value to a variable for use in script
var getHighScore = document.querySelector("#getHighScore");
var startButton = document.querySelector("#startButton"); 
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
var finalScore = document.querySelector("#displayScore");
var scoreCount = 0;

//Define Quiz Questions Array
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

    //Start Button
        //When Start Button is Clicked, Start Quiz
        startButton.addEventListener("click", startQuiz);
        //When Start Button is Clicked, render quiz question for the first time
        startButton.addEventListener("click", renderQuizQuestion);

    //Submit Button
        //When Submit Answer Button is Clicked, Call The checkAnswer Function
        submitAnswerButton.addEventListener("click", checkAnswer);


//Define Program Logic & Sequence

    //When Page Is initialized...log a message to the console its initialized. This is called via onload attribute in body elemenet of html
    function init() {
        console.log("Page Loaded and Init() Function Called")
    }

    //When Get High Scores Button is Clicked...

        //Retrieve High Scores and Initials From Local Storage (as an string converted back to object using JSON.parse method)...

        //Display the Initials and High Scores to the User...


    //When Start Button Is Clicked, Start The Quiz (Display Questions Div HTML, Start Countdown)....
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
            return countdown();

            //startCoundown function..
            function countdown(){
                console.log("Nested startCountdown() function started")
                timerCount = 30;
                countdownClock.textContent = timerCount;

                //Use set Interval Method to call function to execute every 1000 milleseconds
                var timeInterval = setInterval(function () {
                    //As long as time is left on the clock...
                    if (timerCount > 0) {
                        //Show remaining seconds on countdown clock...
                        countdownClock.textContent = timerCount;
                        //Decrement the Timer Count by 1...
                        timerCount--;
                    } else {
                        //clear the interval with the clearInterval method
                        clearInterval(timeInterval);
                        //Once time gets to zero (its equal to 0), display 0
                        countdownClock.textContent = "0";
                        // alert the user that the time has expired..
                        alert ("Time's Up!");
                        // call the function to show score and log results--HOW
                    }
                }, 1000)
            }
    }

    //Once Quiz is Started, Render First Quiz Question and Answer Choices (Make Re-Usable Function When Submit Is Clicked)
    function renderQuizQuestion (){
        console.log("Render Quiz Question Function Has Been Invoked. Running Index For Quiz Question is now set to " + runningQuestionIndex); //On second call this shows what I want, index up by 1...
        console.log (quizQuestions[runningQuestionIndex].questionName);

        //Make Sure submissionResultContainer is hidden
        submissionResultContainer.classList.add("d-none");
        console.log("submissionResultContainer Hidden");

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
        console.log("checkAnswer function called")

        //Get the value of the answer

            //If 'any' radio button is checked, run through each option to detect the selected answer...
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
        console.log("the selected answer I have to work with ahead of checking for correct is " + selectedOption);
        console.log("the correct answer for the current question I have is " + quizQuestions[runningQuestionIndex].correctOption);
            
        if (selectedOption === quizQuestions[runningQuestionIndex].correctOption) {

            //Display green text "correct"!

                //Show the submissionResultContainer
                submissionResultContainer.classList.remove("d-none");
                console.log("submissionResultContainer Displayed");

                //Assign my .correct class to the p elemenet in that container (and remove incorrect class if its present)
                submissionResultText.classList.remove("incorrect");
                submissionResultText.classList.add("correct");
                
                //Make the text content say "correct!"
                submissionResultText.textContent = "Correct!";

            //Up the score count..
                scoreCount = scoreCount + 25;
                console.log("Current Score Is " + scoreCount);

            //Render the next question..

                // Up the running question index by 1...
                runningQuestionIndex++;
                console.log("Running question index is now set to " + runningQuestionIndex);

                // Wait 1 Second and call the render quiz question function again 
                return setTimeout(renderQuizQuestion, 1000);
        }

        //If submitted option is not correct...
        else {

            //Display red text "Incorrect"

                //Show the submissionResultContainer
                submissionResultContainer.classList.remove("d-none");
                console.log("submissionResultContainer Displayed");

                //Assign my .incorrect class to the p elemenet in that container (and remove my .correct class if its present)
                submissionResultText.classList.remove("correct");
                submissionResultText.classList.add("incorrect");
                
                //Make the text content say "correct!"
                submissionResultText.textContent = "Incorrect";

            //Decrease the score count..
                scoreCount = scoreCount - 50;
                console.log("Current Score Is " + scoreCount);

            //Decrement the Timer 10 Seconds
                timerCount = timerCount-10;

            //Render the next question..

                // Up the running question index by 1...
                runningQuestionIndex++;
                console.log("Running question index is now set to " + runningQuestionIndex);

                // Wait 1 Second and call the render quiz question function again 
                return setTimeout(renderQuizQuestion, 1000);
        }  
    }

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
    