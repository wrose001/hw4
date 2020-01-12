var main = document.querySelector("main");

var currentQuestion = 0;

var renderQuestions = function() {

    //main.innerHTML = " ";

    myClass.forEach(function (question, indexQuestion){
        var div = document.createElement("div");

        //If item isn't current question, hide it
        if(currentQuestion != indexQuestion){
            div.setAttribute("class", "hide");
        }

        //Create h1
        var h5 = document.createElement("h1");
        h5.textContent = question.title;

        //Create ul
        var ul = document.createElement("ul");

        //Create li tags
        question.choices.forEach(function(answerChoice){
            var li = document.createElement("li");
            li.textContent = answerChoice;

            //Append li to ul tag
            ul.append(li);
        });

            //Append h5 to div
            div.append(h5);

            //Append ul to div
            div.append(ul);

            //Append div (which now has the h5 and ul) to main element
            main.append(div);
    });

}

//Initial - ender questions
renderQuestions();

    //Use delegator strategy, have event listener on predefined element main
    //Wait for clicks on main element
    main.addEventListener("click", function(event){

        var targetedClick = event.target;

        //Only target li tag to proceed to next classroom
        if(targetedClick.matches("li")){

            console.log(targetedClick.textContent);
            currentQuestion++;
            renderQuestions();

        }

    });



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
// for(var count=0; count < questions.length; count++){
//     var card = document.createElement("div");
//     card.setAttribute("class", "card container");

//     var cardBody = document.createElement("div");
//     cardBody.setAttribute("class", "card-body");

//     var h5 = document.createElement("h5");
//     h5.setAttribute("class", "card-title");
//     var title = questions[count].title;
//     h5.textContent = title;
//     cardBody.append(h5);

//     var unorderedList = document.createElement("ul");
//     unorderedList.setAttribute("class", "ul");
//     var answerChoices = questions[count].choices;
//     unorderedList.textContent = answerChoices;
//     h5.append(unorderedList);


//     card.append(cardBody);
//     questionsElem.append(card);


    // var ul=document.createElement("ul");
    // 
// }

//Need another for loop to traverse through choices, needs to be nested