document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('startBtn').addEventListener('click', startTest);
});

function startTest() {
    document.getElementById('startContainer').style.display = 'none';
    currentQuestion = 0;
    displayQuestion();
}

function displayQuestion() {
    const questionContainer = document.getElementById('questionContainer');
    if (currentQuestion < questions.length) {
        const q = questions[currentQuestion];
        let html = `<h3>${currentQuestion + 1}. ${q.question}</h3>`;
        if (q.type === "number") {
            html += `<input type="number" id="answer" class="form-control mb-2">`;
            html += `<button onclick="selectAnswer()" class="btn btn-primary">다음</button>`;
        } else if (q.multiple) {
            q.choices.forEach((choice, index) => {
                html += `<div class="form-check">
                    <input class="form-check-input" type="checkbox" value="${index}" id="choice${index}">
                    <label class="form-check-label" for="choice${index}">${choice}</label>
                </div>`;
            });
            html += `<button onclick="selectMultipleAnswers(${q.maxSelect || 0})" class="btn btn-primary mt-2">다음</button>`;
        } else {
            q.choices.forEach((choice, index) => {
                html += `<button onclick="selectAnswer(${index})" class="btn btn-outline-primary m-2">${choice}</button>`;
            });
        }
        questionContainer.innerHTML = html;
        questionContainer.style.display = 'block';
    } else {
        showResult();
    }
}const airlineProfiles = {
    "에미레이트 항공": {
        size: "대형",
        culture: "혁신적",
        workIntensity: "고강도",
        routes: "장거리",
        region: "중동",
        brand: "고급",
        baseCity: "해외",
        type: "FSC"
    },
    "카타르 항공": {
        size: "대형",
        culture: "혁신적",
        workIntensity: "고강도",
        routes: "장거리",
        region: "중동",
        brand: "고급",
        baseCity: "해외",
        type: "FSC"
    },
    "에티하드 항공": {
        size: "대형",
        culture: "혁신적",
        workIntensity: "고강도",
        routes: "장거리",
        region: "중동",
        brand: "고급",
        baseCity: "해외",
        type: "FSC"
    },
    "캐세이퍼시픽": {
        size: "대형",
        culture: "전통적",
        workIntensity: "고강도",
        routes: "장거리",
        region: "아시아",
        brand: "고급",
        baseCity: "해외",
        type: "FSC"
    },
    "싱가포르 항공": {
        size: "대형",
        culture: "전통적",
        workIntensity: "고강도",
        routes: "장거리",
        region: "아시아",
        brand: "고급",
        baseCity: "해외",
        type: "FSC"
    },
    "KLM": {
        size: "대형",
        culture: "전통적",
        workIntensity: "중강도",
        routes: "장거리",
        region: "유럽",
        brand: "전통",
        baseCity: "해외",
        type: "FSC"
    },
    "핀에어": {
        size: "중형",
        culture: "전통적",
        workIntensity: "중강도",
        routes: "장단거리혼합",
        region: "유럽",
        brand: "현대적",
        baseCity: "해외",
        type: "FSC"
    },
    "에어아시아": {
        size: "중형",
        culture: "혁신적",
        workIntensity: "중강도",
        routes: "단거리",
        region: "아시아",
        brand: "저가",
        baseCity: "아시아",
        type: "LCC"
    },
    "스쿠트항공": {
        size: "중형",
        culture: "혁신적",
        workIntensity: "중강도",
        routes: "장단거리혼합",
        region: "아시아",
        brand: "저가",
        baseCity: "아시아",
        type: "LCC"
    },
    "에어아라비아": {
        size: "중형",
        culture: "혁신적",
        workIntensity: "중강도",
        routes: "단거리",
        region: "중동",
        brand: "저가",
        baseCity: "해외",
        type: "LCC"
    },
    "ANA 항공": {
        size: "대형",
        culture: "전통적",
        workIntensity: "고강도",
        routes: "장단거리혼합",
        region: "아시아",
        brand: "고급",
        baseCity: "아시아",
        type: "FSC"
    }
};

const questions = [
    {
        question: "귀하의 나이를 선택해 주세요.",
        choices: ["20-25세", "26-30세", "31-35세", "36세 이상"]
    },
    {
        question: "최종 학력을 선택해 주세요.",
        choices: ["고등학교 졸업", "4년제 대학 졸업"]
    },
    {
        question: "키를 입력해 주세요. (cm)",
        type: "number"
    },
    {
        question: "체중을 입력해 주세요. (kg)",
        type: "number"
    },
    {
        question: "영어 능력을 평가해 주세요.",
        choices: ["원어민 수준", "업무상 의사소통에 전혀 문제 없음", "일상적인 의사소통 가능", "기본적인 의사소통 가능", "초보 수준"]
    },
    {
        question: "영어 이외에 구사 가능한 언어가 있다면 선택해 주세요. (복수 선택 가능)",
        choices: ["중국어", "일본어", "스페인어", "프랑스어", "독일어", "아랍어", "기타"],
        multiple: true
    },
    {
        question: "해외 거주 경험이 있다면 총 기간을 선택해 주세요.",
        choices: ["없음", "6개월 미만", "6개월 ~ 1년", "1년 ~ 3년", "3년 이상"]
    },
    {
        question: "본인의 외모에 대한 자신감을 평가해 주세요. (1-낮음, 5-높음)",
        choices: ["1", "2", "3", "4", "5"]
    },
    {
        question: "고객 서비스 관련 경험이 있다면 선택해 주세요. (복수 선택 가능)",
        choices: ["호텔/리조트", "레스토랑/카페", "판매/영업", "고객 상담", "기타 서비스 직종", "경험 없음"],
        multiple: true
    },
    {
        question: "선호하는 항공사 규모는 어떠한가요?",
        choices: ["대형 항공사 (50개 이상의 도시에 취항)", "중소형 항공사 (50개 이하의 도시에 취항)"]
    },
    {
        question: "어떤 회사 분위기를 더 선호하시나요?",
        choices: ["전통적이고 체계적인 분위기", "혁신적이고 자유로운 분위기"]
    },
    {
        question: "선호하는 업무 강도는 어떠한가요?",
        choices: ["고강도 (많은 비행 시간, 빠른 페이스)", "저강도 (적은 비행 시간, 여유로운 페이스)"]
    },
    {
        question: "다양한 기종의 항공기를 경험하는 것에 대해 어떻게 생각하시나요?",
        choices: ["중요하다", "상관없다"]
    },
    {
        question: "가장 중요하게 생각하는 복리후생은 무엇인가요? (2개 선택)",
        choices: ["숙소 제공", "의료 보험", "퇴직금 및 보너스", "유급 휴가", "자기 개발 지원", "가족 복지 프로그램"],
        multiple: true,
        maxSelect: 2
    },
    {
        question: "근무 시 유니폼의 스타일과 디자인이 얼마나 중요한가요?",
        choices: ["매우 중요하다", "별로 중요하지 않다"]
    },
    {
        question: "어떤 유형의 운항 노선을 선호하시나요?",
        choices: ["장거리 노선 (6시간 이상의 비행 & 레이오버)", "단거리 노선 (6시간 미만의 비행 & 당일 퇴근)"]
    },
    {
        question: "주로 어느 지역으로의 운항을 선호하시나요?",
        choices: ["아시아", "유럽/중동", "미주/대양주"]
    },
    {
        question: "선호하는 비행 스케줄 패턴은 무엇인가요?",
        choices: ["연속된 며칠 간의 비행 후 긴 휴식", "짧은 비행과 휴식의 반복"]
    },
    {
        question: "야간 비행(밤샘 비행)에 대해 어떻게 생각하시나요?",
        choices: ["괜찮다", "가능한 피하고 싶다"]
    },
    {
        question: "비행과 비행 사이의 체류 시간(레이오버)은 어느 정도가 적당하다고 생각하시나요?",
        choices: ["짧은 체류 (24시간 이내)", "긴 체류 (24시간 이상)"]
    },
    {
        question: "오프 기간 동안 주로 어떤 활동을 하고 싶으신가요?",
        choices: ["집에서 충분한 휴식과 재충전", "주변 도시 여행이나 관광"]
    },
    {
        question: "한 달 평균 비행 시간으로 어느 정도를 선호하시나요?",
        choices: ["80시간 이상", "80시간 미만"]
    },
    {
        question: "비행 일정 변경에 대해 얼마나 유연하게 대처할 수 있나요?",
        choices: ["매우 유연하게 대처할 수 있다", "가능한 한 일정 변경을 피하고 싶다"]
    },
    {
        question: "고객 서비스에 대한 귀하의 접근 방식은 어떠한가요?",
        choices: ["정중하고 격식 있는 서비스 제공", "친근하고 개인화된 서비스 제공"]
    },
    {
        question: "항공사의 브랜드 이미지 중 어떤 것을 더 선호하시나요?",
        choices: ["고급스럽고 전통적인 이미지", "현대적이고 혁신적인 이미지"]
    },
    {
        question: "이슬람 문화권의 승객들을 응대하는 것에 대해 어떻게 생각하시나요?",
        choices: ["매우 흥미롭고 기대된다", "부담스럽고 긴장된다"]
    },
    {
        question: "승무원으로서의 외모 관리에 대해 어떻게 생각하시나요?",
        choices: ["항공사의 이미지를 위해 매우 중요하며, 철저히 규정을 따라야 한다", "중요하지만 개인의 개성도 어느 정도 존중되어야 한다"]
    },
    {
        question: "나이와 연차에 따른 시니어리티가 어느 정도는 필요하다고 생각하시나요?",
        choices: ["승무원은 안전 요원이므로 어느 정도의 위계 질서는 필요하다", "매뉴얼과 직급에 따라 일할 뿐, 시니어리티는 필요없다"]
    },
    {
        question: "새로운 환경에 적응하는 것에 대해 어떻게 생각하시나요?",
        choices: ["새로운 환경은 흥미롭고 도전적이다", "안정적이고 익숙한 환경을 선호한다"]
    },
    {
        question: "업무 상황에서 어려운 문제가 발생했을 때 주로 어떻게 대처하시나요?",
        choices: ["스스로 해결책을 찾아 해결하려 노력한다", "동료나 상사에게 도움을 요청해서 함께 해결한다"]
    },
    {
        question: "예상치 못한 상황 변화에 대해 어떻게 대응하시나요?",
        choices: ["위험을 감수하고 새로운 방법을 찾는다", "비슷한 상황을 대처한 과거의 사례를 찾아보고 적용한다"]
    },
    {
        question: "어떤 동료들이 있는 환경을 선호하시나요?",
        choices: ["다양한 국적의 동료가 많은 곳", "아시안 승무원이 많은 곳"]
    },
    {
        question: "업무와 개인 생활의 균형에 대해 어떻게 생각하시나요?",
        choices: ["업무에 더 비중을 두는 것이 중요하다", "개인 생활과의 균형이 매우 중요하다"]
    },
    {
        question: "팀 내에서 의견 충돌이 있을 때 어떻게 대처하시나요?",
        choices: ["적극적으로 의견을 제시하고 토론한다", "중재자 역할을 하거나 상황을 지켜본다"]
    },
    {
        question: "어떤 것을 더 중요하게 생각하시나요?",
        choices: ["빠른 시일 내에 입사해서 비행하는 것", "늦더라도 원하는 항공사에 입사하는 것"]
    },
    {
        question: "해외에서 진행되는 면접에 참여할 의향이 있으신가요?",
        choices: ["예, 기회가 된다면 적극적으로 참여하고 싶습니다", "아니오, 국내 채용을 선호합니다"]
    },
    {
        question: "스카이트랙스 선정 높은 순위 항공사에서 일하는 것에 대해 어떻게 생각하시나요?",
        choices: ["매우 중요하며 그런 항공사에 지원하고 싶다", "중요하지 않으며 다른 요소들을 더 고려한다"]
    },
    {
        question: "항공사 선택 시 가장 중요하게 고려하는 요소는 무엇인가요?",
        choices: ["급여 및 복리후생", "회사의 평판 및 주변의 인정"]
    },
    {
        question: "중동 항공사 입사에 대해 어떻게 생각하시나요?",
        choices: ["매력적인 옵션이며 적극 고려하고 있다", "선호하지 않으며 다른 지역을 우선적으로 고려한다"]
    },
    {
        question: "항공사 지원 시 어떤 전략을 선호하시나요?",
        choices: ["여러 항공사에 동시에 지원한다", "한 번에 한 항공사씩 집중적으로 준비한다"]
    },
    {
        question: "베이스 도시에 대해 어떻게 생각하시나요?",
        choices: ["한국 베이스거나 한국과 가까운 곳을 선호한다", "어디든 상관없다"]
    }
];

let currentQuestion = 0;
const answers = [];

document.getElementById('startBtn').addEventListener('click', startTest);

function startTest() {
    document.getElementById('startContainer').style.display = 'none';
    displayQuestion();
}

function displayQuestion() {
    const questionContainer = document.getElementById('questionContainer');
    if (currentQuestion < questions.length) {
        const q = questions[currentQuestion];
        let html = `<h3>${q.question}</h3>`;
        if (q.type === "number") {
            html += `<input type="number" id="answer" class="form-control mb-2">`;
            html += `<button onclick="selectAnswer()" class="btn btn-primary">다음</button>`;
        } else if (q.multiple) {
            q.choices.forEach((choice, index) => {
                html += `<div class="form-check">
                    <input class="form-check-input" type="checkbox" value="${index}" id="choice${index}">
                    <label class="form-check-label" for="choice${index}">${choice}</label>
                </div>`;
            });
            html += `<button onclick="selectMultipleAnswers(${q.maxSelect || 0})" class="btn btn-primary mt-2">다음</button>`;
        } else {
            q.choices.forEach((choice, index) => {
                html += `<button onclick="selectAnswer(${index})" class="btn btn-outline-primary m-2">${choice}</button>`;
            });
        }
        questionContainer.innerHTML = html;
        questionContainer.style.display = 'block';
    } else {
        showResult();
    }
}

function selectAnswer(choiceIndex) {
    if (questions[currentQuestion].type === "number") {
        answers.push(document.getElementById('answer').value);
    } else {
        answers.push(choiceIndex);
    }
    currentQuestion++;
    displayQuestion();
}

function selectMultipleAnswers(maxSelect) {
    const selectedChoices = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(cb => parseInt(cb.value));
    if (maxSelect && selectedChoices.length > maxSelect) {
        alert(`최대 ${maxSelect}개까지 선택 가능합니다.`);
        return;
    }
    answers.push(selectedChoices);
    currentQuestion++;
    displayQuestion();
}

function calculateScores(answers) {
    const scores = {};
    for (let airline in airlineProfiles) {
        scores[airline] = 0;
    }

    // 1. 개인 정보 및 기본 자격
    // 나이
    const age = answers[0];
    for (let airline in airlineProfiles) {
        if ((age <= 1 && airlineProfiles[airline].culture === "혁신적") ||
            (age >= 2 && airlineProfiles[airline].culture === "전통적")) {
            scores[airline] += 1;
        }
    }

    // 학력
    if (answers[1] === 1) { // 4년제 대학 졸업
        for (let airline in airlineProfiles) {
            if (airlineProfiles[airline].type === "FSC") {
                scores[airline] += 1;
            }
        }
    }

    // 영어 능력
    const englishLevel = answers[4];
    for (let airline in airlineProfiles) {
        if (englishLevel <= 1 && airlineProfiles[airline].region !== "아시아") {
            scores[airline] += 2;
        }
    }

    // 추가 언어
    const additionalLanguages = answers[5];
    for (let airline in airlineProfiles) {
        if (additionalLanguages.length > 0 && airlineProfiles[airline].routes === "장거리") {
            scores[airline] += additionalLanguages.length;
        }
    }

    // 해외 거주 경험
    const overseasExperience = answers[6];
    for (let airline in airlineProfiles) {
        if (overseasExperience >= 3 && airlineProfiles[airline].baseCity === "해외") {
            scores[airline] += 2;
        }
    }

    // 2. 선호 근무 환경 및 조건
    // 항공사 규모
    if (answers[9] === 0) { // 대형 항공사 선호
        for (let airline in airlineProfiles) {
            if (airlineProfiles[airline].size === "대형") {
                scores[airline] += 2;
            }
        }
    } else { // 중소형 항공사 선호
        for (let airline in airlineProfiles) {
            if (airlineProfiles[airline].size === "중형") {
                scores[airline] += 2;
            }
        }
    }

    // 회사 분위기
    if (answers[10] === 0) { // 전통적 분위기 선호
        for (let airline in airlineProfiles) {
            if (airlineProfiles[airline].culture === "전통적") {
                scores[airline] += 2;
            }
        }
    } else { // 혁신적 분위기 선호
        for (let airline in airlineProfiles) {
            if (airlineProfiles[airline].culture === "혁신적") {
                scores[airline] += 2;
            }
        }
    }

    // 업무 강도
    if (answers[11] === 0) { // 고강도 선호
        for (let airline in airlineProfiles) {
            if (airlineProfiles[airline].workIntensity === "고강도") {
                scores[airline] += 2;
            }
        }
    } else { // 저강도 선호
        for (let airline in airlineProfiles) {
            if (airlineProfiles[airline].workIntensity === "중강도") {
                scores[airline] += 2;
            }
        }
    }

    // 3. 운항 노선 및 근무 스케줄 선호도
    // 운항 노선
    if (answers[16] === 0) { // 장거리 노선 선호
        for (let airline in airlineProfiles) {
            if (airlineProfiles[airline].routes === "장거리" || airlineProfiles[airline].routes === "장단거리혼합") {
                scores[airline] += 2;
            }
        }
    } else { // 단거리 노선 선호
        for (let airline in airlineProfiles) {
            if (airlineProfiles[airline].routes === "단거리" || airlineProfiles[airline].routes === "장단거리혼합") {
                scores[airline] += 2;
            }
        }
    }

    // 지역 선호도
    const regionPreference = answers[17];
    for (let airline in airlineProfiles) {
        if ((regionPreference === 0 && airlineProfiles[airline].region === "아시아") ||
            (regionPreference === 1 && (airlineProfiles[airline].region === "유럽" || airlineProfiles[airline].region === "중동")) ||
            (regionPreference === 2 && airlineProfiles[airline].region === "유럽")) {
            scores[airline] += 3;
        }
    }

    // 4. 항공사 문화 및 가치관 적합성
    // 고객 서비스 접근 방식
    if (answers[24] === 0) { // 정중하고 격식 있는 서비스 선호
        for (let airline in airlineProfiles) {
            if (airlineProfiles[airline].type === "FSC") {
                scores[airline] += 2;
            }
        }
    } else { // 친근하고 개인화된 서비스 선호
        for (let airline in airlineProfiles) {
            if (airlineProfiles[airline].type === "LCC") {
                scores[airline] += 2;
            }
        }
    }

    // 브랜드 이미지
    if (answers[25] === 0) { // 고급스럽고 전통적인 이미지 선호
        for (let airline in airlineProfiles) {
            if (airlineProfiles[airline].brand === "고급" || airlineProfiles[airline].brand === "전통") {
                scores[airline] += 2;
            }
        }
    } else { // 현대적이고 혁신적인 이미지 선호
        for (let airline in airlineProfiles) {
            if (airlineProfiles[airline].brand === "현대적" || airlineProfiles[airline].brand === "저가") {
                scores[airline] += 2;
            }
        }
    }

    // 5. 개인의 가치관 및 적응력
    // 새로운 환경 적응
    if (answers[29] === 0) { // 새로운 환경 선호
        for (let airline in airlineProfiles) {
            if (airlineProfiles[airline].culture === "혁신적") {
                scores[airline] += 2;
            }
        }
    } else { // 안정적 환경 선호
        for (let airline in airlineProfiles) {
            if (airlineProfiles[airline].culture === "전통적") {
                scores[airline] += 2;
            }
        }
    }

    // 6. 취업 전략 및 선호도
    // 해외 면접 의향
    if (answers[36] === 0) { // 해외 면접 참여 의향 있음
        for (let airline in airlineProfiles) {
            if (airlineProfiles[airline].baseCity === "해외") {
                scores[airline] += 2;
            }
        }
    }

    // 스카이트랙스 순위 중요도
    if (answers[37] === 0) { // 높은 순위 중요
        for (let airline in airlineProfiles) {
            if (airlineProfiles[airline].type === "FSC") {
                scores[airline] += 2;
            }
        }
    }

    // 중동 항공사 선호도
    if (answers[39] === 0) { // 중동 항공사 선호
        for (let airline in airlineProfiles) {
            if (airlineProfiles[airline].region === "중동") {
                scores[airline] += 3;
            }
        }
    }

    // 베이스 도시 선호도
    if (answers[40] === 0) { // 한국 또는 가까운 곳 선호
        for (let airline in airlineProfiles) {
            if (airlineProfiles[airline].baseCity === "아시아") {
                scores[airline] += 2;
            }
        }
    }

    return scores;
}

function showResult() {
    const resultContainer = document.getElementById('resultContainer');
    const scores = calculateScores(answers);
    
    const rankedAirlines = Object.entries(scores)
        .sort((a, b) => b[1] - a[1])
        .map(entry => ({ name: entry[0], score: entry[1] }));
    
    let result = "<h2>테스트 결과</h2>";
    result += "<p>당신에게 가장 적합한 항공사는:</p>";
    result += `<h3>1. ${rankedAirlines[0].name}</h3>`;
    result += `<p>${rankedAirlines[0].name}는(은) 당신의 선호도와 가장 잘 맞는 항공사입니다.</p>`;
    result += `<h3>2. ${rankedAirlines[1].name}</h3>`;
    result += `<p>${rankedAirlines[1].name}도 좋은 선택이 될 수 있습니다.</p>`;
    
    result += "<h3>전체 순위:</h3>";
    result += "<ol>";
    rankedAirlines.forEach(airline => {
        result += `<li>${airline.name} (점수: ${airline.score})</li>`;
    });
    result += "</ol>";
    
    resultContainer.innerHTML = result;
    resultContainer.style.display = 'block';
    document.getElementById('questionContainer').style.display = 'none';
}
