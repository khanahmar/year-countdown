const daysEl = document.querySelector(".days")
const hourEl = document.querySelector(".hour")
const minEl = document.querySelector(".min")
const secEl = document.querySelector(".sec")

const countDown = new Date("2024-01-01T12:00:00Z").getTime()

setInterval(() => {
  let myTime = new Date().getTime()
  let untilTime = countDown - myTime
  daysEl.innerHTML = Math.floor(untilTime / (1000 * 60 * 60 * 24))
  hourEl.innerHTML = Math.floor(
    (untilTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
  minEl.innerHTML = Math.floor((untilTime % (1000 * 60 * 60)) / (1000 * 60))
  secEl.innerHTML = Math.floor((untilTime / 1000) % 60)
}, 1000)
