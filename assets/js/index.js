
// var to call 'play-btn'
var playbutton = document.getElementById('play-btn')
var nextbutton = document.getElementById('next-btn')
var questionsContainer = document.getElementById('kaguya')
var questionEL = document.getElementById('question-box')
var answersEL = document.getElementById('answer-choice')

var shuffledQuestions, currentQuestionIndex


// add event to start game
playbutton.addEventListener('click', playGame)
nextbutton.addEventListener('click', () =>{
    currentQuestionIndex++
    // call the next question
    setNextQuestion()
})

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
    // clears old and resets it
    resetState()
    // shows new questio
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
    // hide next button after answering
  nextbutton.classList.add('hide')
// clearing old blank choices 
  while (answersEL.firstChild) {
      answersEL.removeChild
      (answersEL.firstChild)
  }
}


function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    // !!!could be used to set timer functions!!!!
    // setStatusClass(document.body, correct)
    // Array.from(answersEL.children).forEach(button => {
    //     setStatusClass(button, button.dataset.correct)
    // })

    // If on the last question restart
    if(shuffledQuestions.length > currentQuestionIndex +1){
        nextbutton.classList.remove('hide')
    }else {
        playbutton.innerText = 'Restart'
        playbutton.classList.remove('hide')
    }

    // reveals next button
    nextbutton.classList.remove('hide')
}

// !!!could be used to set timer functions!!!!
// function setStatusClass(element, correct) {
//     clearStatusClass(element)
//     if (correct) {
        
//     } else {
        
//     }
// }
// !!!could be used to set timer functions!!!!
// function clearStatusClass(element) {
//     element.classList.remove('correct')
//     element.classList.remove('BAKA!!')
// }

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
        question: 'Who helpd Itachi murder his clan?',
        answers: [
            {text: 'Shino', correct: false},
            {text: 'Obito', correct: true},
            {text: 'Pain', correct: true},
            {text: 'Ten Ten', correct: false},
        ]
    }


]