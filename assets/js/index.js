
// var to call 'play-btn'
const playbutton = document.getElementById('play-btn')
const questionEL = document.getElementById('question-box')
const answersEL = document.getElementById('answer-choice')

let shuffledQuestions, currentQuestionIndex


// adding event to start game
playbutton.addEventListener('click', playGame)

// function to start the game, hide the play button, then show the question & choices also start timer.
function playGame() {
    playbutton.classList.add('hide');
    // sets a way to shuffle questions
    shuffledQuestions = choices.sort(() => Math.random() - .5)
    currentQuestionIndex = 1
    answersEL.classList.remove('hide');
    questionEL.classList.remove('hide');
    nextquestion()
    

}

function nextquestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {
    questionEL.innertext = question.question
}

function selectAnswer() {

}

const choices = [
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