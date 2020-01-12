var questionsElem = document.querySelector("#questions");

var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within_____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in JavaScript can be used to store_____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "String values must be enclosed within _____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
    },
    {
        title: "A very useful tool used during development and debugging for printing content to the debugger is.",
        choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answer: "console.log"
    },
];

//Traverse through titles
// for(var count=0; count < Array.length; count++){
//     var ul=document.createElement("ul");
    
//     main.append();
// }
{/* <div class="card container">
                    <div class="card-body">
                      <h5 class="card-title"></h5>
                      <p class="card-text"></p>
                      <ul><li id="startBtn" class="btn btn-primary"></li>
                        <li id="startBtn" class="btn btn-primary"></li>
                        <li id="startBtn" class="btn btn-primary"></li>
                        <li id="startBtn" class="btn btn-primary"></li>
                      </ul>
                    </div>
                  </div> */}
for(var count=0; count < questions.length; count++){
    var card = document.createElement("div");
    card.setAttribute("class", "card container");

    var cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");

    var h5 = document.createElement("h5");
    h5.setAttribute("class", "card-title");
    var title = questions[count].title;
    h5.textContent = title;
    cardBody.append(h5);





    card.append(cardBody);
    questionsElem.append(card);


    // var ul=document.createElement("ul");
    // 
}

//Need another for loop to traverse through choices, needs to be nested