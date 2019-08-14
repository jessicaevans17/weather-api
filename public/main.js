const main = async () => {
  const apiCity = "https://api.openweathermap.org/data/2.5/weather?q="
  const apiZip = "https://api.openweathermap.org/data/2.5/weather?zip="
  const userInput = document.querySelector(".input-field")
  const userStuff = userInput.value
  const apiKey = "&appid=10d8981dd6ae64f1a206eb9ba349089e"
  const units = "&units=imperial"
  const displayTemp = document.querySelector(".display-weather")
  if (parseInt(userStuff)) {
    const response = await fetch(
      `${apiZip}${parseInt(userStuff)}${units}${apiKey}`
    )
    if (response.status === 200) {
      const json = await response.json()
      console.log(json)
      displayTemp.textContent = `Current Temperature: ${parseInt(
        json.main.temp
      )}`
      const mainDescription = document.createElement("h2")
      mainDescription.textContent = json.weather[0].main
      displayTemp.appendChild(mainDescription)
      const cityName = document.createElement("h3")
      cityName.textContent = json.name
      document.querySelector(".display-weather").appendChild(cityName)
    }
    userInput.value = ""
  } else {
    const resp = await fetch(`${apiCity}${userInput.value}${units}${apiKey}`)
    // console.log(resp)
    if (resp.status === 200) {
      const json = await resp.json()
      console.log(json)
      displayTemp.textContent = `Current Temperature: ${parseInt(
        json.main.temp
      )}`
      const mainDescription = document.createElement("h2")
      mainDescription.textContent = json.weather[0].main
      displayTemp.appendChild(mainDescription)
      const cityName = document.createElement("h2")
      cityName.textContent = userInput.value
      document.querySelector(".display-weather").appendChild(cityName)
    }

    userInput.value = ""
  }
}
document.querySelector(".search").addEventListener("click", main)
// document.addEventListener("DOMContentLoaded", main)
