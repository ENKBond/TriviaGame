$(document).ready(function() {

//Variable setup

var allQuestions = [{
    question: "Who directed the award-winning film The Piano?",
    choices: ["Jane Campion", "Ron Howard", "Spike Lee", "Ridley Scott"],
    correctAnswer: "Jane Campion",
    image: "../images/the_piano.jpg",
},
{
    question: "Which original cast member has a cameo in the 2009 Star Trek film?",
    choices: ["DeForest Kelly", "George Takei", "Leonard Nimoy", "William Shatner"],
    correctAnswer: "Leonard Nimoy",
    image: "../images/star_trek.jpg",
},
{
    question: "The DaVinci Code stars which French actress as Sophie Neveu?",
    choices: ["Brigitte Bardot", "Marion Cotillard", "Sophie Marceau", "Audrey Tautou"],
    correctAnswer: "Audrey Tautou",
    image: "../images/da_vinci_code.jpg",
},
{
    question: "The majority of the film The Darjeeling Limited is set in which country?",
    choices: ["South Africa", "Thailand", "Russia", "India"],
    correctAnswer: "India",
    image: "../images/the-darjeeling-limited-still-526x295.jpg",
},
{
    question: "Which of these was not one of the Marx brothers?",
    choices: ["Chico", "Freddo", "Harpo", "Zeppo"],
    correctAnswer: "Freddo",
    image: "../images/marx_brothers.jpg",
},
{
    question: "The Kindergarten Cop title character was played by whom?",
    choices: ["Arnold Schwarzenegger", "David Schwimmer", "Danny DeVito", "Bradley Cooper"],
    correctAnswer: "Arnold Schwarzenegger",
    image: "../images/kindergarten_cop.jpg",
},
{
    question: "Which film involves a zombie invasion?",
    choices: ["The World's End", "Shaun of the Dead", "Lincoln", "Hot Fuzz"],
    correctAnswer: "Shaun of the Dead",
    image: "../images/shaun_of_the_dead_1.jpg",
},
{
    question: "Which film links the actors Ralph Fiennes, Bill Murray, and Adrien Brody?",
    choices: ["Argo", "The Wrestler", "The Grand Budapest Hotel", "Stripes"],
    correctAnswer: "The Grand Budapest Hotel",
    image: "../images/grand-budapest-hotel.jpg",
},
{
    question: "In which year was Jaws released?",
    choices: ["1975", "1980", "2014", "1971",],
    correctAnswer: "1975",
    image: "../images/Jaws-movie-poster.jpg",
},
{
    question: "Which movie features characters named Zed and Marcellus Walker?",
    choices: ["Jerry Maguire", "Reservoir Dogs", "Pulp Fiction", "Mulholland Drive"],
    correctAnswer: "Pulp Fiction",
    image: "../images/pulp_fiction.jpg",
}];

var correctCount = 0;
var wrongCount = 0;
var unanswerCount = 0;
var runningTimer = false;
var questionBlock = document.getElementById("questionBlock");
var timer = 15;
var intervalId;
var userResponse = null;
var i=0;


//functions

$("#answerBlock").hide();

$("#start").on("click", playGame);

function playGame() {
    $("#start").hide();
    selectQuestion();
}

function timeCount() {
    timer--;
    $("#timeLeft").text("Time left= " + timer);
}

function selectQuestion() {
    if (!runningTimer) {
        intervalId = setInterval(timeCount(), 15000);
        runningTimer = true;
    }

    $("#questionBlock").text((i+1) + ". " + allQuestions[i].question);
    $("#answerBlock").toggle();
    for (var j=0; j < allQuestions[i].choices.length; j++) {
        $("<label>").each
        // $("#choice1").text(allQuestions[i].choices[0]);
        // $("#choice2").text(allQuestions[i].choices[1]);
        // $("#choice3").text(allQuestions[i].choices[2]);
        // $("#choice4").text(allQuestions[i].choices[3]);
    }
    $(".form-check-input").on("click", function () {
        clearInterval(intervalId);
        runningTimer = false;
        $("#timeLeft").text("Time left= " + timer);
        userResponse = allQuestions[i].choices;
        console.log(userResponse);
        console.log(allQuestions[i].correctAnswer);
    })
}
























})