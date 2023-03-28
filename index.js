const header = document.querySelector(".header")
const main = document.querySelector(".main")
const startSurveyBtn = document.querySelector(".header__button")

const startSurvey = () => {
  header.classList.remove("visible")
  main.classList.add("visible")
}

startSurveyBtn.addEventListener("click", startSurvey)