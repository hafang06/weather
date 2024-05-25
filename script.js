"use strict";

const apiKey = "6f6fca8773cdd70a42440f55d9efe016";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric"

const input = document.querySelector(".getname input");
const btn = document.querySelector(".getname button");

async function checkWeather(cityname){
    const response = await fetch(apiurl + `&appid=${apiKey}&q=${cityname}`);
    let data = await response.json();
    console.log(data);
    if(data.cod == "404"){
        alert(`Không tìm thấy thành phố có tên ${cityname}`);
    }
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " km/h";
    let curWeather = data.weather[0].main;
    // console.log(curWeather[0].main);
    let show;
    if(curWeather == "Clear") show = "Trong lành";
    if(curWeather == "Clouds") show = "Trời nhiều mây";
    if(curWeather == "Snow") show = "Có tuyết rơi";
    if(curWeather == "Drizzle") show = "Mưa phùn";

    document.querySelector(".curweather").innerHTML = show;
}
btn.addEventListener("click", ()=>{
    checkWeather(input.value);
});
