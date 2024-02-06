const question = document.querySelector('#question')
const choices = Array.from(document.querySelectorAll('.choice-text'))
const scoreText = document.querySelector('#score')
const progressText = document.querySelector('#progressText')
const progressBarFull = document.querySelector('#progressBarFull')

let currentQuestion = {},
    score = 0,
    questionCounter = 0,
    availableQuestions = [];

let questions = [
  {
    question: 'What is the syntax for inserting the image picture.jpg?',
    choice1: '<img src="picture.jpg" />',
    choice2: '<src="picture.jpg" />',
    choice3: '<image src="picture.jpg" />',
    choice4: '<img="picture.jpg" />',
    answer: 1,
  },
  {
    question: 'To create a link to an anchor, you use the ______ property in A tag.',
    choice1: 'Name',
    choice2: 'Tag',
    choice3: 'Link',
    choice4: 'Href',
    answer: 4,
  },
  {
    question: 'HTML Tags are case sensitive.',
    choice1: 'True',
    choice2: 'False',
    choice3: 'Not in HTML 5',
    choice4: 'Only in HTML 5',
    answer: 1,
  },
  {
    question: 'What is the correct HTML for referring to an external style sheet?',
    choice1: '<link href="style.css" />',
    choice2: '<link rel="stylesheet" type="text⁄css" href="style.css" />',
    choice3: '<link style.css />',
    choice4: '<link stylesheet="style.css" />',
    answer: 2,
  },
  {
    question: 'Which is the correct CSS syntax?  ',
    choice1: 'Body:color=black',
    choice2: '{body;color:black}',
    choice3: 'Body {color: black}',
    choice4: '{body:color=black(body}',
    answer: 3,
  },
  {
    question: 'Within which element should you insert meta-tags?',
    choice1: '<header></header>',
    choice2: '<div></div>',
    choice3: '<footer></footer>',
    choice4: '<head></head>',
    answer: 4,
  },
  {
    question: 'When creating a website that has multiple pages, which type of style sheet is preferred?',
    choice1: 'Up-line style sheet',
    choice2: 'Inline style',
    choice3: 'External style sheet',
    choice4: 'Internal style sheet',
    answer: 3,
  },
  {
    question: 'How can you make a list that lists the items with numbers? ',
    choice1: 'ol',
    choice2: 'dl',
    choice3: 'ul',
    choice4: 'list',
    answer: 1,
  },
  {
    question: 'How do you insert a comment in a CSS file? ',
    choice1: `' this is a comment`,
    choice2: '/* this is a comment */',
    choice3: '// this is a comment',
    choice4: '// this is a comment //',
    answer: 2,
  },
  {
    question: 'Which CSS property controls the text size?',
    choice1: 'Font-style',
    choice2: 'Text-style',
    choice3: 'Text-size',
    choice4: 'Font-size',
    answer: 4,
  },
  {
    question: 'How do you display hyperlinks without an underline? ',
    choice1: 'a {text-decoration:none}',
    choice2: 'a {text-decoration:no underline}',
    choice3: 'a {decoration:no underline}',
    choice4: 'a {underline:none}',
    answer: 1,
  },
  {
    question: 'How do you make a list that lists its items with squares? ',
    choice1: 'Type: square',
    choice2: 'List-type: square',
    choice3: 'Type: 2',
    choice4: 'List-style-type: square',
    answer: 4,
  },
  {
    question: 'What does CSS stand for?',
    choice1: 'Creative Style Sheets',
    choice2: 'Colorful Style Sheets',
    choice3: 'Computer Style Sheets',
    choice4: 'Cascading Style Sheets',
    answer: 4,
  },
  {
    question: 'How can you create an e-mail link?  ',
    choice1: 'Mail href="xxx@yyy.com"',
    choice2: 'Mail>xxx@yyy.com/mail',
    choice3: 'a href="xxx@yyy.com"',
    choice4: 'a href="mailto:xxx@yyy.com"',
    answer: 4,
  },
  {
    question: 'How can you open a link in a new browser window?  ',
    choice1: 'a href="url" target="_blank"',
    choice2: 'a href="url" new',
    choice3: 'a href="url" target="new"',
    choice4: 'a href="url" target=_window"',
    answer: 1,
  },
]

const SCORE_POINTS = 100;
const MAX_QUESTIONS = questions.length;

startGame = ()=> {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
}

getNewQuestion = ()=> {
  if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    localStorage.setItem('mostRecentScore', score)
    return window.location.assign('/end.html')
  }

  questionCounter++;
  progressText.textContent = `${questionCounter} of ${MAX_QUESTIONS}`;
  progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`;

  const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionsIndex];
  question.textContent = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset['number'];
    choice.textContent = currentQuestion['choice' + number];
  })

  availableQuestions.splice(questionsIndex, 1)
}

choices.forEach(choice => {
  choice.addEventListener('click', e=> {
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset['number'];
    let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

    if(classToApply === 'correct') {
      incrementScore(SCORE_POINTS)
    }

    selectedChoice.parentElement.classList.add(classToApply)

    setTimeout(()=> {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 500)
  })
})

incrementScore = points=> {
  score += points;
  scoreText.textContent = score;
}

startGame()











/*const question = document.querySelector("#question");
const choices = Array.from(document.querySelector(".choices-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question: 'what is 2+2?',
    choice1: '2',
    choice2: '4',
    choice3: '21',
    choice4: '17',
    answer: 2,
  },
  {
    question: 'what is 2+0?',
    choice1: '2',
    choice2: '4',
    choice3: '21',
    choice4: '17',
    answer: 1,
  },
  {
    question: 'what is 2+15?',
    choice1: '2',
    choice2: '4',
    choice3: '21',
    choice4: '17',
    answer: 4,
  },
  {
    question: 'what is 2+19?',
    choice1: '2',
    choice2: '4',
    choice3: '21',
    choice4: '17',
    answer: 3,
  },
]

const SCORE_POINTS = 100;
const MAX_QUESTIONS = questions.length;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
}

getNewQuestion = () => {
  if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    localStorage.setItem('mostRecentScore', score)
    return window.location.assign('/end.html')
  }
  questionCounter++
  progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
  progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

  const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
  currentQuestion = availableQuestions[questionsIndex]
  question.textContent = currentQuestion.question

  choices.forEach(choice => {
    const number = choice.dataset['number']
    choice.textContent = currentQuestion['choice' + number]
  })

  availableQuestions.splice(questionsIndex, 1)

  acceptingAnswers = true
}

choices.forEach(choice => {
  choice.addEventListener('click', e => {
    if(!acceptingAnswers) return;

    acceptingAnswers = false
    const selectedChoice = e.target
    const selectedAnswer = selectedChoice.dataset['number']

    let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
    if(classToApply === 'correct') {
      incrementScore(SCORE_POINTS)
    }

    selectedChoice.parentElement.classList.add(classToApply)

    setTimeout(()=> {
      selectedChoice.parentElement.classList.remove(classToApply)
      getNewQuestion()
    }, 1000)
  })
})

incrementScore = num => {
  score +=num
  scoreText.textContent = score
}

startGame() */