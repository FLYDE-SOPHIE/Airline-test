const questions = [
    {
        question: "선호하는 항공사 규모는 어떠한가요?",
        choices: ["대형 항공사", "중소형 항공사"]
    },
    {
        question: "어떤 회사 분위기를 더 선호하시나요?",
        choices: ["전통적이고 체계적인 분위기", "혁신적이고 자유로운 분위기"]
    },
    // 여기에 더 많은 질문을 추가할 수 있습니다
];

let currentQuestion = 0;
const answers = [];

document.getElementById('startBtn').addEventListener('click', startTest);

function startTest() {
    document.getElementById('startBtn').style.display = 'none';
    displayQuestion();
}

function displayQuestion() {
    const questionContainer = document.getElementById('questionContainer');
    if (currentQuestion < questions.length) {
        const q = questions[currentQuestion];
        let html = `<h3>${q.question}</h3>`;
        q.choices.forEach((choice, index) => {
            html += `<button onclick="selectAnswer(${index})" class="btn btn-outline-primary m-2">${choice}</button>`;
        });
        questionContainer.innerHTML = html;
        questionContainer.style.display = 'block';
    } else {
        showResult();
    }
}

function selectAnswer(choiceIndex) {
    answers.push(choiceIndex);
    currentQuestion++;
    displayQuestion();
}

function showResult() {
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = '<h2>테스트 결과</h2><p>당신에게 가장 적합한 항공사는...</p>';
    // 여기에 결과 계산 로직을 추가할 수 있습니다
    resultContainer.style.display = 'block';
    document.getElementById('questionContainer').style.display = 'none';
}
