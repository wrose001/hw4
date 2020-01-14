var startSection = document.querySelector("#start"); // Start section that will show 1st, along with start button
var startBtn = document.querySelector("#startBtn"); // button to start the quiz

var questionSection = document.querySelector("#main"); // We use this selector to append all of the card layout questions, querySelector requires an id (#), or class (.), or tag (i.e. div). In our case we are grabbing the div by its id <div id="main">

var completedSection = document.querySelector("#completed"); // Once quiz is complete we should show the completed section

var currentQuestion = 0;

var renderQuestions = function() {

    questionSection.innerHTML = " ";

    questions.forEach(function (question, indexQuestion) {

        /*
            The following code within this function will build cards under the main div like such:

            <div class="card container">
                <div class="card-body">
                    <h5 class="card-title"></h5>
                    <div class="choices">
                        <button class="btn btn-primary center-btn">choice1</button>
                        <button class="btn btn-primary center-btn">choice2</button>
                        <button class="btn btn-primary center-btn">choice3</button>
                        <button class="btn btn-primary center-btn">choice4</button>
                    </div>
                </div>
            </div>
        */
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
        question.choices.forEach(function(answerChoice){
            var button = document.createElement("button");
            button.textContent = answerChoice;
            button.setAttribute("class", "btn btn-primary center-btn");

            button.addEventListener("click", function(event){
                var correct = event.target;

                if (correct.matches("answer")){
                    var state = correct.getAttribute("data-answer");
                    if (state === true) {
                        alert("Correct!");
                    } else {
                        alert("Wrong!");
                    }
                }
            });

            /*
                Weston right here it may be best to add the answer to the button.

                button.addEventListener("click", function(event){
                    var correct = event.target;

                    if (correct.matches("answer")){
                        var state = correct.getAttribute("data-answer");
                        if (state === "true")
                    }
                })

                Here's an option you can do:

                You could CREATE a data attribute
                Refer to activity:
                https://github.com/the-Coding-Boot-Camp-at-UT/UT-AUS-FSF-PT-12-2019-U-C/tree/master/04-Web-APIs/01-Activities/24-Ins_Data-Attributes

                i.e. correct choice is 
                <button data-answer="true">choice1</button>

                incorrect choice is
                <button data-answer="false">choice2</button>
                <button data-answer="false">choice3</button>
                <button data-answer="false">choice4</button>

                Later in the questionSection.addEventListener section
                You can read what the user clicked on. If the user clicked
                on a button that has the data-answer attribute set to "true"
                that means question was correct, if "false" then its wrong

            */

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

}

// Use delegator strategy, have event listener on predefined element main
// Wait for clicks on main element
questionSection.addEventListener("click", function(event){
    var targetedClick = event.target;

    //Only target li tag to proceed to next classroom
    if(targetedClick.matches("button")) {
        console.log(targetedClick.textContent);
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
    }
});

// Start the Quiz when user clicks on a start button
startBtn.addEventListener("click", function(event) {
    questionSection.setAttribute("class", "show");
    startSection.setAttribute("class", "hide");

    // Render Questions
    renderQuestions();
});