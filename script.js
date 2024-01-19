let cityName;
let submit = document.querySelector('.submit')
let input = document.querySelector('#ipCity')

let status = document.querySelector('.status')
const name = document.querySelector('.cityName')
const temp = document.querySelector('.temp')
const desc = document.querySelector('.desc')
const wind = document.querySelector('.wind')
const humidity = document.querySelector('.humidity')

const weather = document.querySelector('.weather')

const apiKey = "be39cbfc0f4f8315780eeb04be992814"
let apiUrl;



async function checkWeather() {
    try {
    const response = await fetch(apiUrl)
    let data = await response.json()

        name.innerText = data.name
        desc.innerText = data.weather[0].main
        wind.innerText = data.wind.speed + ' km/h'
        temp.innerText = `${data.main.temp.toFixed(1)}°C`
        humidity.innerText = `${data.main.humidity}%`

        let statusId = data.weather[0].id
        updateImg(statusId)
        weather.style.display = 'block'
        document.querySelector('.errBlock').innerText = ""
    } 
    catch (err) {
        // console.log(err,"hai idher");
        document.querySelector('.errBlock').innerText = "Enter Valid City Name"
        weather.style.display = 'none'
    }
    
}

function updateImg(statusId) {


    if(800 == statusId){
        status.innerHTML = `<img src="imgs/clear.png" class="weatherIcon">`
    }
    else if ( 800 < statusId) {
        status.innerHTML = `<img src="imgs/clouds.png" class="weatherIcon">`  
    }
    else if (700<=statusId) {
        status.innerHTML = `<img src="imgs/Haze.png" class="weatherIcon">`  
    }
    else if (600 <= statusId) {
        status.innerHTML = `<img src="imgs/snow.png" class="weatherIcon">`
    }
    else if (500<= statusId) {
        status.innerHTML = `<img src="imgs/rain.png" class="weatherIcon">`
    }
    else if (300 <= statusId) {
        status.innerHTML = `<img src="imgs/drizzle.png" class="weatherIcon">`
    }
    else if (200<=statusId) {
        status.innerHTML = `<img src="imgs/thunderstorm.png" class="weatherIcon">`
    }
    else{
        status.innerHTML = `<img src="imgs/clear.png" class="weatherIcon">`
    }


}


submit.addEventListener('click' , ()=>{

    if (input.value ==='') {
        input.placeholder = 'Enter City Name'
        input.style.border = ' 2px solid red'
        weather.style.display = 'none'

    }
    else{
        
        input.placeholder = 'City Name'
        input.style.border = ''
        cityName = input.value
        apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
        console.log(cityName);
        input.value= ""
        checkWeather()
    }
    
})
