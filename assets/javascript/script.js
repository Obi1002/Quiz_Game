// create the click start button
var startButton = document.getElementById('start-btn')
var questionsContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.querySelector('.answer-buttons');
var answerButtons = document.querySelectorAll('.answer-buttons .btn');
var nextButton = document.getElementById('next-btn');
var timerEl = document.getElementById('timer');

let currentQuestionIndex;

// create timer
var questionTimer;
// set timer for each question
function setTimer() {
    questionTimer = 60;
    var interval = setInterval(function() {
        if (questionTimer <= 0) {
            clearInterval(interval);
            endGame();
            return;
        }
        questionTimer--; // decrement the timer
        timerEl.innerText = questionTimer;
    }, 1000);
}

startButton.addEventListener('click', startGame);

function startGame() {
    console.log('started');
    // hiding the start button
    startButton.classList.add('hide');
    // setting our index to 0
    currentQuestionIndex = 0;
    // render our question to the DOM
    showQuestion(questions[currentQuestionIndex]);
    // showing our question container
    questionsContainerElement.classList.remove('hide');
    // start timer
    setTimer();
}

function setNextQuestion() {
    currentQuestionIndex++;
    showQuestion(questions[currentQuestionIndex]);
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
    var element = event.target;
    if (element.matches('button')) {
        var answer = element.dataset.choice; // data-choice
        if (checkAnswer(answer)) {
            // run correct code
            console.log('correct');
            element.classList.add('correct');
        } else {
            // run incorrect code
            console.log('incorrect');
            element.classList.add('wrong');
        };
        // show the next button
        nextButton.classList.toggle('hide');
    }
});

nextButton.addEventListener('click', function() {
    for (var i = 0; i < answerButtons.length; i++) {
        answerButtons[i].classList.remove('correct');
        answerButtons[i].classList.remove('wrong');
    }
    // hide the next button
    nextButton.classList.toggle('hide');
    // showNextQuestion
    if (currentQuestionIndex < questions.length - 1) {
        setNextQuestion();
    } else {
        endGame();
    }
    //
})

function checkAnswer(answer) {
    var currentQuestion = questions[currentQuestionIndex];
    return currentQuestion.options[answer].correct;
}


// create questions with answers
const questions = [
    {
        question: 'Who was the first black woman to be elected to Congress?',
        options: [
            {text: 'Kamala Harris', correct: false },
            {text: 'Michelle Obama', correct: false },
            {text: 'Rosa Parks', correct: false },
            {text: 'Shirley Chisholm', correct: true }
        ]
    },
    {
        question: 'Who was the first Black general in the American military?',
        options: [
            {text: 'Martin Tubiis', correct: false },
            {text: 'Benjamin O. Davis Sr.', correct: true },
            {text: 'Benjamin Franklin', correct: false },
            {text: 'Ethan Johnson', correct: false }
        ]
    },
    {
        question: 'Who was the first licensed Black pilot?',
        options: [
            {text: 'Bessie Coleman', correct: true },
            {text: 'Amelia Earhart', correct: false },
            {text: 'Rudolph Jackson', correct: false },
            {text: 'Michael Deron', correct: false }
        ]
    }, 
    {
        question: 'Who is the only African American to earn an EGOT (Emmy, Grammy, Oscar, Tony)?',
        options: [
            {text: 'Kobe Bryant', correct: false },
            {text: 'Viola Davis', correct: false },
            {text: 'Whoopi Goldberg', correct: true },
            {text: 'Chadwick Boseman', correct: false }
        ]
    }, 
    {
        question: 'Who was the first black man to be elected president?',
        options: [
            {text: 'Kamala Harris', correct: false },
            {text: 'Michelle Obama', correct: false },
            {text: 'Barack Obama', correct: true },
            {text: 'Rosa Parks', correct: false }
        ]
    }, 
    {
        question: 'At six (6) years old, this person became the first African American student to attend William Frantz Elementary in Louisiana at the height of desegregation.',
        options: [
            {text: 'Ruby Bridges', correct: true },
            {text: 'Allen Montgomery', correct: false },
            {text: 'Robert Dewitt', correct: false },
            {text: 'Rosa Parks', correct: false }
        ]
    }, 
];


// end the quiz 
// I need to finish the endGame function, scoreboard, enter name and save score in local storage. 
function endGame() {
    console.log('ended');
}
