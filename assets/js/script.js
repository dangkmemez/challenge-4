


//Variables
$( "questionEl").html("question");

//Timer
var timer = 60;
var counter;

//Questions
let questions = [
    {
        question: "Arrays in JavaScript can be used to store:",
        answers: [
            {text: "All of the above", correct: true},
            {text: "Numbers and strings", correct: false},
            {text: "Other arrays", correct: false},
            {text: "Booleans", correct: false}
        ],
    },
    {
        question: "The condition in an if / else statement is enclosed within:",
        answers: [
            {text: "Quotation marks", correct: true},
            {text: "Curly brackets", correct: false},
            {text: "Parentheses", correct: false},
            {text: "Square brackets", correct: false}
        ],
    },
    {
        question: "String values must be enclosed within _______ when being assigned to variables.",
        answers: [
            {text: "Quotation marks", correct: true},
            {text: "Curly brackets", correct: false},
            {text: "Commas", correct: false},
            {text: "Parentheses", correct: false}
        ],
    },
    {
        question: "Commonly used data types DO NOT include:",
        answers: [
            {text: "Alerts", correct: true},
            {text: "Strings", correct: false},
            {text: "Numbers", correct: false},
            {text: "Booleans", correct: false}
        ],
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            {text: "Console log", correct: true},
            {text: "JavaScript", correct: false},
            {text: "Terminal / bash", correct: false},
            {text: "For loops", correct: false}
        ],
    },
];