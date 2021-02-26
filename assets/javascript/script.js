// create the click start button
var startButton = document.getElementById('start-btn')
var questionsContainerElement = Document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.querySelector('.answer-buttons');
var answerButtons = document.querySelectorAll('.answer-buttons .btn');

let currentQuestionIndex;

var questionTimer;

function setTimer() {
    questionTimer = 10;
    var interval = setInterval(function() {
        questionTimer--;
        if (questionTimer <= 0) {
            clearInterval(interval);
            // end game
        }
    }, 1000);
}

startButton.addEventListener('click', startGame);

function startGame() {
    console.log('started');
    startButton.classList.add('hide');
    questionsContainerElement.classList.remove('hide');
    currentQuestionIndex = 0;
    questionsContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    showQuestion(questions)
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    for (var i = 0; i < answerButtons.length; i++) {
        var button = answerButtons[i];
        var option = question.options[i]
        button.textContent = option.text;
    }
}

answerButtonsElement.addEventListener('click', function(event) {
    
})

// function to select the answer
function selectAnswer() {

}


// create questions with answers
const questions = [
    {
        question: 'Who was the first black woman to be elected to Congress?',
        options: [
            {text: 'Shirley Chisholm', correct: true },
            {text: 'Kamala Harris', correct: false },
            {text: 'Michelle Obama', correct: false },
            {text: 'Rosa Parks', correct: false }
        ]
    },
    {
        question: 'Who was the first black man to be elected president?',
        options: [
            {text: 'Barack Obama', correct: true },
            {text: 'Kamala Harris', correct: false },
            {text: 'Michelle Obama', correct: false },
            {text: 'Rosa Parks', correct: false }
        ]
    }
]

console.log(questions[0].options[0].correct);


// create timer

// end the quiz 
function endQuiz() {

}



// function to start the game
function startGame() {

}