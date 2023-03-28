// go from header to main 
const header = document.querySelector(".header")
const main = document.querySelector(".main")
const startSurveyBtn = document.querySelector(".header__button")
const innerProgressBar = document.querySelector(".progress__innerBar")

const startSurvey = () => {
  header.classList.remove("visible-flex")
  main.classList.add("visible-flex")
}

startSurveyBtn.addEventListener("click", startSurvey)





// change question by question
const ratingBtns = document.querySelectorAll(".main__buttonRating")
const question = document.querySelectorAll(".main__question")
const footer = document.querySelector(".footer")
let amountToMove = 12

const goToNextQuestion = () => {
  for (let i = 0; i < question.length; i++){
    if (question[i].classList.contains("visible-block")) {
      if (i === question.length-1){
        main.classList.remove("visible-flex")
        footer.classList.add("visible-flex")
      } else {
        question[i].classList.remove("visible-block")
        question[i+1].classList.add("visible-block")
        break;
      }
    }
  }
  
  innerProgressBar.style.marginLeft = amountToMove + "px"
  amountToMove = amountToMove + 12 
}

ratingBtns.forEach((btn) => {
  btn.addEventListener("click", goToNextQuestion)
})







// score and user levels dynamically
const footerScore = document.querySelector(".footer__score")
const userLevel = document.querySelector(".footer__userLevel")
let currentScore = 0
let finalScore;

const userLevels = {
  basicLevel: "Basic Level",
  intermidiateLevel: "Intermidiate Level",
  advanceLevel: "Advance Level",
}

const updateScore = (e) => {
  let ratingChoice = Number(e.target.id)
  currentScore = currentScore + ratingChoice
  finalScore = currentScore/question.length
  footerScore.textContent = `Your Score is ${finalScore}%`
  if (finalScore < 30){
    userLevel.textContent = `You are a ${userLevels.basicLevel}` 
  } else if (finalScore > 31 && finalScore < 70){
    userLevel.textContent = `You are a ${userLevels.intermidiateLevel}` 
  } else {
    userLevel.textContent = `You are a ${userLevels.advanceLevel}` 
  }
}

ratingBtns.forEach((btn) => {
  btn.addEventListener("click", updateScore)
})