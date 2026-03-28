
let question1 = "1. In which year was JavaScript created?";
let answer1 = "a";

let question2 = "2. Which language is used for interactivity in websites?";
let answer2 = "c";

let question3 = "3. Which function prints output in the console?";
let answer3 = "b";

let question4 = "4. Which method is used to attach an event handler?";
let answer4 = "b";

// Display questions dynamically
document.getElementById("q1Text").innerText = question1;
document.getElementById("q2Text").innerText = question2;
document.getElementById("q3Text").innerText = question3;
document.getElementById("q4Text").innerText = question4;

// Individual check functions
function checkQ1() {
    let selected = document.querySelector('input[name="q1"]:checked');
    return selected && selected.value === answer1 ? 1 : 0;
}

function checkQ2() {
    let selected = document.querySelector('input[name="q2"]:checked');
    return selected && selected.value === answer2 ? 1 : 0;
}

function checkQ3() {
    let selected = document.querySelector('input[name="q3"]:checked');
    return selected && selected.value === answer3 ? 1 : 0;
}

function checkQ4() {
    let selected = document.querySelector('input[name="q4"]:checked');
    return selected && selected.value === answer4 ? 1 : 0;
}

// Submit quiz
function submitQuiz() {
    let totalScore = 0;

    totalScore += checkQ1();
    totalScore += checkQ2();
    totalScore += checkQ3();
    totalScore += checkQ4();

    let resultDiv = document.getElementById("result");

    // Conditional messages
    if (totalScore === 4) {
        resultDiv.innerHTML = "Excellent! : You scored 4/4";
    } 
    else if (totalScore >= 2) {
        resultDiv.innerHTML = "Good job : You scored " + totalScore + "/4";
    } 
    else {
        resultDiv.innerHTML = "Keep practicing : You scored " + totalScore + "/4";
    }
}

// Reset quiz
function resetQuiz() {
    let radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => radio.checked = false);

    document.getElementById("result").innerHTML = "";
}
