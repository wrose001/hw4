var startSection = document.querySelector("#start"); // Start section that will show 1st, along with start button
var startBtn = document.querySelector("#startBtn"); // button to start the quiz
var submitBtn = document.querySelector("#submitBtn");// this is for the All done section after the last queston
var goBack = document.querySelector("#goBack");
var clearHighScores = document.querySelector("#clearHighScores");
var counter = document.querySelector("#startBtn");
timeleft = 75;

var questionSection = document.querySelector("#main"); // We use this selector to append all of the card layout questions, querySelector requires an id (#), or class (.), or tag (i.e. div). In our case we are grabbing the div by its id <div id="main">

var completedSection = document.querySelector("#completed"); // Once quiz is complete we should show the completed section

var enterName = document.querySelector("#enterName"); //This is for the enter initials section

var highScores = document.querySelector("#highScores");

var currentQuestion = 0;

var count = localStorage.getItem("count");

var x = setInterval(function () {
    document.getElementById("timer").innerHTML = timeleft;
    timeleft -= 1;
    timeleft.textContent = " " + timeleft;

    if(timeleft <= 0) {
        clearInterval(timeleft);
        document.getElementById("timer").innerHTML="Time is up!";
    }

}, 1000);


var renderQuestions = function() {

    questionSection.innerHTML = " ";

    questions.forEach(function (question, indexQuestion) {

        var card = document.createElement("div");
        card.setAttribute("class", "card container");

        var cardBody = document.createElement("div");
        cardBody.setAttribute("class", "card-body");

        var h5 = document.createElement("h5");
        h5.setAttribute("class", "card-title");
        h5.textContent = question.title; // add question title to h5
        cardBody.append(h5); // append h5 to cardBody

        // Create choicesSection div
        var choicesSection = document.createElement("div");
        choicesSection.setAttribute("class", "choices");

        // Create button choice tags
        question.choices.forEach(function(choice){
            var button = document.createElement("button");
            button.textContent = choice;
            button.setAttribute("class", "btn btn-primary center-btn");
            //console.log("answer" + question.answer)
            //console.log(choice)
            if (choice === question.answer) {
                button.setAttribute("data-answer", "true");
            } else {
                button.setAttribute("data-answer", "false");
            }

            //Append button to div choices tag
            choicesSection.append(button);

        });

        // hide card if its not the currentQuestion the user should see
        if(currentQuestion != indexQuestion) {
            card.setAttribute("class", "hide");
        }

        cardBody.append(choicesSection); // append choicesSection to cardBody
        card.append(cardBody); // append cardBody to card
        questionSection.append(card); // finally append card to main div
    });


};

// Use delegator strategy, have event listener on predefined element main
// Wait for clicks on main element
questionSection.addEventListener("click", function(event){
    var targetedClick = event.target;

    //Only target li tag to proceed to next classroom
    if(targetedClick.matches("button")) {
        console.log(targetedClick.textContent);
        
        
        //Add logic right or wrong
        if (targetedClick.getAttribute("data-answer") === "true") {
            questionSection.append("Correct!");
        } else {
            questionSection.append("Wrong!");
        }

        setTimeout(function() {

            currentQuestion++;
            // currentQuestion that user see must be less than the size of our questions array.
            if(currentQuestion < questions.length) {
             renderQuestions();
            } else {
    
                /*
                This means the user has clicked through all the questions (completed all questions). We should now show the next div which is the "completed" section that's in the index.html
                */
    
                questionSection.setAttribute("class", 'hide');
                completedSection.setAttribute("class", "show");
    
            }
        }, 2000);

    }
});

//Add another event listener to add user initials and hide div after submit

// Start the Quiz when user clicks on a start button
startBtn.addEventListener("click", function(event) {
    questionSection.setAttribute("class", "show");
    startSection.setAttribute("class", "hide");

    // Render Questions
    renderQuestions();
});



submitBtn.addEventListener("click", function(event) {
    var userInputInitials = document.querySelector("input").value;
    var p = document.getElementById("initials");
    console.log("this is the p element " + p);

    if(!userInputInitials){
        console.log("false:" +  userInputInitials);
        p.innerHTML = "Score cannot be registered if you don't provide your initials!";
    } else {
        console.log("true: " + userInputInitials);
        p.innerText = "Hurray! You score has been registered!";
        localStorage.setItem("userInputInitials", userInputInitials);
    };

    highScores.setAttribute("class", "show");
    completed.setAttribute("class", "hide");
});

goBack.addEventListener("click", function(event) {
    highScores.setAttribute("class", "hide");
    startSection.setAttribute("class", "show");
    renderQuestions();
});
