
// var to call 'play-btn'
var playbutton = document.getElementById('play-btn')
var nextbutton = document.getElementById('next-btn')
var questionsContainer = document.getElementById('kaguya')
var questionEL = document.getElementById('question-box')
var answersEL = document.getElementById('answer-choice')

var shuffledQuestions, currentQuestionIndex


// add event to start game
playbutton.addEventListener('click', playGame)

// function to start the game, hide the play button, then show the question & choices also start timer.
function playGame() {
    // hides play button after pressing
    playbutton.classList.add('hide');
    // set a way to shuffle questions. randomizes array
    shuffledQuestions = choices.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    // reveal questions
    questionsContainer.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionEL.innerText = question.question
    question.answers.forEach(answer =>{
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answersEL.appendChild(button)
    })
}

function resetState() {
  
}


function selectAnswer(e) {
    
}

// array of questions
var choices = [
    {
        question: 'Who was the first Hokage?',
        answers: [
            {text: 'Hashirama', correct: true},
            {text: 'Danzo', correct: false},
            {text: 'Naruto', correct: false},
            {text: 'Kirito', correct: false},
        ]
    }

]