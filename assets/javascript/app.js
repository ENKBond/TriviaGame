$(document).ready(function() {

//Variable setup

var allQuestions = [{
    question: "Who directed the award-winning film The Piano?",
    choices: ["Jane Campion", "Ron Howard", "Spike Lee", "Ridley Scott"],
    correctAnswer: 0,
    image: "../images/the_piano.jpg",
},
{
    question: "Which original cast member has a cameo in the 2009 Star Trek film?",
    choices: ["DeForest Kelly", "George Takei", "Leonard Nimoy", "William Shatner"],
    correctAnswer: 2,
    image: "../images/star_trek.jpg",
},
{
    question: "The DaVinci Code stars which French actress as Sophie Neveu?",
    choices: ["Brigitte Bardot", "Marion Cotillard", "Sophie Marceau", "Audrey Tautou"],
    correctAnswer: 3,
    image: "../images/da_vinci_code.jpg",
},
{
    question: "The majority of the film The Darjeeling Limited is set in which country?",
    choices: ["South Africa", "Thailand", "Russia", "India"],
    correctAnswer: 3,
    image: "../images/the-darjeeling-limited-still-526x295.jpg",
},
{
    question: "Which of these was not one of the Marx brothers?",
    choices: ["Chico", "Freddo", "Harpo", "Zeppo"],
    correctAnswer: 1,
    image: "../images/marx_brothers.jpg",
},
{
    question: "The Kindergarten Cop title character was played by whom?",
    choices: ["Arnold Schwarzenegger", "David Schwimmer", "Danny DeVito", "Bradley Cooper"],
    correctAnswer: 0,
    image: "../images/kindergarten_cop.jpg",
},
{
    question: "Which film involves a zombie invasion?",
    choices: ["The World's End", "Shaun of the Dead", "Lincoln", "Hot Fuzz"],
    correctAnswer: 1,
    image: "../images/shaun_of_the_dead_1.jpg",
},
{
    question: "Which film links the actors Ralph Fiennes, Bill Murray, and Adrien Brody?",
    choices: ["Argo", "The Wrestler", "The Grand Budapest Hotel", "Stripes"],
    correctAnswer: 2,
    image: "../images/grand-budapest-hotel.jpg",
},
{
    question: "In which year was Jaws released?",
    choices: ["1975", "1980", "2014", "1971",],
    correctAnswer: 0,
    image: "../images/Jaws-movie-poster.jpg",
},
{
    question: "Which movie features characters named Zed and Marcellus Walker?",
    choices: ["Jerry Maguire", "Reservoir Dogs", "Pulp Fiction", "Mulholland Drive"],
    correctAnswer: 2,
    image: "../images/pulp_fiction.jpg",
}];

var correctCount = 0;
var wrongCount = 0;
var unanswerCount = 0;
var runningTimer = false;
var questionBlock = document.getElementById("questionBlock");



//functions

$("#answerBlock").hide();

$("#start").on("click", playGame);

function playGame() {
    $("#start").hide();
    selectQuestion();
}

function selectQuestion() {

}






















})