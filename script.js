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
    })

}



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
}

//Need another for loop to traverse through choices, needs to be nested