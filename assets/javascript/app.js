$(document).ready(function() {

//Variable setup

var allQuestions = [{
    question: "Who directed the award-winning film The Piano?",
    choices: ["Jane Campion", "Ron Howard", "Spike Lee", "Ridley Scott"],
    correctAnswer: "Jane Campion",
    image: "assets/images/the_piano.jpg",
},
{
    question: "Which original cast member has a cameo in the 2009 Star Trek film?",
    choices: ["DeForest Kelly", "George Takei", "Leonard Nimoy", "William Shatner"],
    correctAnswer: "Leonard Nimoy",
    image: "assets/images/star_trek.jpg",
},
{
    question: "The DaVinci Code stars which French actress as Sophie Neveu?",
    choices: ["Brigitte Bardot", "Marion Cotillard", "Sophie Marceau", "Audrey Tautou"],
    correctAnswer: "Audrey Tautou",
    image: "assets/images/da_vinci_code.jpg",
},
{
    question: "The majority of the film The Darjeeling Limited is set in which country?",
    choices: ["South Africa", "Thailand", "Russia", "India"],
    correctAnswer: "India",
    image: "assets/images/the-darjeeling-limited-still-526x295.jpg",
},
{
    question: "Which of these was not one of the Marx brothers?",
    choices: ["Chico", "Freddo", "Harpo", "Zeppo"],
    correctAnswer: "Freddo",
    image: "assets/images/marx_brothers.jpg",
},
{
    question: "The Kindergarten Cop title character was played by whom?",
    choices: ["Arnold Schwarzenegger", "David Schwimmer", "Danny DeVito", "Bradley Cooper"],
    correctAnswer: "Arnold Schwarzenegger",
    image: "assets/images/kindergarten_cop.jpg",
},
{
    question: "Which film involves a zombie invasion?",
    choices: ["The World's End", "Shaun of the Dead", "Lincoln", "Hot Fuzz"],
    correctAnswer: "Shaun of the Dead",
    image: "assets/images/shaun_of_the_dead_1.jpg",
},
{
    question: "Which film links the actors Ralph Fiennes, Bill Murray, and Adrien Brody?",
    choices: ["Argo", "The Wrestler", "The Grand Budapest Hotel", "Stripes"],
    correctAnswer: "The Grand Budapest Hotel",
    image: "assets/images/grand-budapest-hotel.jpg",
},
{
    question: "In which year was Jaws released?",
    choices: ["1975", "1980", "2014", "1971",],
    correctAnswer: "1975",
    image: "assets/images/Jaws-movie-poster.jpg",
},
{
    question: "Which movie features characters named Zed and Marcellus Walker?",
    choices: ["Jerry Maguire", "Reservoir Dogs", "Pulp Fiction", "Mulholland Drive"],
    correctAnswer: "Pulp Fiction",
    image: "assets/images/pulp_fiction.jpg",
}];

var correctCount = 0;
var wrongCount = 0;
var unanswerCount = 0;
var runningTimer = false;
var questionBlock = document.getElementById("questionBlock");
var time = 15;
var intervalId;
var userResponse = null;
var i=0;


//functions


//setting timer
function timeCount() {
    time--;
    $("#timeLeft").text("Time left= " + time + " seconds");
    if (time === 0) {
        clearInterval(intervalId);
        runningTimer = false;
        timeUp();
    }
}

//display question and choices and setting up click event for buttons
function selectQuestion() {
    $("#questionBlock").empty();
    $("#answerBlock").empty();

    if (!runningTimer) {
        intervalId = setInterval(timeCount,1000);
        runningTimer = true;
    }
    $("#questionBlock").text((i+1) + ". " + allQuestions[i].question);
    $("#answerBlock").show();
    for (var j=0; j < allQuestions[i].choices.length; j++) {
        var listOfChoices = $("<button>" + allQuestions[i].choices[j]+"</button>");
        $("#answerBlock").append(listOfChoices);
        listOfChoices.addClass("choices");
        listOfChoices.attr("data-name", allQuestions[i].choices[j]);

    }

    $(".choices").on("click", function() {
        clearInterval(intervalId);
        runningTimer = false;
        $("#timeLeft").text("Time left= " + time + " seconds");
        userResponse = $(this).attr("data-name");
        console.log(userResponse);
        console.log(allQuestions[i].correctAnswer);
        matchGuess();
    });

    }

//match user guess with the correct answer
function matchGuess() {
    if (userResponse === allQuestions[i].correctAnswer) {
        correctGuess();
    }
    else {
        wrongGuess();
    }
}

//determine whether to move to next question or display results
function nextSteps() {

    time = 15;
    i++;
    if (i === allQuestions.length) {
        setTimeout(result,5000);
    }
    if (i < allQuestions.length) {
        setTimeout(selectQuestion,5000);
    }

}

//when a correct guess is made
function correctGuess() {
    $("#questionBlock").empty();
    $("#answerBlock").empty();
    correctCount++;
    $("#answerBlock").append("Good job! <br>").append("<br><img src= '"+allQuestions[i].image+"' alt='Not Found'>");
    nextSteps();
}

//when an incorrect guess is made
function wrongGuess() {
    $("#questionBlock").empty();
    $("#answerBlock").empty();
    wrongCount++;
    $("#answerBlock").append("Not quite. The correct answer is: " + allQuestions[i].correctAnswer).append("<br><img src='"+allQuestions[i].image+"' alt='Not Found'>");
    nextSteps();
}

//when no guess is made
function timeUp() {
    $("#questionBlock").empty();
    $("#answerBlock").empty();
    unanswerCount++;
    $("#answerBlock").append("If you HAD made a guess, you probably would have picked: " + allQuestions[i].correctAnswer).append("<br><img src='"+allQuestions[i].image+"' alt='Not Found'>");
    nextSteps();
}

//displaying results and restarting game
function result() {
    $("#questionBlock").empty();
    $("#answerBlock").empty();
    $("#answerBlock").append("<h2>Final Results</h2>");
    $("#correctCount").text("Correct: " + correctCount);
    $("#wrongCount").text("Incorrect: " + wrongCount);
    $("#unanswerCount").text("Not Answered: " + unanswerCount);
   
    $("#restart").show();
    $("#restart").on("click", function(){
        i = 0;
        time = 15;
        correctCount = 0;
        wrongCount = 0;
        unanswerCount = 0;
        selectQuestion();
    });
}


    $("#answerBlock").hide();
    $("#restart").hide();

    $("#start").on("click", function(){
        $(this).hide();
        selectQuestion();
    });
    
});























