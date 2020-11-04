const quizData = [
    {
        question: 'В каком году открыли Америку?',
        a: '1492',
        b: '1550',
        c: '1337',
        d: '1425',
        correct: 'a',
    }, {
        question: 'Какой самый используемый язык программирования в 2019 году?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'a',
    }, {
        question: 'Кто был первым президентом России',
        a: 'Сталин',
        b: 'Путин',
        c: 'Медведев',
        d: 'Ельцин',
        correct: 'd',
    }, {
        question: 'Сколько километров в одном метре?',
        a: '1000',
        b: '0,1',
        c: '0,001',
        d: '100',
        correct: 'c',
    }, {
        question: 'Сколько будет 5 + 5?',
        a: '10',
        b: 'Не этот ответ',
        c: 'Мимо',
        d: '???',
        correct: 'a',
    }
]

const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById("question");
const quiz = document.getElementById("quiz")
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0

loadQuiz();

function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {

    let answer = undefined

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    });
    return answer
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false
    });
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `<h2>Вы ответили правильно на ${score}/${quizData.length} вопросов</h2>
            <button onclick="location.reload()">Перезапуск</button>
            `
        }
    }
})