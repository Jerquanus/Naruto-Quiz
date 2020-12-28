
// var to call 'play-btn'
var playButton = document.getElementById('play-btn')
var nextButton = document.getElementById('next-btn')
var questionsContainer = document.getElementById('kaguya')
var questionEl = document.getElementById('question-box')
var answersEl = document.getElementById('answer-choice')
var scoreButton = document.getElementById('score-btn')

var shuffledQuestions, currentQuestionIndex

var score = 0;

var time = 100;
 //setInterval to run every second and do the code that says time--

 // add event to start game
playButton.addEventListener('click', playGame)
nextButton.addEventListener('click', () =>{
    currentQuestionIndex++
        // call the next question
    setNextQuestion()
})


    // function to start the game, hide the play button, then show the question & choices also start timer.
function playGame() {
    // hides play button after pressing
    playButton.classList.add('hide');
    // set a way to shuffle questions. randomizes array
    shuffledQuestions = choices.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    // reveal questions
    questionsContainer.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
            // clears old and resets it
    resetState()
            // shows new question
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionEl.innerText = question.question
    question.answers.forEach(answer =>{
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answersEl.appendChild(button)
    })
}

function resetState() {
    // hide next button after answering
  nextButton.classList.add('hide')
    // clearing old blank choices 
  while (answersEl.firstChild) {
      answersEl.removeChild
      (answersEl.firstChild)
  }
}


function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    

    // If on the last question restart
    if(shuffledQuestions.length > currentQuestionIndex +1){
        nextButton.classList.remove('hide')
    }else {
        playButton.innerText = 'Restart'
        playButton.classList.remove('hide')

    }


    // keep up with the current score
    if(choices.correct===true){

    }
    

    // reveals next button
    nextButton.classList.remove('hide')
}



scoreButton.addEventListener('click', function() {
    console.log("baka!!")
})

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
    },
    {
        question: 'Who killed Hiruzen?',
        answers: [
            {text: 'Orochimaru', correct: true},
            {text: 'Mojo jojo', correct: false},
            {text: 'Kisame', correct: false},
            {text: 'Krillin', correct: false},
        ]
    },
    {
        question: 'What jutsu proved effective in stunning Kaguya?',
        answers: [
            {text: 'the Reaper Death Seal', correct: false},
            {text: 'Rasengan!!', correct: false},
            {text: 'Kamehameha Wave!!', correct: false},
            {text: 'Sexy No Jutsu', correct: true},
        ]
    },
    {
        question: 'Who was the Greatest shinobi to have ever lived?',
        answers: [
            {text: 'Naruto', correct: false},
            {text: 'Obito', correct: false},
            {text: 'Itachi', correct: true},
            {text: 'Madara', correct: false},
        ]
    },
    {
        question: 'Who helped Itachi murder his clan?',
        answers: [
            {text: 'Shino', correct: false},
            {text: 'Obito', correct: true},
            {text: 'Pain', correct: true},
            {text: 'Ten Ten', correct: false},
        ]
    }


]

