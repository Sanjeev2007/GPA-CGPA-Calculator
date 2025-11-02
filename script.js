const internalScoreElement = document.getElementById("internal-avg");
const externalScoreElement = document.getElementById("external-avg");
const subjectCreditsElement = document.getElementById("subject-credits");
let gpaScoreElement = document.querySelector("#gpa-score");
const letterGradeElement = document.querySelector("#letter-grade");




function checkEnterKey(event) {
    if (event.key == 'Enter') {
        gpaCalculator();
    }
}

function gpaCalculator() {
    const internalScore = internalScoreElement.value;
    const externalScore = externalScoreElement.value;
    const subjectCredits = subjectCreditsElement.value;
    const total = 0.4*internalScore + 0.6*externalScore;
    
    if (total>=91 ) {
        gpaScoreElement.innerHTML = `Grade Point:10.0`;
    }
    



}

externalScoreElement.addEventListener("keyup", checkEnterKey);