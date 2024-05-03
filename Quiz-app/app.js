

function signup() {

    window.location.href = "./registration.html"

}

function register() {
    var value = document.getElementById("email").value
    var value1 = document.getElementById("conpassword").value

    // var obj ={
    //     email: value,
    //     confirmpassword: value1
    // }

    localStorage.setItem("Email", JSON.stringify(value))
    localStorage.setItem("Confirm-Password", JSON.stringify(value1))

    var p = document.getElementById("password").value;

    if (p == value1) {
        console.log("Login SUccess")
        alert("Register Successfully")
        window.location.href = "./login.html"
    } else {
        alert("Password doesn't match")
    }
}

function Login() {

    var firstvalue = document.getElementById("email-login").value;
    var firstloSt = JSON.parse(localStorage.getItem('Email'))

    var secondvalue = document.getElementById("password-login").value
    var secondloSt = JSON.parse(localStorage.getItem('Confirm-Password'))

    // console.log(firstloSt)
    // console.log(firstvalue)
    // console.log(secondvalue)
    // console.log(secondloSt)

    if (firstvalue == firstloSt && secondvalue == secondloSt) {
        alert("Login Successfull")
        window.location.href = "./content.html"

    }
    else if (firstvalue !== firstloSt || secondvalue !== secondloSt) {
        alert("Invalid Email or Password")
    } 
    // else {
    //     alert("All feilds are required")
    // }
}

function physics(){
    window.location.href = "./physics.html"
}

function key(){
    window.location.href = "./quizkey.html"
}

function reveal(){
    var char= "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%^&*"
    // var fixed = Math.random().toFixed(4);
    var c1 =char.charAt(Math.floor(Math.random() * char.length));
    // c1= Math.random().toFixed(4)
    console.log(c1)
    var u =document.getElementById("revealkey",c1)
//     console.log(u)
//     var m=  Math.random().toFixed(2);
//     console.log(m)
}

function copykey(){
    document.getElementById("key")
}
//  ************** Quiz Portion **********************



var htmlQuiz = [

    { que: 'Who is making the Web standards?    ', opt1: 'GOOGLE', opt2: 'MICROSOFT', opt3: 'MOZILLA', opt4: 'WORLD WIDE WEB', ans: 'WORLD WIDE WEB' },

    { que: 'What is the abbreviation of HTML', opt1: 'HYPER TEXT MARKUP LANGUAGE', opt2: 'HYPER INFO MARKUP LANGUAGE', opt3: 'HYPER TEND MARK LANGUAGE', opt4: 'HYPER TEST MARKS LANGUAGE', ans: 'HYPER TEXT MARKUP LANGUAGE' }
    ,


    { que: 'Choose the correct HTML element to define important text', opt1: 'STRONG', opt2: 'I', opt3: 'B', opt4: 'IMPORTANT', ans: 'IMPORTANT' },

]

var questionCount = 0
var score = 0

var label1 = document.querySelector('#val1')
var label2 = document.querySelector('#val2')
var label3 = document.querySelector('#val3')
var label4 = document.querySelector('#val4')

var opt1 = document.querySelector('#option1')
var opt2 = document.querySelector('#option2')
var opt3 = document.querySelector('#option3')
var opt4 = document.querySelector('#option4')

var quizWindow = document.querySelector('#quizWindow')

var resultWindow = document.querySelector('#result')

var question = document.querySelector('#question')

var announce = document.querySelector('#announce')


var totalQueCount = document.querySelector('#totalQueCount')

var correctQueCount = document.querySelector('#correctQueCount')

var answers = document.getElementsByClassName('optionsCheck')


function renderQuestion() {
    question.innerHTML = htmlQuiz[questionCount].que

    label1.innerHTML = htmlQuiz[questionCount].opt1
    label2.innerHTML = htmlQuiz[questionCount].opt2
    label3.innerHTML = htmlQuiz[questionCount].opt3
    label4.innerHTML = htmlQuiz[questionCount].opt4

    opt1.value = htmlQuiz[questionCount].opt1
    opt2.value = htmlQuiz[questionCount].opt2
    opt3.value = htmlQuiz[questionCount].opt3
    opt4.value = htmlQuiz[questionCount].opt4

}

function deSelect() {
    for (var i = 0; i < answers.length; i++) {
        answers[i].checked = false
    }
}

function next() {
    var checkedAns = false
    for (var i = 0; i < answers.length; i++) {
        // console.log(answers[i].value)
        // console.log(answers[i].checked)
        if (answers[i].checked) {
            checkedAns = true
            if (answers[i].value === htmlQuiz[questionCount].ans) {
                score++
            }
        }
    }

    if (!checkedAns) {
        alert('Please Select Any Option')
    } else {
        if (questionCount < htmlQuiz.length - 1) {
            questionCount++
            deSelect()
            renderQuestion()
        } else {
            showResult()
        }
    }
}

function showResult() {
    console.log('your score is ' + score)
    quizWindow.style.display = 'none'
    resultWindow.style.display = 'block'
    totalQueCount.innerHTML = htmlQuiz.length
    correctQueCount.innerHTML = score

    var percentage = Math.floor((score / htmlQuiz.length) * 100)

    if (percentage < 70) {
        announce.innerHTML = 'You have Failed'
    } else {
        announce.innerHTML = 'You Passed'

    }
}


window.onload = renderQuestion()