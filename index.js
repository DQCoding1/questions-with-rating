//go from header to main 
const header = document.querySelector(".header")
const main = document.querySelector(".main")
const startSurveyBtn = document.querySelector(".header__button")

const startSurvey = () => {
  header.classList.remove("visible")
  main.classList.add("visible")
}

startSurveyBtn.addEventListener("click", startSurvey)





//change question by question
const ratingBtns = document.querySelectorAll(".main__buttonRating")
const question = document.querySelectorAll(".main__question")
const footer = document.querySelector(".footer")

const goToNextQuestion = () => {
  for (let i = 0; i < question.length; i++){
    if (question[i].classList.contains("visible")) {
      if (i === question.length-1){
        main.classList.remove("visible")
        footer.classList.add("visible")
      } else {
        question[i].classList.remove("visible")
        question[i+1].classList.add("visible")
        break;
      }
    }
  }
}

ratingBtns.forEach((btn) => {
  btn.addEventListener("click", goToNextQuestion)
})

